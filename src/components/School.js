import React from 'react';
import SchoolDataTable from './SchoolDataTable';
import { shape, string, number, func, arrayOf, object } from 'prop-types';
import './styles/School.css';

const School = (props) => {
  const { school, school: { location, data }, selectedSchools, handleSelectSchool } = props;
  let renderGraph;

  if (selectedSchools.map(s => s.location).indexOf(location) !== -1) {
    renderGraph = <SchoolDataTable data={data} />;
  }

  return(
    <article
      onClick={() => handleSelectSchool(school)}
      className="school-card">
      <h3 className="school-title">{location}</h3>
      {renderGraph}
    </article>
  )
}

const data = shape({
  data: number,
  dataFormat: string,
  timeFrame: number,
});

School.propTypes = {
  school: object,
  selectedSchools: arrayOf(object),
  handleSelectSchool: func,
}

export default School;
