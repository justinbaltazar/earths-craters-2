// the starting point for your redux store
// this defines what your store state will look like
import { combineReducers } from 'redux';

import CraterReducer from './crater-reducer';

const rootReducer = combineReducers({
  crater: CraterReducer,
});

export default rootReducer;
