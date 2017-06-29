import React from 'react';
import SchoolDataGraph from './SchoolDataGraph';
import ComparisonDataTable from './ComparisonDataTable';
import { shape, string, object, arrayOf } from 'prop-types';
import './styles/SchoolDetail.css';

const SchoolDetail = ({ schools, selectedSchools }) => {
  let renderSchools = [];
  selectedSchools.forEach(school => {
    renderSchools.push(<SchoolDataGraph school={school} key={Math.round(Date.now()*Math.random())}/>);
  })

  return(
    <div className="school-detail">
      {renderSchools}
      <ComparisonDataTable
        schools={schools}
        selectedSchools={selectedSchools} />
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
  selectedSchools: arrayOf(school)
}
