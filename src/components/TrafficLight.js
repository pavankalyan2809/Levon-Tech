import React, { useContext } from 'react';
import GreenLight from './GreenLight';
import YellowLight from './YellowLight';
import RedLight from './RedLight';
import PedestrianButton from './PedestrianButton';
import CountdownTimer from './CountdownTimer';
import TrafficLightContext from '../context/TrafficLightContext';

const EmergencyButton = () => {
  const { dispatch } = useContext(TrafficLightContext);

  const handleEmergencyClick = () => {
    dispatch({ type: 'EMERGENCY_OVERRIDE' });
  };

  return (
    <button
      style={{ padding: '10px 20px', fontSize: '16px', marginTop: '10px' }}
      onClick={handleEmergencyClick}
    >
      Emergency
    </button>
  );
};

const TrafficLight = () => {
  const { state } = useContext(TrafficLightContext);

  return (
    <div className="traffic-light-container">
      
      <div className="traffic-light">
        <RedLight active={state.currentLight === 'red'} />
        <YellowLight active={state.currentLight === 'yellow'} />
        <GreenLight active={state.currentLight === 'green'} />
        <PedestrianButton />
        <EmergencyButton />
        <CountdownTimer countdown={state.emergencyOverride ? state.emergencyCountdown : state.countdown} />
      </div>
    </div>
  );
};

export default TrafficLight;