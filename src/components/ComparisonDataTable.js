import React from 'react';
import TableCell  from './TableCell';
import { shape, objectOf, arrayOf, string, number, data, object } from 'prop-types';
import './styles/ComparisonDataTable.css';

const ComparisonDataTable = ({ schools }) => {
console.log(schools);

  

  // const tableCells = Object.keys(data).map(e =>
  //   <TableCell
  //     key={Math.round(Date.now() * Math.random())}
  //     data={data[e]}
  //     year={e}
  //   />);

  return(
    <div className="comparison-table">
      {/* {tableCells} */}
    </div>
  )
}

const schools = shape({
  location: string,
  data: objectOf(number),
  info: arrayOf(data)
});

ComparisonDataTable.propTypes = {
  schools: arrayOf(object)
}

export default ComparisonDataTable;
