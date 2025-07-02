import React from 'react';

const GuestCard = ({ guest }) => {
  return (
    <div
      className="card shadow-sm p-3 mb-3"
      style={{
        borderRadius: '12px',
        transition: 'transform 0.3s ease, box-shadow 0.3s ease',
        cursor: 'default',
      }}
      onMouseEnter={(e) => {
        e.currentTarget.style.transform = 'scale(1.03)';
        e.currentTarget.style.boxShadow = '0 8px 16px rgba(42, 157, 143, 0.4)';
      }}
      onMouseLeave={(e) => {
        e.currentTarget.style.transform = 'scale(1)';
        e.currentTarget.style.boxShadow = 'none';
      }}
    >
      <h5 className="card-title" style={{ color: '#b7410e' }}>{guest.name}</h5>
      <p className="card-text mb-1"><strong>Birthday:</strong> {guest.birthday}</p>
      <p className="card-text mb-1"><strong>History:</strong> {guest.history}</p>
      {guest.vip && <span className="badge bg-danger">VIP</span>}
    </div>
  );
};

export default GuestCard;
