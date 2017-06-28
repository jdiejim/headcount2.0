import React from 'react';
import School from './School';
import SearchBar from './SearchBar';
import { shape, string, number, object, array, func, arrayOf, objectOf, oneOfType } from 'prop-types';
import './styles/SchoolList.css';

const SchoolList = ({ schools, selectedSchools, handleSelectSchool, handleSearch }) => {
  const schoolKeys = Object.keys(schools);
  const schoolsArray = schoolKeys.map(school =>
    <School school={schools[school]}
            selectedSchools={selectedSchools}
            handleSelectSchool={handleSelectSchool}
            key={Math.round(Date.now()*Math.random())}
    />);

  return (
    <aside className="school-list">
      <SearchBar handleSearch={handleSearch} />
      {schoolsArray}
    </aside>
  )
}

const schools = shape({
  location: string,
  data: objectOf(number),
  info: arrayOf(object)
});

SchoolList.propTypes = {
  schools: oneOfType([array, object]),
  selectedSchools: arrayOf(schools),
  handleSelectSchool: func,
}

export default SchoolList;
