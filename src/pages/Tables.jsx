import React from 'react';
import TableGrid from '../components/TableGrid';
import tablesData from '../data/tables.json';

const Tables = () => {
  return (
    <div className="container my-4">
      <h1 className="mb-4 text-center">Table Management</h1>
      <TableGrid tables={tablesData} />
    </div>
  );
};

export default Tables;
