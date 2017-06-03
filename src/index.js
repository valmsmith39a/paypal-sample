import React from "react";
import ReactDOM from "react-dom";
import { Router, Route } from "react-router";
import createBrowserHistory from "history/createBrowserHistory";

import { createStore, applyMiddleware } from "redux";
import { Provider } from "react-redux";
import promise from "redux-promise";
import BootStrap from "react-bootstrap";
require("./style/style.scss");

import App from "./components/index";
import ContactInfo from "./components/contactInfo";
import reducers from "./reducers/index";

const mountNode = document.getElementById("app");
const browserHistory = createBrowserHistory();

ReactDOM.render(
  <Provider store={createStore(reducers, applyMiddleware(promise))}>
    <Router history={browserHistory}>
      <div>
        <Route path="/" component={App} />
        <Route path="/contact" component={ContactInfo} />
      </div>
    </Router>
  </Provider>,
  mountNode
);
