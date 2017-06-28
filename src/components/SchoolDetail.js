import React from 'react';
import School from './School';
import ComparisonDetail from './ComparisonDetail';
import PropTypes, { shape, string, number, func } from 'prop-types';
import './styles/SchoolDetail.css';

const SchoolDetail = ({ data }) => {
  return(
    <div className="school-detail">
      <ComparisonDetail data={data}  />
    </div>
  )
}

export default SchoolDetail;
