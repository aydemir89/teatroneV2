// Import the functions you need from the SDKs you need
import { initializeApp, getApp, getApps } from 'firebase/app'
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from 'firebase/firestore'
import { getAuth } from 'firebase/auth'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyCYoC1HXiLg5w0Whmz-ghcu9b01Z3TBGHM",
    authDomain: "teatronelogin.firebaseapp.com",
    projectId: "teatronelogin",
    storageBucket: "teatronelogin.appspot.com",
    messagingSenderId: "990797377036",
    appId: "1:990797377036:web:86f93811c6e157f2620829",
    measurementId: "G-VHNVY5H79F"
};

// Initialize Firebase
const app = !getApps().length ? initializeApp(firebaseConfig) : getApp()
const db = getFirestore()
const auth = getAuth()

export default app
export { auth, db }