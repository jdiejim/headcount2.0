import React from 'react';
import ComparisonTableCell  from './ComparisonTableCell';
import { shape, objectOf, arrayOf, string, number, data, object } from 'prop-types';
import './styles/ComparisonDataTable.css';

const ComparisonDataTable = ({ schools }) => {
  if(schools.length === 0){
    return (<div>Please select a school.</div>);
  }

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
