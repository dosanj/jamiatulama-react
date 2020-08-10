// Firebase App (the core Firebase SDK) is always required and must be listed first
import * as firebase from "firebase/app";
// Add the Firebase products that you want to use
import "firebase/auth";
import "firebase/firestore";
let firebaseApp: firebase.app.App;
export function getFireBaseApp() {
  if (!firebaseApp) {
    const firebaseConfig = {
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
    firebaseApp = firebase.initializeApp(firebaseConfig);
  }
  return firebaseApp;
}
