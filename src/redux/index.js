import { combineReducers, configureStore } from "@reduxjs/toolkit";

// Reducers
import appConfigSlice from "./slices/appConfigSlice";

const combinedReducer = combineReducers({
  appConfigSlice,
});

const rootReducer = (state, action) => {
  // if "logout" is passed to rootReducer in the action.type - set redux state to undefined
  if (action.type === "logout") {
    state = undefined;
  }
  return combinedReducer(state, action);
};

export default configureStore({
  reducer: rootReducer,
});
