import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import {GlobalStyles} from './global-styles'
import reportWebVitals from './reportWebVitals';
import { FBContext } from "./context/firebase";

// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore, collection, addDoc} from "firebase/firestore";
import { getAuth } from "firebase/auth";



// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBXlay3UbRD7u5s0WCWAuY7Yt8QZhErvS8",
  authDomain: "netflix-clone-ed90f.firebaseapp.com",
  projectId: "netflix-clone-ed90f",
  storageBucket: "netflix-clone-ed90f.appspot.com",
  messagingSenderId: "639673190386",
  appId: "1:639673190386:web:d5fa20a769befd59dbcd6b"
};

//Initialize Firebase
const firebase = initializeApp(firebaseConfig);
const auth = getAuth(firebase);
const db = getFirestore(firebase);



ReactDOM.render(
  <React.StrictMode>
    <FBContext.Provider value={{firebase, auth, db}}>
      <GlobalStyles />
      <App />
    </FBContext.Provider>
  </React.StrictMode>,
  document.getElementById('root')
  );
  
// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();


  