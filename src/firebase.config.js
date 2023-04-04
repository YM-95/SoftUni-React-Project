// Import the functions you need from the SDKs you need

import { initializeApp } from "firebase/app";
import { getAuth } from 'firebase/auth'
// TODO: Add SDKs for Firebase products that you want to use

// https://firebase.google.com/docs/web/setup#available-libraries


// Your web app's Firebase configuration

const firebaseConfig = {

    apiKey: "AIzaSyDgHZoiDFuYgQAnmLoLd5keJ13r9yB3fRc",

    authDomain: "react-project-fa960.firebaseapp.com",

    projectId: "react-project-fa960",

    storageBucket: "react-project-fa960.appspot.com",

    messagingSenderId: "629722201028",

    appId: "1:629722201028:web:e499cab7b7058b7a008291"

};


// Initialize Firebase

const app = initializeApp(firebaseConfig);


export const auth = getAuth(app)