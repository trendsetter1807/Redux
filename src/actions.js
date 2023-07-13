// Action Types
export const ENTER_SYSTEM = 'ENTER_SYSTEM';
export const SET_NAME = 'SET_NAME';
export const SET_AGE = 'SET_AGE';
export const EXIT_SYSTEM = 'EXIT_SYSTEM';

// Action Creators
export const enterSystem = () => {
  return {
    type: ENTER_SYSTEM
  };
};

export const setName = (name) => {
  return {
    type: SET_NAME,
    payload: name
  };
};

export const setAge = (age) => {
  return {
    type: SET_AGE,
    payload: age
  };
};

export const exitSystem = () => {
  return {
    type: EXIT_SYSTEM
  };
};
