import firebase from 'firebase'

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyB413gWqLzn_8_SlIIZqa5itaQ-XgbJ4kQ",
    authDomain: "slack-clone-f35c4.firebaseapp.com",
    projectId: "slack-clone-f35c4",
    storageBucket: "slack-clone-f35c4.appspot.com",
    messagingSenderId: "1023293241869",
    appId: "1:1023293241869:web:c7275a47956d1b527e7344",
    measurementId: "G-0DBBLJDDC1"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider()

export {auth, provider}
export default db;
