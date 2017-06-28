import React from 'react';
import { string, number } from 'prop-types';
import './styles/ComparisonTableCell.css';

const ComparisonTableCell = ({ data, year }) => {
  const dataStyle = {
    backgroundColor: data > 0.5 ? '#6FD1BB' : '#E58B8B'
  }

  return (
    <article className="table-cell">
      <p className="year-cell">{year}</p>
      <div className="data-cell">
        <p style={dataStyle}>{data}</p>
      </div>
    </article>
  )
}

ComparisonTableCell.propTypes = {
  data: number,
  year: string
}

export default ComparisonTableCell;
