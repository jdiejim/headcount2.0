import React from 'react';
import SchoolDataTable from './SchoolDataTable';
import PropTypes, { shape, string, number } from 'prop-types';
import './styles/School.css';

const School = (props) => {
  const { school, school: { location, data, info }, selectedSchools, handleSelectSchool } = props;
  let renderGraph;

  if (selectedSchools.map(s => s.location).indexOf(location) != -1) {
    renderGraph = <SchoolDataTable data={data} />;
  }

  return(
    <article
      onClick={() => handleSelectSchool(school)}
      className="school-card">
      {location}
      {renderGraph}
    </article>
  )
}

export default School;
