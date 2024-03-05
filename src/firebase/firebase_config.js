import {initializeApp} from "firebase/app";
import {getFirestore} from "firebase/firestore/lite";
import {cert, initializeApp as adminInitializeApp} from 'firebase-admin/app';
import {getFirestore as adminGetFirestore} from 'firebase-admin/firestore';
import {serviceAccount} from "../config.js";

adminInitializeApp({
    credential: cert(serviceAccount.default),
});

const adminDB = adminGetFirestore();


const firebaseConfig = {
    apiKey: "AIzaSyAZ7-jVK4G_fWYTTdKZM-jN5uw06nAwqlI",
    authDomain: "ardhydophon.firebaseapp.com",
    projectId: "ardhydophon",
    storageBucket: "ardhydophon.appspot.com",
    messagingSenderId: "362122468309",
    appId: "1:362122468309:web:a3d0ae7d0e301f5ffafb5c",
    measurementId: "G-DMK9Y8RMMB"
};

// Initialize Firebase
const _app = initializeApp(firebaseConfig);
const firebaseDatabase = getFirestore(_app);

export {firebaseDatabase, adminDB};