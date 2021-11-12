
import firebase from "firebase/compat/app";
import "firebase/compat/database";

const firebaseConfig = {
    apiKey: "AIzaSyDWXBNbfMLcFhoGdd0FaEDNwB0v7qza7RM",
    authDomain: "react-dynamic.firebaseapp.com",
    projectId: "react-dynamic",
    storageBucket: "react-dynamic.appspot.com",
    messagingSenderId: "266825492903",
    appId: "1:266825492903:web:15be13ba35f5dd241eee82"
  };

  const fireDb = firebase.initializeApp(firebaseConfig);
export default fireDb.database().ref();