import React from 'react';
import School from './School';
import SchoolDataGraph from './SchoolDataGraph';
import PropTypes, { shape, string, object, arrayOf } from 'prop-types';
import './styles/SchoolDetail.css';

const SchoolDetail = ({ data }) => {
  let renderVal = [];
  data.forEach(school => {
    renderVal.push(<SchoolDataGraph school={school} />);
  })
  return(
    <div className="school-detail">
      {renderVal}
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
