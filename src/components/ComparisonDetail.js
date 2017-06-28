import React from 'react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend } from 'recharts';
import './styles/ComparisonDetail.css';

const ComparisonDetail = ({ data }) => {

  if (data.length === 0) {
    return <div />
  }

  const schoolData = Object.keys(data[0].data).map(e => {
    return { name: e };
  })

  schoolData.forEach((e) => {
    if (data[0].data[e.name] >= 0.5) {
      e.up = data[0].data[e.name];
    }
    if (data[0].data[e.name] <= 0.5) {
      e.up = data[0].data[e.name];
      e.low = data[0].data[e.name];
    }
  })

  return (
    <div>
      <section className="chart-wrapper">
        {/* <LineChart width={600} height={300} data={schoolData}
                   margin={{top: 5, right: 30, left: 20, bottom: 5}}>
          <XAxis dataKey="name"/>
          <YAxis/>
          <CartesianGrid strokeDasharray="3 3"/>
          <Tooltip/>
          <Legend />
          <Line connectNulls={true} type='linear' dataKey='up' stroke='blue' />
          <Line connectNulls={true} type='linear' dataKey='low' stroke='red' />
        </LineChart> */}
      </section>
    </div>
  )
}

export default ComparisonDetail;

// const getGraphData = (data) => {
//   const chartData = {};
//
//   data.forEach(e => {
//     const keys = e
//     if (chartData[e])
//   })
// }
