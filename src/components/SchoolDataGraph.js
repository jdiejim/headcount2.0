import React from 'react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend } from 'recharts';
import './styles/SchoolDataGraph.css';

const SchoolDataGraph = ({ school }) => {
  if (school.length === 0) {
    return <div />
  }

  const dataKeys = Object.keys(school.data);
  const schoolData = dataKeys.map(e => {
    return { name: e };
  })

  schoolData.forEach((e) => {
    e.val = school.data[e.name];
  });

  const average = Math.round((dataKeys.reduce((t, k) => t += school.data[k], 0) / dataKeys.length) * 100) / 100;

  return (
    <div>
      <section className="chart-wrapper">
      {school.location}, Avg: {average}
      <LineChart width={300} height={100} data={schoolData}>
        <Line type='monotone' dataKey='val' stroke='red' strokeWidth={2} />
      </LineChart>
      </section>
    </div>
  )
}

export default SchoolDataGraph;
