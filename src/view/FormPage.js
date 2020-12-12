import React from "react";
import "bootstrap/dist/css/bootstrap.css";

import ImageView from "./ImageView";
import FormView from "./FormView";

export default function FormPage() {
  return (
    <div className="row form-view">
      <ImageView />
      <FormView />
    </div>
  );
}
