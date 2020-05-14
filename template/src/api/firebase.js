/* istanbul ignore file */
import firebase from "firebase/app";
import "firebase/auth";
import "firebase/database";

const app = firebase.initializeApp({
  apiKey: process.env.REACT_APP_FIREBASE_API_KEY,
  databaseURL: process.env.REACT_APP_FIREBASE_DATABASE_URL,
});

export default app;
