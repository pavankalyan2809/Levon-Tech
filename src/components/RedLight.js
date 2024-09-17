import React from 'react';

const RedLight = ({ active }) => {
  return (
    <div className={`light ${active ? 'red' : ''}`}></div>
  );
};

export default RedLight;
