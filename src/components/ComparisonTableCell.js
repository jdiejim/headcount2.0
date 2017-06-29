import React from 'react';
import { string, number, arrayOf } from 'prop-types';
import './styles/ComparisonTableCell.css';

const ComparisonTableCell = ({ data, year }) => {
  const bgStyle1 = { backgroundColor: data[0] > 0.5 ? '#6FD1BB' : '#E58B8B' };
  let bgStyle2 = {}

  if(data.length > 1){
    bgStyle2 = { backgroundColor: data[1] > 0.5 ? '#6FD1BB' : '#E58B8B' }
  }

  return (
    <article className="table-cell">
      <p className="year-cell">{year}</p>
        <div className="data-cell">
          <p style={bgStyle1}>{data[0]}</p>
        </div>
      {data.length > 1 &&
        <div className="data-cell">
          <p style={bgStyle2}>{data[1]}</p>
        </div>
      }
    </article>
  )
}

ComparisonTableCell.propTypes = {
  data: arrayOf(number),
  year: string
}

export default ComparisonTableCell;
