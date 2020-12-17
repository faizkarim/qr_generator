import { firestore } from "../firebase";
// import firebase from 'firebase/app'

export const getDataFromFirestore = async (db,orderBy) => {
  const snapshot = await firestore
    .collection(db)
    .orderBy(orderBy)
    .get();

  const data = snapshot.docs.map((doc) => {
    return { id: doc.id, ...doc.data() };
  });

  return data;
};

export const postDataToFirestore = async (data) =>{
  // const timestamp = firebase.firestore.Timestamp;

  const newObj = {
    'pengutipan' : {
      'nama_guru_pengutipan' : null,
      'created_at' : null,
      'updated_at' :null,
    },
    'penandaan' : {
      'nama_guru_penandaan' : null,
      'created_at' : null,
      'updated_at' : null,
    },
    'penyerahan' : {
      'nama_guru_penyerahan' : null,
      'created_at' : null,
      'updated_at' :null,
    },
    'status_kertas' : 1,
    'created_at' : new Date().toLocaleString(),
    'updated_at' : new Date().toLocaleString(),
  }

  const newData = Object.assign(data,newObj)
  await firestore.collection("paper_details").add(newData);

}
