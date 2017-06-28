import React from 'react';
import { string, number, arrayOf } from 'prop-types';
import './styles/ComparisonTableCell.css';

const ComparisonTableCell = ({ data, year }) => {
  let bgStyle1;
  let bgStyle2;

  if(data[0] !== 'undefined'){
    bgStyle1 = { backgroundColor: data[0] > 0.5 ? '#6FD1BB' : '#E58B8B' }
  }
  if(data[1] !== 'undefined'){
    bgStyle2 = { backgroundColor: data[1] > 0.5 ? '#6FD1BB' : '#E58B8B' }
  }

  return (
    <article className="table-cell">
      <p className="year-cell">{year}</p>
      {bgStyle1 &&
        <div className="data-cell">
          <p style={bgStyle1}>{data[0]}</p>
        </div>
      }
      {bgStyle2 &&
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
