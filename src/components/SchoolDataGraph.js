import React from 'react';
import { LineChart, Line } from 'recharts';
import { getAverage } from '../helper';
import './styles/SchoolDataGraph.css';

const SchoolDataGraph = ({ school }) => {
  if (school.length === 0) {
    return <div />
  }

  const schoolData = Object.keys(school.data).map(e => {
    return { name: e };
  })

  schoolData.forEach((e) => {
    e.val = school.data[e.name];
  });

  const average = getAverage(school.data, 100);

  const bgStyle = {
    backgroundColor: average > 0.5 ? '#D0EFE8' : '#F0CECE'
  }

  return (
    <section className="chart-wrapper">
      <div style={bgStyle} className='chart-header'>
        <span>{school.location}</span>
        <span>Avg: {average}</span>
      </div>
      <LineChart width={300} height={100} data={schoolData}>
        <Line type='monotone' dataKey='val' stroke='red' strokeWidth={2} />
      </LineChart>
    </section>
  )
}

export default SchoolDataGraph;
