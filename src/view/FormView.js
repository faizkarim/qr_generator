import React, { Component } from "react";

import InputFieldComponent from "../components/InputFieldComponent";
import InputSelectionComponent from "../components/InputSelectionComponent";
import ButtonComponent from "../components/ButtonComponent";

import "../styles/form_page_style.css";

class FormView extends Component {
  render() {
    return (
      <div className="col-12 col-sm-12 col-lg-6 col-xl-6 right-side-container d-flex justify-content-center align-items-center">
        <div className="container p-5 ">
          <div>
            <h3 className="text-left mb-5">Butiran Peperiksaan</h3>

            <form>
              <InputFieldComponent
                type="text"
                placeholder="Nama Guru Penyedia"
              />
              <InputSelectionComponent placeholder="Tingkatan" />
              <InputSelectionComponent placeholder="Kelas" />
              <InputSelectionComponent placeholder="Mata Pelajaran" />
              <InputFieldComponent
                type="number"
                placeholder="Bilangan Pelajar"
                min ="1"
              />
              <ButtonComponent />
            </form>
          </div>
        </div>
      </div>
    );
  }
}

export default FormView;
