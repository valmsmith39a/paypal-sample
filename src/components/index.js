import React from "react";
import ReactDOM from "react-dom";
import PropertyInput from "./propertyInput";
import { connect } from "react-redux";

class App extends React.Component {
  render() {
    return (
      <div>
        React App
        <PropertyInput />
      </div>
    );
  }
}

function mapStateToProps (state) {
  return state;
}

export default connect(mapStateToProps, null)(App);
