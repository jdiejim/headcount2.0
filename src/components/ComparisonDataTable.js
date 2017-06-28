import React from 'react';
import ComparisonTableCell  from './ComparisonTableCell';
import { shape, objectOf, arrayOf, string, number, data, object } from 'prop-types';
import './styles/ComparisonDataTable.css';

const ComparisonDataTable = ({ schools }) => {
  if(schools.length === 0){
    return (<div>Please select a school.</div>);
  }

  const tableHeader = [schools[0].location];
  if(schools[1]) tableHeader.push(schools[1].location);

  let dataKeys = {};
  schools.forEach((school) => {
    dataKeys = Object.assign(dataKeys, school.data)
  })

  const combinedData = Object.keys(dataKeys).reduce((obj, year) => {
    if(!obj[year]) obj[year] = []

    if(schools[0]){
      if(!schools[0].data[year]) schools[0].data[year] = 0
      obj[year].push(schools[0].data[year])
    }
    if(schools[1]){
      if(!schools[1].data[year]) schools[1].data[year] = 0
      obj[year].push(schools[1].data[year])
    }
    return obj;
  }, {})

  const comparisonTableCells = Object.keys(dataKeys).map(e => {
    return <ComparisonTableCell
      key={Math.round(Date.now() * Math.random())}
      data={combinedData[e]}
      year={e}
    />
  })

  return(
    <div className="comparison-table">
      <article className="comparison-table-row">
        <p className="year-cell"></p>
        <div className="comparison-header-cell">
          <p>{tableHeader[0]}</p>
        </div>
        {tableHeader[1] &&
          <div className="comparison-header-cell">
            <p>{tableHeader[1]}</p>
          </div>
        }
      </article>
      {comparisonTableCells}
    </div>
  )
}

const schools = shape({
  location: string,
  data: objectOf(number),
  info: arrayOf(data)
});

ComparisonDataTable.propTypes = {
  schools: arrayOf(object)
}

export default ComparisonDataTable;
