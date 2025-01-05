import { combineReducers } from "@reduxjs/toolkit";
import themeReducer from "./theme/themeSlice";
const rootReducer = combineReducers({
  theme: themeReducer,
  // Additional reducers can be added here
});

export default rootReducer;
