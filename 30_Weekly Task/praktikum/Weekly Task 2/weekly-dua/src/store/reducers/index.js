import { combineReducers } from "@reduxjs/toolkit";
import getTaskReducer from "../states/getTasks/getTask.slice";

const rootReducer = combineReducers({
  getTask: getTaskReducer,
});

export default rootReducer;
