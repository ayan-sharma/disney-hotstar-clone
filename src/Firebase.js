
// import firebase from 'firebase';
import app from './App'
import firebase from "firebase/compat/app";
import "firebase/compat/firestore";
import "firebase/compat/auth";
import "firebase/compat/storage";

const firebaseConfig = {
    apiKey: "AIzaSyDl_fh7kDB8YOSkjVKpiX8zzoZZGu0L3z4",
    authDomain: "disneyplus-clone-fb81b.firebaseapp.com",
    projectId: "disneyplus-clone-fb81b",
    storageBucket: "disneyplus-clone-fb81b.appspot.com",
    messagingSenderId: "565571780723",
    appId: "1:565571780723:web:b9c40de5e5aead9c4bea06",
    measurementId: "G-3WV0CJLCH1"
  };
  
  // Initialize Firebase
  const firebaseApp = firebase.default.initializeApp(firebaseConfig); 
  ;
  const db =firebaseApp.firestore();
  const auth = firebase.auth();
  const provider = new firebase.auth.GoogleAuthProvider();
  const storage = firebase.storage();

//   const analytics = getAnalytics(app);

  export{ auth, provider , storage};
  export default db;