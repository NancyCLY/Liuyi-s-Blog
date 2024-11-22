import firebase from 'firebase/app'
import 'firebase/firestore'

const firebaseConfig = {
    apiKey: "AIzaSyDg1-AYjYxAlfag0QCWOIPrqusM2C8AXHA",
    authDomain: "my-project-1-48ce0.firebaseapp.com",
    projectId: "my-project-1-48ce0",
    storageBucket: "my-project-1-48ce0.firebasestorage.app",
    messagingSenderId: "701335545243",
    appId: "1:701335545243:web:7e04ce4424fa10337c6d3e"
};

//init firebase
firebase.initializeApp(firebaseConfig)

// init firestore service
const projectFirestore = firebase.firestore()
const timestamp = firebase.firestore.FieldValue.serverTimestamp

export { projectFirestore, timestamp }