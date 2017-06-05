import React from "react";
import ReactDOM from "react-dom";
import PropertyInput from "./propertyInput";
import DisplayLocales from "./displayLocales";
import { connect } from "react-redux";
import { getLocales, resolveLocales } from "../actions/locales";

class DelimInputDisplay extends React.Component {
  constructor(props) {
    super(props);

    this.state = { propertyInput: ""};
  }

  _handlePropertyInputClick(propertyInputObj) {
    this.props.getLocales(propertyInputObj)
      .then(response => {
        this.setState({propertyInput: propertyInputObj.propertyInput})
        this.props.resolveLocales(response.payload.data);
      });
  }

  render() {
    return (
      <div className="app-delimiters">
        <div className="app-title">Delimiters Galore</div>
        <PropertyInput
          handlePropertyInputClick={this._handlePropertyInputClick.bind(this)}
        />
        <DisplayLocales
          locales={this.props.locales}
          propertyInput={this.state.propertyInput}
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

export default connect(mapStateToProps, { getLocales, resolveLocales })(DelimInputDisplay);
