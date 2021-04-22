// Firebase App (the core Firebase SDK) is always required and must be listed first
import firebase from "firebase/app";

// Add the Firebase products that you want to use
import "firebase/auth";
import "firebase/firestore";

import * as firebaseui from "firebaseui";

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCM37-EiJiIieQw7l2WG2ziswVxAoPMvnk",
  authDomain: "jammming-ed61d.firebaseapp.com",
  projectId: "jammming-ed61d",
  storageBucket: "jammming-ed61d.appspot.com",
  messagingSenderId: "505194858023",
  appId: "1:505194858023:web:21b4ec8fc34be37956b002",
  measurementId: "G-NK708QT731"
};

firebase.initializeApp(firebaseConfig);



import React from "react";
import ReactDOM from "react-dom";

import App from "./Components/App/App";

ReactDOM.render(<App />, document.getElementById("root"));
