import firebase from 'firebase';

const firebaseConfig = {
    apiKey: "AIzaSyD9SvLGsFHJwj_6ATk7r8yFjzrT2XFu9_Y",
    authDomain: "kraig-facebook.firebaseapp.com",
    databaseURL: "https://kraig-facebook.firebaseio.com",
    projectId: "kraig-facebook",
    storageBucket: "kraig-facebook.appspot.com",
    messagingSenderId: "468973515347",
    appId: "1:468973515347:web:309beeef32bf6d6a0a0ca6",
    measurementId: "G-EQL685Y1MF"
  };
  
  const firebaseApp= firebase.initializeApp(firebaseConfig)
  const db = firebaseApp.firestore();
  const auth= firebase.auth();
  const provider= new firebase.auth.GoogleAuthProvider()

  export {auth,provider}
  export default db;