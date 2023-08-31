"use client";

import { Provider } from "react-redux";
import App from "./pages";
import store from "./redux/store";

function Home() {
  return (
    <Provider store={store}>
      <App />
    </Provider>
  );
}

export default Home;
