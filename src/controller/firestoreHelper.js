import { firestore } from "../firebase";
import firebase from 'firebase/app'

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
  const timestamp = firebase.firestore.Timestamp;
  
  const newObj = {
    'pengutipan' : {
      'nama_guru_pengutipan' : '',
      'created_at' : null,
      'updated_at' :null,
    },
    'penandaan' : {
      'nama_guru_penandaan' : '',
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
