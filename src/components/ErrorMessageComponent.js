import React, { Component } from "react";
import { ErrorMessage } from "formik";

class ErrorMessageComponent extends Component {
  render() {
    return (
      <ErrorMessage
        name={this.props.name}
        component="p"
        className="form-text text-danger mb-0"
      />
    );
  }
}

export default ErrorMessageComponent;
