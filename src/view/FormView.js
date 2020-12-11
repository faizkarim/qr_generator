import React from "react";
import {useHistory} from 'react-router-dom'

import InputFieldComponent from "../components/InputFieldComponent";
import InputSelectionComponent from "../components/InputSelectionComponent";

import "../styles/form_page_style.css";


function FormView(){
  let history = useHistory();

   function handleSubmit() {
    history.push('/qrformpage')
  }

  return (
    <div className="col-12 col-sm-12 col-lg-6 col-xl-6 right-side-container d-flex justify-content-center align-items-center">
        <div className="container p-5 ">
          <div>
            <h3 className="text-left mb-5">Butiran Peperiksaan</h3>
            <form method="GET" onSubmit={handleSubmit}>
              <InputFieldComponent
                type="text"
                placeholder="Nama Guru Penyedia"
                className="form-control"
              />
              <InputSelectionComponent placeholder="Tingkatan" />
              <InputSelectionComponent placeholder="Kelas" />
              <InputSelectionComponent placeholder="Mata Pelajaran" />
              <InputFieldComponent
                type="number"
                placeholder="Bilangan Pelajar"
                min ="1"
                className="form-control"
              />
             <InputFieldComponent type="submit" className="btn btn-primary form-control"  />
            </form>
          </div>
        </div>
      </div>
  );
}

export default FormView