import React from 'react';
import { string, number, arrayOf } from 'prop-types';
import './styles/ComparisonTableCell.css';

const ComparisonTableCell = ({ data, year }) => {
  console.log('data', data);

  data.map(e => e > 0.5 ? "<span className='cell-blue'>{e}</span>" : "<span className='cell-red'>{e}</span>")

  console.log('data', data);

  // const dataStyle = {
  //   backgroundColor: data > 0.5 ? '#6FD1BB' : '#E58B8B'
  // }

  return (
    <article className="table-cell">
      {/* <p className="year-cell">{year}</p>
      <div className="data-cell">
        <p style={dataStyle}>{data}</p>
      </div> */}
    </article>
  )
}

ComparisonTableCell.propTypes = {
  data: arrayOf(number),
  year: string
}

export default ComparisonTableCell;
