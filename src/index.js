import React, { Suspense } from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { ToastContainer } from "react-toastify";
import { HelmetProvider } from "react-helmet-async";
import { Provider } from "react-redux";
import { store } from "./context/store/store";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <HelmetProvider>
      <Provider store={store}>
        <Suspense fallback={<div>Loading...</div>}>
          <App />
        </Suspense>
        <ToastContainer />
      </Provider>
    </HelmetProvider>
  </React.StrictMode>
);
