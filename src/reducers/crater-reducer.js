import { ActionTypes } from '../actions';

const initialState = {
  displayedCraters: [],
};

const CraterReducer = (state = initialState, action) => {
  switch (action.type) {
    case ActionTypes.UPDATE_SEARCH:
      return { ...state };
    case ActionTypes.UPDATE_CRATERS:
      return {
        displayedCraters: action.data,
      };
    default:
      return state;
  }
};

export default CraterReducer;
