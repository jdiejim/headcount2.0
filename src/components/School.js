import React from 'react';
import SchoolDataTable from './SchoolDataTable';
import { func, arrayOf, object } from 'prop-types';
import './styles/School.css';

const School = (props) => {
  const { school, school: { location, data }, selectedSchools, handleSelectSchool } = props;
  const dataKeys = Object.keys(data);
  const average = Math.round((dataKeys.reduce((t, k) => t += data[k], 0) / dataKeys.length) * 100) / 100;
  let renderGraph;
  const bgStyle = {
    backgroundColor: average > 0.5 ? '#D0EFE8' : '#F0CECE'
  }

  if (selectedSchools.map(s => s.location).indexOf(location) !== -1) {
    renderGraph = <SchoolDataTable data={data} />;
  }

  return(
    <article
      style={bgStyle}
      onClick={() => handleSelectSchool(school)}
      className={"school-card"}>
      <div className="school-info-wrapper">
        <h3 className="school-title">{location.toLowerCase()}</h3>
        <div className="school-average-wrapper">
          <h3 className="school-average">{average}</h3>
          <p className="average-label">average</p>
        </div>
      </div>
      {renderGraph}
    </article>
  )
}

School.propTypes = {
  school: object,
  selectedSchools: arrayOf(object),
  handleSelectSchool: func,
}

export default School;
