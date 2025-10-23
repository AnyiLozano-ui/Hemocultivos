import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { BrowserRouter } from "react-router-dom";
import { Provider } from "react-redux";
import reduxConfig from "./store/store.js";
import { PersistGate } from "redux-persist/integration/react";

// eslint-disable-next-line react-refresh/only-export-components
const WrapperPersist = () => {
  const { persistor, store } = reduxConfig();

  return (
    <Provider store={store}>
      <PersistGate persistor={persistor} loading={null}>
        <BrowserRouter>
          <App />
        </BrowserRouter>
      </PersistGate>
    </Provider>
  );
};

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <WrapperPersist />
  </React.StrictMode>
);
