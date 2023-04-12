import { combineReducers } from "redux";

import addsubReducer from "./reducers/addsub";
import countingReducer from "./reducers/counting";

const rootReducer = combineReducers({
  value: addsubReducer,
  count: countingReducer,
});

export default rootReducer;
