import firebase from 'firebase/app';
import 'firebase/database';

const firebaseConfig = {
    apiKey: "AIzaSyDEFa9i5SFEJpsPk0aeItH-F0fExO0E2Qs",
    authDomain: "imagine-inskru.firebaseapp.com",
    databaseURL: "https://imagine-inskru.firebaseio.com",
    projectId: "imagine-inskru",
    storageBucket: "",
    messagingSenderId: "55245657122",
    appId: "1:55245657122:web:8212762355fa52b9"
};

firebase.initializeApp(firebaseConfig)

const db = firebase.database()

export {
    db
}