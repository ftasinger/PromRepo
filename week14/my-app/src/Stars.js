import React from 'react';

const Stars = ({ rating }) => {
  const stars = Array.from({ length: 5 }, (_, index) => (
    <span key={index} className={index < rating ? 'star-filled' : 'star'}>
      ★
    </span>
  ));

  return <div className="stars">{stars}</div>;
};

export default Stars;