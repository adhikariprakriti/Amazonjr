import firebase from "firebase";

const firebaseApp= firebase.initializeApp({
    apiKey: "AIzaSyBZBjRU0qlYsy-KJKq_7niv366fxxoYG5I",
    authDomain: "fir-b6cf0.firebaseapp.com",
    databaseURL: "https://fir-b6cf0.firebaseio.com",
    projectId: "fir-b6cf0",
    storageBucket: "fir-b6cf0.appspot.com",
    messagingSenderId: "436053506346",
    appId: "1:436053506346:web:6fc0b5f559f37d78428653",
    measurementId: "G-6MZVENM3HQ"
  
})

const db=firebaseApp.firestore();
const auth=firebase.auth();

export {db,auth};