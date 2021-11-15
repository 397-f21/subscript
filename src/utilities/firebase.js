import { initializeApp } from 'firebase/app';
import {useState, useEffect} from "react";
import { getAuth, GoogleAuthProvider, onIdTokenChanged, signInWithPopup, signOut } from 'firebase/auth';

const firebaseConfig = {
    apiKey: "AIzaSyCFyJGqXhKiI5o4i0yt1DlKD1NlITT6My4",
    authDomain: "subscript-1aa30.firebaseapp.com",
    projectId: "subscript-1aa30",
    storageBucket: "subscript-1aa30.appspot.com",
    messagingSenderId: "33642841380",
    appId: "1:33642841380:web:8102ff86c9e19b73355fb1",
    measurementId: "G-Y74360EE24"
};

const firebase = initializeApp(firebaseConfig);

export const signInWithGoogle = () => {
    signInWithPopup(getAuth(firebase), new GoogleAuthProvider());
};

export const useUserState = () => {
    const [user, setUser] = useState();

    useEffect(() => {
        onIdTokenChanged(getAuth(firebase), setUser);
    }, []);

    return [user];
};

const firebaseSignOut = () => signOut(getAuth(firebase));

export { firebaseSignOut as signOut };