import React from 'react';
import School from './School';
import SearchBar from './SearchBar';
import { shape, string, number, func, arrayOf, objectOf, oneOfType } from 'prop-types';
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
      <SearchBar />
      {schoolsArray}
    </aside>
  )
}

const data = shape({
  data: oneOfType([string, number]),
  dataFormat: string,
  timeFrame: number
});

const schools = shape({
  location: string,
  data: objectOf(number),
  info: arrayOf(data)
});

SchoolList.propTypes = {
  schools: objectOf(schools),
  selectedSchools: arrayOf(schools),
  handleSelectSchool: func,
}

export default SchoolList;
