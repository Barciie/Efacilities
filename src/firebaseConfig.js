import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyCIEOEci9d20Gbh9BmlCgx_r0r9HbGTajc",
  authDomain: "efacilities1-e5b6c.firebaseapp.com",
  projectId: "efacilities1-e5b6c",
  storageBucket: "efacilities1-e5b6c.appspot.com",
  messagingSenderId: "785754011072",
  appId: "1:785754011072:web:9991a621e52ae0d798c425"
};
firebase.initializeApp(firebaseConfig);
export var db = firebase.firestore();
