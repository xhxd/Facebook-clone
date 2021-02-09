import firebase from "firebase";

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyDo4jioT0J3maft2NuRo6iRUsXJ2tPQ5Ko",
    authDomain: "facebook-clone-6290a.firebaseapp.com",
    projectId: "facebook-clone-6290a",
    storageBucket: "facebook-clone-6290a.appspot.com",
    messagingSenderId: "1070218802665",
    appId: "1:1070218802665:web:3ee624b5bfd42c021a4778",
    measurementId: "G-5KRN0WPMMN"
  };

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();

export { auth, provider };
export default db;