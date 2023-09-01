import { configureStore } from "@reduxjs/toolkit";
import currentUserReducer from "./slices/currentUserSlice";
import problemReducer from "./slices/problemsSlice";

const store = configureStore({
  reducer: {
    currentUser: currentUserReducer,
    problems: problemReducer,
  },
});

export default store;
