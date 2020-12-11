import React, { Component } from "react";

class InputSelectionComponent extends Component {
  render() {
    const props = this.props;

    return (
      <div className="form-group mb-4 input-group-lg ">
        <label className="label-text text-dark" htmlFor={props.placeholder}>
          {props.placeholder}
        </label>
        <select className="form-select" defaultValue={'DEFAULT'} required={true}>
            <option value='DEFAULT' disabled>
              Pilih {props.placeholder}
            </option>
            <option>One</option>
            <option >Two</option>
            <option>Three</option>
        </select>
      </div>
    );
  }
}

export default InputSelectionComponent;
