import React from 'react';
// import { LineChart, Line } from 'recharts';
import PropTypes, { shape, string, number } from 'prop-types';

const SchoolDataTable = ({ data }) => {
  const schoolData = Object.keys(data).map(e => {
    return { name: e };
  })

  schoolData.forEach((e) => {
    if (data[e.name] >= 0.5) {
      e.up = data[e.name];
    }
    if (data[e.name] <= 0.5) {
      e.up = data[e.name];
      e.low = data[e.name];
    }
  })

  return(
    <div>
      School data
      {/* <LineChart width={150} height={50} data={schoolData}>
        <Line type='linear' dataKey='up' stroke='blue' />
        <Line type='linear' dataKey='low' stroke='red' />
      </LineChart> */}
    </div>
  )
}

export default SchoolDataTable;
