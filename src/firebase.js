import firebase from 'firebase';

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyCux0mKTj1dcwnBZEo3BOhJtUJqu1s_ShM",
    authDomain: "clone-a6008.firebaseapp.com",
    databaseURL: "https://clone-a6008-default-rtdb.firebaseio.com",
    projectId: "clone-a6008",
    storageBucket: "clone-a6008.appspot.com",
    messagingSenderId: "989090406117",
    appId: "1:989090406117:web:1859a590c374475ba93e0c",
    measurementId: "G-D1H4BQ48VK"
  };

  const FirebaseApp = firebase.initializeApp(firebaseConfig);

  const db = FirebaseApp.firestore();
  const auth = firebase.auth();
  const provider = new firebase.auth.GoogleAuthProvider();

  export {db, auth, provider};