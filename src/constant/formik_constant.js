import { v4 as uuidv4 } from "uuid";
import * as Yup from "yup";

const emptyText = "tidak boleh kosong";


export const initialValues = {
  id: uuidv4(),
  nama_guru_penyedia: "",
  tingkatan: "",
  kelas: "",
  mata_pelajaran: "",
  kertas: "",
  bilangan_pelajar: "",
};

export const resetValues = {
  values: {
    nama_guru_penyedia: "",
    tingkatan: "",
    kelas: "",
    mata_pelajaran: "",
    kertas: "",
    bilangan_pelajar: "",
  },
};

export const validationSchema = () => {
  return  Yup.object({
        nama_guru_penyedia: Yup.string().required(
          "Nama Guru Penyedia " + emptyText
        ),
        tingkatan: Yup.string().required("Tingkatan " + emptyText),
        kelas: Yup.string().required("Kelas " + emptyText),
        mata_pelajaran: Yup.string().required(
          "Mata Pelajaran " + emptyText
        ),
        kertas: Yup.string().required("Kertas " + emptyText),
        bilangan_pelajar: Yup.number().required(
          "Bilangan Pelajar " + emptyText
        ),
      })
}
