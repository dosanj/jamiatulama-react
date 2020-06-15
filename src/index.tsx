import React from "react";
import ReactDOM from "react-dom";
import "./css/index.css";
import { App } from "./components/App";
import { HashRouter } from "react-router-dom";
import * as firebase from "firebase/app";

// If you enabled Analytics in your project, add the Firebase SDK for Analytics
import "firebase/analytics";

// Add the Firebase products that you want to use
import "firebase/auth";
import "firebase/firestore";
var firebaseConfig = {
  apiKey: "AIzaSyAaB-8OlMJ-gc1hFxya2hTXEww8rppZwXw",
  authDomain: "jamiatulama-solapur.firebaseapp.com",
  databaseURL: "https://jamiatulama-solapur.firebaseio.com",
  projectId: "jamiatulama-solapur",
  storageBucket: "jamiatulama-solapur.appspot.com",
  messagingSenderId: "351010064384",
  appId: "1:351010064384:web:d5258cf2806d522645b0e5",
  measurementId: "G-YP619B0WGR",
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);
firebase.analytics();

ReactDOM.render(
  <HashRouter>
    <App />
  </HashRouter>,
  document.getElementById("root")
);
