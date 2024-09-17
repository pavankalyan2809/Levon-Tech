import React, { useContext } from 'react';
import TrafficLightContext from '../context/TrafficLightContext';

const PedestrianButton = () => {
  const { dispatch, state } = useContext(TrafficLightContext);

  const handleRequest = () => {
    if (!state.pedestrianRequest) {
      dispatch({ type: 'REQUEST_CROSSING' });
    }
  };

  return (
    <button
      onClick={handleRequest}
      disabled={state.pedestrianRequest}
    >
      {state.pedestrianRequest ? 'Wait to Cross' : 'Request to Cross'}
    </button>
  );
};

export default PedestrianButton;
