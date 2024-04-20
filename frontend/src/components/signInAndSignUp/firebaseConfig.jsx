import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
const firebaseConfig = {
    apiKey: "AIzaSyB7bhMMlbv15vgEmOpqS8G1oJYbLqHKgPg",
    authDomain: "ezstay-8303f.firebaseapp.com",
    projectId: "ezstay-8303f",
    storageBucket: "ezstay-8303f.appspot.com",
    messagingSenderId: "388661569576",
    appId: "1:388661569576:web:bc004453de58982565ed1d",
    measurementId: "G-SYNHSV2WSC"
  };
  const app = initializeApp(firebaseConfig);
  export  const auth = getAuth(app);