import React from 'react';

const YellowLight = ({ active }) => {
  return (
    <div className={`light ${active ? 'yellow' : ''}`}></div>
  );
};

export default YellowLight;
