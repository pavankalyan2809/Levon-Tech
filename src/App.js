import React from 'react';
import TrafficLight from './components/TrafficLight';
import { TrafficLightProvider } from './context/TrafficLightContext';

function App() {
  return (
    <TrafficLightProvider>
      <div className="App">
        <h1 class="main-heading">Traffic Signal</h1>
        <TrafficLight />
      </div>
    </TrafficLightProvider>
  );
}

export default App;
