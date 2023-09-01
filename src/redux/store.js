import { configureStore } from "@reduxjs/toolkit";
import currentUserReducer from "./slices/currentUserSlice";

const store = configureStore({
  reducer: {
    currentUser: currentUserReducer,
  }
});

export default store;
