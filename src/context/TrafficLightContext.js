import React, { createContext, useReducer, useEffect } from 'react';

const TrafficLightContext = createContext();

const initialState = {
  currentLight: 'red',        
  pedestrianRequest: false,
  countdown: 7,
  emergencyOverride: false,
  emergencyCountdown: 10,
};

const reducer = (state, action) => {
  switch (action.type) {
    case 'CHANGE_LIGHT':
      return { ...state, currentLight: action.payload, countdown: action.countdown };
    case 'REQUEST_CROSSING':
      return { ...state, pedestrianRequest: true };
    case 'RESET_CROSSING':
      return { ...state, pedestrianRequest: false };
    case 'EMERGENCY_OVERRIDE':
      return { ...state, emergencyOverride: true, currentLight: 'red', emergencyCountdown: 10 };
    case 'RESET_EMERGENCY':
      return { ...state, emergencyOverride: false };
    case 'TICK':
      return { ...state, countdown: state.countdown - 1 };
    case 'EMERGENCY_TICK':
      return { ...state, emergencyCountdown: state.emergencyCountdown - 1 };
    default:
      return state;
  }
};

export const TrafficLightProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  useEffect(() => {
    let timer;
    if (state.emergencyOverride) {
      timer = setInterval(() => {
        if (state.emergencyCountdown > 0) {
          dispatch({ type: 'EMERGENCY_TICK' });
        } else {
          dispatch({ type: 'RESET_EMERGENCY' });
          dispatch({ type: 'CHANGE_LIGHT', payload: 'green', countdown: 10 });
        }
      }, 1000);
    } else {
      timer = setInterval(() => {
        if (state.countdown > 0) {
          dispatch({ type: 'TICK' });
        } else {
          changeLight();
        }
      }, 1000);
    }
    return () => clearInterval(timer);
  }, [state]);

  const changeLight = () => {
    if (state.currentLight === 'green') {
      dispatch({ type: 'CHANGE_LIGHT', payload: 'yellow', countdown: 3 });
    } else if (state.currentLight === 'yellow') {
      if (state.pedestrianRequest) {
        dispatch({ type: 'CHANGE_LIGHT', payload: 'red', countdown: 7 });
      } else {
        dispatch({ type: 'CHANGE_LIGHT', payload: 'red', countdown: 7 });
      }
    } else if (state.currentLight === 'red') {
      if (state.pedestrianRequest) {
        setTimeout(() => {
          dispatch({ type: 'RESET_CROSSING' });
          dispatch({ type: 'CHANGE_LIGHT', payload: 'green', countdown: 10 });
        }, 5000);
      } else {
        dispatch({ type: 'CHANGE_LIGHT', payload: 'green', countdown: 10 });
      }
    }
  };

  return (
    <TrafficLightContext.Provider value={{ state, dispatch }}>
      {children}
    </TrafficLightContext.Provider>
  );
};

export default TrafficLightContext;
