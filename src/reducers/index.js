import { combineReducers } from 'redux';

import DataReducer from './data-reducer';

const rootReducer = combineReducers({
  data: DataReducer,
});

export default rootReducer;
