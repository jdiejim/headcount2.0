import React from 'react';
import ComparisonTableCell  from './ComparisonTableCell';
import { shape, objectOf, arrayOf, string, number, object } from 'prop-types';
import './styles/ComparisonDataTable.css';

const ComparisonDataTable = ({ schools, selectedSchools }) => {
  let school1avg = '';
  let school2avg = '';
  let comparedAvg = '';

  if(selectedSchools.length === 0){
    return (<span></span>);
  }

  const tableHeader = [selectedSchools[0].location];
  if(selectedSchools[1]) tableHeader.push(selectedSchools[1].location);

  let dataKeys = {};
  selectedSchools.forEach((school) => {
    dataKeys = Object.assign(dataKeys, school.data)
  })

  const combinedData = Object.keys(dataKeys).reduce((obj, year) => {
    if(!obj[year]) obj[year] = []

    if(selectedSchools[0]){
      if(!selectedSchools[0].data[year]) selectedSchools[0].data[year] = 0
      obj[year].push(selectedSchools[0].data[year])
    }
    if(selectedSchools[1]){
      if(!selectedSchools[1].data[year]) selectedSchools[1].data[year] = 0
      obj[year].push(selectedSchools[1].data[year])
    }
    return obj;
  }, {})

  if(selectedSchools.length === 2){
    const school1 = selectedSchools[0].location
    const school2 = selectedSchools[1].location
    const comparedData = schools.compareDistrictAverages(school1, school2)
    school1avg = comparedData[school1];
    school2avg = comparedData[school2];
    comparedAvg = comparedData['compared'];
  }

  const comparisonTableCells = Object.keys(dataKeys).map(e => {
    return <ComparisonTableCell
      key={Math.round(Date.now() * Math.random())}
      data={combinedData[e]}
      year={e}
    />
  })

  return(
    <div className="comparison-table">
      {/* <article className="comparison-table-row">
        <p className="year-cell"></p>
        <div className="comparison-header-cell">
          <p>{tableHeader[0]}</p>
        </div>
        {tableHeader[1] &&
          <div className="comparison-header-cell">
            <p>{tableHeader[1]}</p>
          </div>
        }
      </article> */}
      <article className="comparison-table-row">
        <div className="comparison-header-cell">
          <p>School 1: {school1avg}</p>
        </div>
        <div className="comparison-header-cell">
          <p>Compared: {comparedAvg}</p>
        </div>
        <div className="comparison-header-cell">
          <p>School 2: {school2avg}</p>
        </div>
      </article>
      {comparisonTableCells}
    </div>
  )
}

const selectedSchools = shape({
  location: string,
  data: objectOf(number),
  info: arrayOf(object)
});

const schools = shape({
  data: arrayOf(object)
});

ComparisonDataTable.propTypes = {
  selectedSchools: arrayOf(selectedSchools)
}

export default ComparisonDataTable;
