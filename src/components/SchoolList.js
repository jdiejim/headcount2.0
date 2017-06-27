import React from 'react';
import School from './School';
import PropTypes, { shape, string, number, func } from 'prop-types';
import './styles/SchoolList.css';

const SchoolList = ({ schools, selectedSchools, handleSelectSchool }) => {
  const schoolKeys = Object.keys(schools);
  const schoolsArray = schoolKeys.map(school => {
    const schoolData = schools[school];
    return <School school={schoolData}
                   selectedSchools={selectedSchools}
                   handleSelectSchool={handleSelectSchool}
                   key={Math.round(Date.now()*Math.random())} />
  })

  return (
    <aside className="school-list">
      {schoolsArray}
    </aside>
  )
}

export default SchoolList;
