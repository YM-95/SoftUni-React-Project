// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword, signOut, onAuthStateChanged } from "firebase/auth";
import { useState, useEffect } from "react";
// TODO: Add SDKs for Firebase products that you want to use

// https://firebase.google.com/docs/web/setup#available-libraries


// Your web app's Firebase configuration

const firebaseConfig = {
    apiKey: "AIzaSyDgHZoiDFuYgQAnmLoLd5keJ13r9yB3fRc ",
    authDomain: "react-project-fa960.firebaseapp.com",
    projectId: "react-project-fa960",
    storageBucket: "react-project-fa960.appspot.com",
    messagingSenderId: "629722201028",
    appId: "1:629722201028:web:e499cab7b7058b7a008291"
};


// Initialize Firebase

const app = initializeApp(firebaseConfig);
const auth = getAuth(app)

export const register = (email, password) => {

    return createUserWithEmailAndPassword(auth, email, password);

};


export const login = (email, password) => {

    return signInWithEmailAndPassword(auth, email, password);

};

export function logout() {
    return signOut(auth);
}

export function useAuth() {
    const [currentUser, setCurrentUser] = useState();

    useEffect(() => {
        const unsub = onAuthStateChanged(auth, user => setCurrentUser(user));
        return unsub;
    }, [])

    return currentUser;
}
