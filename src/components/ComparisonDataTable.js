import React from 'react';
import ComparisonTableCell  from './ComparisonTableCell';
import ComparisonHeader from './ComparisonHeader';
import { shape, objectOf, arrayOf, string, number, object } from 'prop-types';
import './styles/ComparisonDataTable.css';

const ComparisonDataTable = ({ schools, selectedSchools }) => {
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

  const renderCells = Object.keys(dataKeys).map(e => {
    return <ComparisonTableCell
      key={Math.round(Date.now() * Math.random())}
      data={combinedData[e]}
      year={e}
    />
  })

  return(
    <div className="comparison-table">
      <ComparisonHeader schools={ schools } selectedSchools={ selectedSchools } />
      {renderCells}
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
  schools: objectOf(schools),
  selectedSchools: arrayOf(selectedSchools)
}

export default ComparisonDataTable;
