import React from "react";
import ReactDOM from "react-dom";
import PropertyInput from "./propertyInput";
import DisplayLocales from "./displayLocales";
import { connect } from "react-redux";
import { getLocales, resolveLocales } from "../actions/locales";

class App extends React.Component {

  _handlePropertyInputClick(propertyInputObj) {
    this.props.getLocales(propertyInputObj)
      .then(response => {
        this.props.resolveLocales(response.payload.data);
      });
  }

  render() {
    return (
      <div>
        React App
        <PropertyInput
          handlePropertyInputClick={this._handlePropertyInputClick.bind(this)}
        />
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

export default connect(mapStateToProps, { getLocales, resolveLocales })(App);
