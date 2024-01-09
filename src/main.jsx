import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import { BrowserRouter } from "react-router-dom";

import "bootstrap/dist/css/bootstrap.min.css";
import "./index.css";
// Redux
import { Provider } from "react-redux";
import store from "./Store/index.jsx";

// Context
import { MainProvider } from "./Context/main";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <BrowserRouter>
      <Provider store={store}>
        <MainProvider>
          <App />
        </MainProvider>
      </Provider>
    </BrowserRouter>
  </React.StrictMode>
);
