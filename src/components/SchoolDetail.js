import React from 'react';
import School from './School';
import ComparisonDetail from './ComparisonDetail';
import PropTypes, { shape, string, object, arrayOf } from 'prop-types';
import './styles/SchoolDetail.css';

const SchoolDetail = ({ data }) => {
  return(
    <div className="school-detail">
      <ComparisonDetail data={data}  />
    </div>
  )
}

export default SchoolDetail;

const school = shape({
  location: string,
  data: object,
  info: arrayOf(object),
})

SchoolDetail.propTypes = {
  data: arrayOf(school)
}
