import React from "react";
import ReactDOM from "react-dom";
import PropertyInput from "./propertyInput";
import DisplayLocales from "./displayLocales";
import { connect } from "react-redux";

class App extends React.Component {
  render() {
    return (
      <div>
        React App
        <PropertyInput />
        <DisplayLocales
          locales={this.props.locales}
        />
      </div>
    );
  }
}

function mapStateToProps (state) {
  return {
    locales: state.locales
  };
}

export default connect(mapStateToProps, null)(App);
