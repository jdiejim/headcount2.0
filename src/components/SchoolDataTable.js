import React from 'react';
import TableCell  from './TableCell';
import { objectOf, string, number } from 'prop-types';
import './styles/SchoolDataTable.css';

const SchoolDataTable = ({ data, location }) => {
  const tableCells = Object.keys(data).map(e =>
    <TableCell
      key={Math.round(Date.now() * Math.random())}
      data={data[e]}
      year={e}
    />);

  return(
    <div className="school-table">
      {tableCells}
    </div>
  )
}

SchoolDataTable.propTypes = {
  data: objectOf(number),
  location: string
}

export default SchoolDataTable;
