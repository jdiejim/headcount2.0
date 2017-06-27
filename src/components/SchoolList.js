import React from 'react';
import School from './School';
import PropTypes, { shape, string, number, func } from 'prop-types';
import './styles/SchoolList.css';

const SchoolList = ({ data }) => {
  const schools = Object.keys(data);
  const schoolsArray = schools.map(school => {
    const schoolData = data[school];
    console.log(schoolData);
    return <School school={schoolData} key={Math.round(Date.now()*Math.random())} />
  })

  return (
    <aside className="school-list">
      {schoolsArray}
    </aside>
  )
}

export default SchoolList;
