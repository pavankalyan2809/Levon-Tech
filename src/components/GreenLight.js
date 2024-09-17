import React from 'react';

const GreenLight = ({ active }) => {
  return (
    <div className={`light ${active ? 'green' : ''}`}></div>
  );
};

export default GreenLight;
