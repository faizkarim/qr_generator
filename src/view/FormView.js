import React, { useEffect, useState } from "react";
import { useHistory } from "react-router-dom";
import { Formik, Field, Form } from "formik";
import * as Yup from "yup";
import { firestore } from "../firebase";

import ButtonComponent from "../components/ButtonComponent";
import ErrorMessageComponent from "../components/ErrorMessageComponent";
import SelectionComponent from "../components/SelectionComponent";

import "../styles/form_page_style.css";

function FormView() {
  let history = useHistory();
  const emptyText = "tidak boleh kosong";

  const [lowerSubject, setLowerSubject] = useState([]);
  const [upperSubject, setUpperSubject] = useState([]);
  const [className, setClassName] = useState([]);
  const [tingkatan, setTingkatan] = useState("");

  useEffect(() => {
    getLowerSubject();
    getUpperSubject();
    getClassName();
  }, []);

  // fetch lower subject
  async function getLowerSubject() {
    const snapshot = await firestore.collection("lower_subject").orderBy('subject_name').get();

    const lowerSubjectList = snapshot.docs.map((doc) => {
      return { id: doc.id, ...doc.data() };
    });

    setLowerSubject(lowerSubjectList);
  }

  //fetch upper subject
  async function getUpperSubject() {
    const snapshot = await firestore.collection("upper_subject").orderBy('subject_name').get();

    const upperSubjectList = snapshot.docs.map((doc) => {
      return { id: doc.id, ...doc.data() };
    });

    setUpperSubject(upperSubjectList);
  }

  //fetch class name
  async function getClassName() {
    const snapshot = await firestore
      .collection("class_name")
      .orderBy("class_name")
      .get();

    const classNameList = snapshot.docs.map((doc) => {
      return { id: doc.id, ...doc.data() };
    });

    setClassName(classNameList);
  }

  const customInput = (props) => {
    setTingkatan(props.value);

    return (
      <select className="form-select" type="select" {...props}>
        <option value="" disabled>
          Pilih Tingkatan
        </option>
        <option value="1">1</option>
        <option value="2">2</option>
        <option value="3">3</option>
        <option value="4">4</option>
        <option value="5">5</option>
      </select>
    );
  };

  return (
    <div className="col-12 col-sm-12 col-lg-6 col-xl-6 right-side-container d-flex justify-content-center align-items-center">
      <div className="container p-5 ">
        <Formik
          initialValues={{
            namaGuruPenyedia: "",
            tingkatan: "",
            kelas: "",
            mataPelajaran: "",
            kertas :"",
            bilanganPelajar: "",
          }}
          validationSchema={Yup.object({
            namaGuruPenyedia: Yup.string().required(
              "Nama Guru Penyedia " + emptyText
            ),
            tingkatan: Yup.string().required("Tingkatan " + emptyText),
            kelas: Yup.string().required("Kelas " + emptyText),
            mataPelajaran: Yup.string().required("Mata Pelajaran " + emptyText),
            kertas: Yup.string().required("Kertas " + emptyText),
            bilanganPelajar: Yup.number().required(
              "Bilangan Pelajar " + emptyText
            ),
          })}
          onSubmit={(values, { setSubmitting }) => {
            history.push("/qrformpage", values);
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
              <Field name="tingkatan" as={customInput} />
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
                <SelectionComponent data={className} type="className" />
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
                <SelectionComponent
                  data={[lowerSubject, upperSubject]}
                  type="subject"
                  tingkatan={tingkatan}
                />
              </Field>
              <ErrorMessageComponent name="mataPelajaran" />
            </div>

            <div className="form-group mt-4 input-group-lg ">
              <label className="label-text text-dark" htmlFor="kertas">
                Kertas
              </label>
              <Field
                name="kertas"
                placeholder="Pilih Kertas"
                as="select"
                className="form-select"
              >
                <option value="" disabled>
                  Pilih Kertas
                </option>
                <option value="1">1</option>
                <option value="2">2</option>
                <option value="3">3</option>
                <option value="-">-</option>
              </Field>
              <ErrorMessageComponent name="kertas" />
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
