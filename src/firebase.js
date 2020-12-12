import firebase from 'firebase/app'
import 'firebase/firestore'

var firebaseConfig = {
    apiKey: "AIzaSyA0DUmIq6lFfiH7NUsRHAJ76XfeXWsaafs",
    authDomain: "my-scan-kp.firebaseapp.com",
    projectId: "my-scan-kp",
    storageBucket: "my-scan-kp.appspot.com",
    messagingSenderId: "164424714836",
    appId: "1:164424714836:web:028bc5bde08f6a276f3bc1",
    measurementId: "G-1727BL0KY4"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

  export const firestore = firebase.firestore();

  firestore.settings({timestampsInSnpashot :true})

  export default firebase