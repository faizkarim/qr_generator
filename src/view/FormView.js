import React, { useEffect, useState } from "react";
import { useHistory } from "react-router-dom";
import { Formik, Field, Form } from "formik";
import * as Yup from "yup";
import { firestore } from "../firebase";
import firebase from 'firebase/app'
import { v4 as uuidv4 } from 'uuid';


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
  const [disable, setDisable] = useState(true);

  useEffect(() => {
    getLowerSubject();
    getUpperSubject();
    getClassName();
  }, []);

  // fetch lower subject
  async function getLowerSubject() {
    const snapshot = await firestore
      .collection("lower_subject")
      .orderBy("subject_name")
      .get();

    const lowerSubjectList = snapshot.docs.map((doc) => {
      return { id: doc.id, ...doc.data() };
    });

    setLowerSubject(lowerSubjectList);
  }

  //fetch upper subject
  async function getUpperSubject() {
    const snapshot = await firestore
      .collection("upper_subject")
      .orderBy("subject_name")
      .get();

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

  async function insertIntoFirestore(data) {

    const timestamp = firebase.firestore.Timestamp;
  
    const newObj = {
      'pengutipan' : {
        'nama_guru_pengutipan' : '',
        'created_at' : null,
        'updated_at' :null,
      },
      'penyediaan' : {
        'nama_guru_penyediaan' : '',
        'created_at' : null,
        'updated_at' : null,
      },
      'penyerahan' : {
        'nama_guru_penyerahan' : '',
        'created_at' : null,
        'updated_at' :null,
      },
      'created_at' : timestamp.now(new Date()),
      'updated_at' : timestamp.now(new Date()),
    }

    const newData = Object.assign(data,newObj)
    await firestore.collection("paper_details").add(newData);
  }

  function popUpModal(values) {
    var result = window.confirm("Adakah anda ingin meneruskan ?");
    if (result === true) {
      insertIntoFirestore(values);
      history.push("/qrformpage", values);
    }
  }

  const customInput = (props) => {
    if (props.value !== "") {
      setDisable(false);
    }
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
            id: uuidv4(),
            nama_guru_penyedia: "",
            tingkatan: "",
            kelas: "",
            mata_pelajaran: "",
            kertas: "",
            bilangan_pelajar: "",
          }}
          validationSchema={Yup.object({
            nama_guru_penyedia: Yup.string().required(
              "Nama Guru Penyedia " + emptyText
            ),
            tingkatan: Yup.string().required("Tingkatan " + emptyText),
            kelas: Yup.string().required("Kelas " + emptyText),
            mata_pelajaran: Yup.string().required("Mata Pelajaran " + emptyText),
            kertas: Yup.string().required("Kertas " + emptyText),
            bilangan_pelajar: Yup.number().required(
              "Bilangan Pelajar " + emptyText
            ),
          })}
          onSubmit={(values, action) => {
            action.resetForm({
              values: {
                nama_guru_penyedia: "",
                tingkatan: "",
                kelas: "",
                mata_pelajaran: "",
                kertas: "",
                bilangan_pelajar: "",
              },
            });
            popUpModal(values);
          }}
        >
          <Form>
            <h3 className="text-left mb-5 text-dark fw-bold">
              Butiran Peperiksaan
            </h3>
            <div className="form-group mt-4 input-group-lg ">
              <label
                className="label-text text-dark"
                htmlFor="nama_guru_penyedia"
              >
                Nama Guru Penyedia
              </label>
              <Field
                name="nama_guru_penyedia"
                className="form-control"
                placeholder="Nama Guru Penyedia"
                type="text"
              />
              <ErrorMessageComponent name="nama_guru_penyedia" />
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
              <label className="label-text text-dark" htmlFor="mata_pelajaran">
                Mata Pelajaran
              </label>
              <Field
                name="mata_pelajaran"
                placeholder="Mata Pelajaran"
                as="select"
                className="form-select"
              >
                {({ field, form, meta }) => (
                  <div>
                    <select
                      className="form-select"
                      {...field}
                      disabled={disable}
                    >
                      <option value="" disabled>
                        Pilih Mata Pelajaran
                      </option>

                      <SelectionComponent
                        data={[lowerSubject, upperSubject]}
                        type="subject"
                        tingkatan={tingkatan}
                      />
                    </select>
                  </div>
                )}
              </Field>
              <ErrorMessageComponent name="mata_pelajaran" />
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
              <label className="label-text text-dark" htmlFor="bilangan_pelajar">
                Bilangan Pelajar
              </label>
              <Field
                name="bilangan_pelajar"
                className="form-control"
                placeholder="Bilangan Pelajar"
                type="number"
              />
              <ErrorMessageComponent name="bilangan_pelajar" />
            </div>

            <div className="d-flex mt-2 justify-content-between align-items-center">
              <ButtonComponent
                class="btn text-muted fs-6"
                title="Kosongkan"
                type="reset"
              />
              <ButtonComponent
                class="btn btn-primary fw-bold fs-6"
                title="Jana Kod Qr"
                type="submit"
              />
            </div>
          </Form>
        </Formik>
      </div>
    </div>
  );
}

export default FormView;
