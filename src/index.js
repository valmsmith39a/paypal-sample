import React from "react";
import ReactDOM from "react-dom";
import { createStore, applyMiddleware } from "redux";
import { Provider } from "react-redux";
import thunk from "redux-thunk";
import promise from "redux-promise";

import App from "./components/index";
import reducers from "./reducers/index";

const mountNode = document.getElementById("app");

ReactDOM.render(
  <Provider store={createStore(reducers, applyMiddleware(thunk))}>
    <App />
  </Provider>,
  mountNode
);
