import React, { Component } from "react";

class InputSelectionComponent extends Component {
  render() {
    const props = this.props;

    return (
      <div className="form-group mb-4 input-group-lg ">
        <label className="label-text text-dark" for={props.placeholder}>
          {props.placeholder}
        </label>
        <select class="form-select" required={true}>
            <option className="text-muted" selected>
              Pilih {props.placeholder}
            </option>
            <option value="1">One</option>
            <option value="2">Two</option>
            <option value="3">Three</option>
        </select>
      </div>
    );
  }
}

export default InputSelectionComponent;
