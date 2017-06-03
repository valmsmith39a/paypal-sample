import React from "react";
import { Button } from "react-bootstrap";

class PropertyInput extends React.Component {

  _handleClick() {
    this.props.handlePropertyInputClick({propertyInput:this.refs.propertyInput.value});
  }

  render() {
    return (
      <div className="property-input-wrapper">
        <input
          className="property-input"
          ref="propertyInput"
          placeholder="Enter a property Ex. quotationStart, quotationEnd"
        />
        <Button
          className="get-locales-button"
          bsSize="small"
          bsStyle="primary"
          onClick={this._handleClick.bind(this)}
        >
          Get Locales
        </Button>
      </div>
    );
  }
};

export default PropertyInput;
