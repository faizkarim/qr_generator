import React, { useEffect } from "react";
import { useHistory } from "react-router-dom";
import { Formik, Field, Form, ErrorMessage } from "formik";
import * as Yup from "yup";
import {firestore} from '../firebase'


import ButtonComponent from "../components/ButtonComponent";
import ErrorMessageComponent from "../components/ErrorMessageComponent";

import "../styles/form_page_style.css";

function FormView() {
  let history = useHistory();
  const emptyText = "tidak boleh kosong";

  useEffect(()=>{

  },[])


  // function getLowerSubject = () =>{
    
  // }

  return (
    <div className="col-12 col-sm-12 col-lg-6 col-xl-6 right-side-container d-flex justify-content-center align-items-center">
      <div className="container p-5 ">
        <Formik
          initialValues={{
            namaGuruPenyedia: "",
            tingkatan: "",
            kelas: "",
            mataPelajaran: "",
            bilanganPelajar: "",
          }}
          validationSchema={Yup.object({
            namaGuruPenyedia: Yup.string().required(
              "Nama Guru Penyedia " + emptyText
            ),
            tingkatan: Yup.string().required("Tingkatan " + emptyText),
            kelas: Yup.string().required("Kelas " + emptyText),
            mataPelajaran: Yup.string().required("Mata Pelajaran " + emptyText),
            bilanganPelajar: Yup.number().required(
              "Bilangan Pelajar " + emptyText
            ),
          })}
          onSubmit={(values, { setSubmitting }) => {
              history.push('/qrformpage',values)
          }}
        >
          <Form>
            <h3 className="text-left mb-5 text-dark fw-bold">
              Butiran Peperiksaan
            </h3>
            <div className="form-group mt-4 input-group-lg ">
              <label
                className="label-text text-dark"
                htmlFor="namaGuruPenyedia"
              >
                Nama Guru Penyedia
              </label>
              <Field
                name="namaGuruPenyedia"
                className="form-control"
                placeholder="Nama Guru Penyedia"
                type="text"
              />
              <ErrorMessageComponent name="namaGuruPenyedia" />
            </div>

            <div className="form-group mt-4 input-group-lg ">
              <label className="label-text text-dark" htmlFor="tingkatan">
                Tingkatan
              </label>
              <Field name="tingkatan" as="select" className="form-select">
                <option value="" disabled>
                  Pilih Tingkatan
                </option>
                <option value="1">1</option>
                <option value="2">2</option>
                <option value="3">3</option>
                <option value="2">4</option>
                <option value="3">5</option>
              </Field>
              <ErrorMessageComponent name="tingkatan" />
            </div>

            <div className="form-group mt-4 input-group-lg ">
              <label className="label-text text-dark" htmlFor="kelas">
                Kelas
              </label>
              <Field name="kelas" as="select" className="form-select">
                <option value="" disabled>
                  Pilih Kelas
                </option>
                <option value="1">1</option>
                <option value="2">2</option>
                <option value="3">3</option>
                <option value="2">4</option>
                <option value="3">5</option>
              </Field>
              <ErrorMessageComponent name="kelas" />
            </div>

            <div className="form-group mt-4 input-group-lg ">
              <label className="label-text text-dark" htmlFor="mataPelajaran">
                Mata Pelajaran
              </label>
              <Field
                name="mataPelajaran"
                placeholder="Mata Pelajaran"
                as="select"
                className="form-select"
              >
                <option value="" disabled>
                  Pilih Mata Pelajaran
                </option>
                <option value="1">1</option>
                <option value="2">2</option>
                <option value="3">3</option>
                <option value="2">4</option>
                <option value="3">5</option>
              </Field>
              <ErrorMessageComponent name="mataPelajaran" />
            </div>

            <div className="form-group mt-4 input-group-lg ">
              <label className="label-text text-dark" htmlFor="bilanganPelajar">
                Bilangan Pelajar
              </label>
              <Field
                name="bilanganPelajar"
                className="form-control"
                placeholder="Bilangan Pelajar"
                type="number"
              />
              <ErrorMessageComponent name="bilanganPelajar" />
            </div>

            <ButtonComponent />
          </Form>
         
        </Formik>
      </div>
    </div>
  );
}

export default FormView;
