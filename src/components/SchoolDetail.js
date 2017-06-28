import React from 'react';
import SchoolDataGraph from './SchoolDataGraph';
import ComparisonDataTable from './ComparisonDataTable';
import { shape, string, object, arrayOf } from 'prop-types';
import './styles/SchoolDetail.css';

const SchoolDetail = ({ data }) => {
  let renderSchools = [];
  data.forEach(school => {
    renderSchools.push(<SchoolDataGraph school={school} key={Math.round(Date.now()*Math.random())}/>);
  })

  return(
    <div className="school-detail">
      {renderSchools}
      <ComparisonDataTable schools={data} />
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
