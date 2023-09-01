import { configureStore } from "@reduxjs/toolkit";
import currentUserReducer from "./slices/currentUserSlice";
import problemReducer from "./slices/problemsSlice";
import { persistStore, persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";
import { combineReducers } from "redux";
import reportStatusReducer from "./slices/reportSlice";

const persistConfig = {
  key: "root",
  storage,
};

const rootReducer = combineReducers({
  currentUser: currentUserReducer,
  problems: problemReducer,
  reportStatus: reportStatusReducer,
});

const persistedReducer = persistReducer(persistConfig, rootReducer);

const store = configureStore({
  reducer: persistedReducer,
});

const persister = persistStore(store);

export { store, persister };
