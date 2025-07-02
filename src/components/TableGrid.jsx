import React from 'react';

const TableGrid = ({ tables }) => {
  const getStatusVariant = (status) => {
    switch (status) {
      case 'vacant':
        return 'success';
      case 'reserved':
        return 'warning';
      case 'vip':
        return 'danger';
      case 'merged':
        return 'info';
      default:
        return 'secondary';
    }
  };

  return (
    <div className="container my-4">
      <div className="row g-3">
        {tables.map((table, index) => (
          <div key={table.id} className="col-6 col-md-3">
            <div
              className="card h-100 shadow-sm"
              style={{
                backgroundColor: index % 2 === 0 ? '#fff8f0' : '#f9f9f9',
                transition: 'transform 0.3s ease, box-shadow 0.3s ease',
                cursor: 'pointer',
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = 'scale(1.05)';
                e.currentTarget.style.boxShadow = '0 8px 16px rgba(183, 65, 14, 0.4)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = 'scale(1)';
                e.currentTarget.style.boxShadow = 'none';
              }}
            >
              <div className="card-body text-center">
                <h5 className="card-title">Table {table.number}</h5>
                <span className={`badge bg-${getStatusVariant(table.status)}`}>
                  {table.status.toUpperCase()}
                </span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TableGrid;
