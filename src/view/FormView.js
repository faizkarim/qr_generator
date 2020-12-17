import React, { useEffect, useState } from 'react'
import { useHistory } from 'react-router-dom'
import { Formik, Field, Form } from 'formik'

import {
   getDataFromFirestore,
   postDataToFirestore,
} from '../services/firestoreHelper'
import {
   initialValues,
   resetValues,
   validationSchema,
} from '../constant/formik_constant'

import ButtonComponent from '../components/ButtonComponent'
import ErrorMessageComponent from '../components/ErrorMessageComponent'
import SelectionComponent from '../components/SelectionComponent'
import LabelComponent from '../components/LabelComponent'

import '../styles/form_page_style.css'

function FormView() {
   let history = useHistory()

   const [lowerSubject, setLowerSubject] = useState([])
   const [upperSubject, setUpperSubject] = useState([])
   const [className, setClassName] = useState([])
   const [tingkatan, setTingkatan] = useState('')
   const [disable, setDisable] = useState(true)

   useEffect(() => {
      getLowerSubject()
      getUpperSubject()
      getClassName()
   }, [])

   // fetch lower subject
   async function getLowerSubject() {
      const lowerSubjectList = await getDataFromFirestore(
         'lower_subject',
         'subject_name'
      )
      setLowerSubject(lowerSubjectList)
   }

   //fetch upper subject
   async function getUpperSubject() {
      const upperSubjectList = await getDataFromFirestore(
         'upper_subject',
         'subject_name'
      )
      setUpperSubject(upperSubjectList)
   }

   //fetch class name
   async function getClassName() {
      const classNameList = await getDataFromFirestore(
         'class_name',
         'class_name'
      )
      setClassName(classNameList)
   }
   

   const popUpModal = async (values) => {
      var result = window.confirm('Adakah anda ingin meneruskan ?')
      if (result === true) {
         await postDataToFirestore(values)
         history.push('/qrformpage', values)
      }
   }

   const customInput = (props) => {
      if (props.value !== '') {
         setDisable(false)
      }
      setTingkatan(props.value)
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
      )
   }

   return (
      <div className="col-12 col-sm-12 col-lg-6 col-xl-6 right-side-container d-flex justify-content-center align-items-center">
         <div className="container p-5 ">
            <Formik
               initialValues={initialValues}
               validationSchema={validationSchema}
               onSubmit={(values, action) => {
                  action.resetForm({
                     resetValues,
                  })
                  popUpModal(values)
               }}
            >
               <Form>
                  <h3 className="text-left mb-5 text-dark fw-bold">
                     Butiran Peperiksaan
                  </h3>
                  <div className="form-group mt-4 input-group-lg ">
                     <LabelComponent labelText="Nama Guru Penyedia" />
                     <Field
                        name="nama_guru_penyedia"
                        className="form-control"
                        placeholder="Nama Guru Penyedia"
                        type="text"
                     />
                     <ErrorMessageComponent name="nama_guru_penyedia" />
                  </div>
                  <div className="form-group mt-4 input-group-lg ">
                     <LabelComponent labelText="Tingkatan" />
                     <Field name="tingkatan" as={customInput} />
                     <ErrorMessageComponent name="tingkatan" />
                  </div>

                  <div className="form-group mt-4 input-group-lg ">
                     <LabelComponent labelText="Kelas" />
                     <Field name="kelas" as="select" className="form-select">
                        <option value="" disabled>
                           Pilih Kelas
                        </option>
                        <SelectionComponent data={className} type="className" />
                     </Field>
                     <ErrorMessageComponent name="kelas" />
                  </div>

                  <div className="form-group mt-4 input-group-lg ">
                     <LabelComponent labelText="Mata Pelajaran" />
                     <Field
                        name="mata_pelajaran"
                        placeholder="Mata Pelajaran"
                        as="select"
                        className="form-select"
                     >
                        {({ field }) => (
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
                     <LabelComponent labelText="Kertas" />
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
                     <LabelComponent labelText="Bilangan Pelajar" />
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
   )
}

export default FormView
