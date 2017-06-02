import React from "react";
import { connect } from "react-redux";
import { getLocales, resolveLocales } from "../actions/locales";

class PropertyInput extends React.Component {

  handleClick() {
    this.props.getLocales({ propertyInput:this.refs.propertyInput.value})
      .then(response => {
        this.props.resolveLocales(response.payload.data);
      });
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

function mapStateToProps(state) {
  return state;
}

export default connect(mapStateToProps, { getLocales, resolveLocales })(PropertyInput);
