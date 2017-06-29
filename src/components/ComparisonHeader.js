import React from 'react';
import { object, arrayOf, shape, objectOf, string, number } from 'prop-types';
import './styles/ComparisonHeader.css';

const ComparisonHeader = ({ schools, selectedSchools }) => {
  let comparedAvg;

  if(selectedSchools.length === 2){
    const comparedData = schools.compareDistrictAverages(
      selectedSchools[0].location, selectedSchools[1].location);
    comparedAvg = comparedData['compared'];
  }

  return(
      <article className="comparison-table-row">
        {selectedSchools.length === 2 &&
          <p><span className='comp-avg-header'>Average:</span> { comparedAvg }</p>
        }
      </article>
  )
}

const selectedSchools = shape({
  location: string,
  data: objectOf(number),
  info: arrayOf(object)
});

const schools = shape({
  data: arrayOf(object)
});

ComparisonHeader.propTypes = {
  schools: objectOf(schools),
  selectedSchools: arrayOf(selectedSchools),
}

export default ComparisonHeader;
