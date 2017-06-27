import React from 'react';
import SchoolDataTable from './SchoolDataTable';
import PropTypes, { shape, string, number } from 'prop-types';

const School = ({ school: { location, data, info } }) => {

  return(
    <div>
      {location}
      <SchoolDataTable data={data} />

    </div>
  )
}

export default School;
