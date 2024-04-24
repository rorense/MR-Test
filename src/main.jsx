import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { persistor, store } from "../redux/store.js";
import { Provider } from "react-redux";
import { Toaster } from "react-hot-toast";
import { PersistGate } from "redux-persist/integration/react";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Provider store={store}>
      <PersistGate loading={"loading"} persistor={persistor}>
        <App />
        <Toaster />
      </PersistGate>
    </Provider>
  </React.StrictMode>
);
