import React, { Component } from "react";


class InputFieldComponent extends Component {

  render() {
    const props = this.props;

    return (
      <div className="form-group mb-4 input-group-lg ">
        <label className="label-text" htmlFor={props.for}>{props.placeholder}</label>
        <input
          type={props.type}
          className={props.className}
          id={props.id}
          placeholder={props.placeholder}
          required ={true}
          min={1}
        />
      </div>
    );
  }
}

export default InputFieldComponent
