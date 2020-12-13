import React, { Component } from "react";

class ButtonComponent extends Component {
  render() {
    const props = this.props;
    return (
      <div className="input-group-lg mt-4">
        <button type={props.type} className= {props.class}>
          {props.title}
        </button>
      </div>
    );
  }
}

export default ButtonComponent;
