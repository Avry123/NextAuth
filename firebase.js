// Import the functions you need from the SDKs you need
import { initializeApp, getApps, getApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import {getFirestore} from 'firebase/firestore';
import {getStorage} from 'firebase/storage';

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBGp_4jmBqvh_0svliUGCi7t6YxgeHVMXw",
  authDomain: "instagram-2-72bfa.firebaseapp.com",
  projectId: "instagram-2-72bfa",
  storageBucket: "instagram-2-72bfa.appspot.com",
  messagingSenderId: "551527812080",
  appId: "1:551527812080:web:bd6f9bdb9424d9cc65ab35",
  measurementId: "G-D4BPYQXDCR"
};

// Initialize Firebase
const app = getApps() ? initializeApp(firebaseConfig) : getApp();
const db = getFirestore();
// const storage = getFirestore(app);
// const analytics = getAnalytics(app);

export {app, db};