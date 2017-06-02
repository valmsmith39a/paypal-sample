import React from "react";

class PropertyInput extends React.Component {

  _handleClick() {
    this.props.handlePropertyInputClick({propertyInput:this.refs.propertyInput.value});
  }

  render() {
    return (
      <div>
        <span>Enter Property</span>
        <input
          className="property-input" ref="propertyInput"
        />
        <button
          onClick={this._handleClick.bind(this)}
        >
          Get Locales
        </button>
      </div>
    );
  }
};

export default PropertyInput;
