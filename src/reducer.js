import { ENTER_SYSTEM, SET_NAME, SET_AGE, EXIT_SYSTEM } from './actions';

const initialState = {
  step: 1,
  name: '',
  age: '',
  showLoader: false,
  countdown: 5
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case ENTER_SYSTEM:
      return {
        ...state,
        step: 2,
        showLoader: true
      };
    case SET_NAME:
      return {
        ...state,
        name: action.payload
      };
    case SET_AGE:
      return {
        ...state,
        age: action.payload,
        showLoader: true,
        countdown: 5
      };
    case EXIT_SYSTEM:
      return {
        ...state,
        step: state.step + 1,
        showLoader: false,
        countdown: 5
      };
    default:
      return state;
  }
};

export default reducer;

  