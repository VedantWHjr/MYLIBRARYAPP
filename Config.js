import * as firebase from 'firebase';
require ('@firebase/firestore');

var firebaseConfig = {
    apiKey: "AIzaSyAf_5DfH6cejQIBvr8nrgHhWE2TJuOye14",
    authDomain: "library-a3592.firebaseapp.com",
    projectId: "library-a3592",
    storageBucket: "library-a3592.appspot.com",
    messagingSenderId: "783274743568",
    appId: "1:783274743568:web:817b78f506083181e13795"
  };

  firebase.initializeApp(firebaseConfig);
  export default firebase.firestore();