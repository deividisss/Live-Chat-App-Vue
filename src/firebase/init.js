import firebase from "firebase";
import firestore from "firebase/firestore";

// Your web app's Firebase configuration
var firebaseConfig = {
  apiKey: "AIzaSyCtLfPvpX3s5W1x3UWw7EJSKgzulkY--AA",
  authDomain: "ninja-chat-11337.firebaseapp.com",
  databaseURL: "https://ninja-chat-11337.firebaseio.com",
  projectId: "ninja-chat-11337",
  storageBucket: "ninja-chat-11337.appspot.com",
  messagingSenderId: "654315388515",
  appId: "1:654315388515:web:9108466a757060930b4256",
  measurementId: "G-46QEZ5HT7E"
};
// Initialize Firebase
const firebaseApp = firebase.initializeApp(firebaseConfig);

export default firebaseApp.firestore();
