"use client";

import { Provider } from "react-redux";
import { store, persister } from "./store";
import { PersistGate } from "redux-persist/integration/react";

const ReduxProvider = ({ children }) => {
  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persister}>
        {children}
      </PersistGate>
    </Provider>
  );
};

export default ReduxProvider;
