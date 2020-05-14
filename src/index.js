import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import * as firebase from "firebase";

require('dotenv').config()

const firebaseConfig = {
    apiKey: process.env.REACT_APP_FIREBASEAPIKEY,
    authDomain: process.env.REACT_APP_FIREBASEAUTHDOMAIN,
    databaseURL: process.env.REACT_APP_FIREBASEDBURL,
    projectId: process.env.REACT_APP_FIREBASEPROJECTID,
    storageBucket: process.env.REACT_APP_FIREBASESTORAGEBUCKET,
    messagingSenderId: process.env.REACT_APP_FIREBASEMESSAGESENDERID,
    appId: process.env.REACT_APP_FIREBASEAPPID,
    measurementId: process.env.REACT_APP_FIREBASEMEASUREMENTID
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);
firebase.analytics();

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
