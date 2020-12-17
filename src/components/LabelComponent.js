import React, { Component } from "react";

class LabelComponent extends Component {
  render() {
    const props = this.props;
    return <label className="label-text text-dark">{props.labelText}</label>;
  }
}

export default LabelComponent;
