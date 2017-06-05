import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter } from "react-router-dom";
import { createStore, applyMiddleware } from "redux";
import { Provider } from "react-redux";
import promise from "redux-promise";
import BootStrap from "react-bootstrap";
require("./style/style.scss");

import App from "./components/app";
import ContactInfo from "./components/contactInfo";
import reducers from "./reducers/index";

const mountNode = document.getElementById("app");

ReactDOM.render(
  <Provider store={createStore(reducers, applyMiddleware(promise))}>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </Provider>,
  mountNode
);
