import React from "react";
import { connect } from "react-redux";
import { getLocales } from "../actions/locales";

class PropertyInput extends React.Component {

  handleClick() {
    this.props.getLocales({ propertyInput:this.refs.propertyInput.value})
      .then(response => {
        console.log("response is ", response);
      })
  }

  render() {
    return (
      <div>
        <span>Enter Property</span>
        <input
          className="property-input" ref="propertyInput"
        />
        <button
          onClick={this.handleClick.bind(this)}
        >
          Get Locales
        </button>
      </div>
    );
  }
};

export default connect(null, { getLocales })(PropertyInput);
