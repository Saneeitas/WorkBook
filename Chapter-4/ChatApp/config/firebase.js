
import { initializeApp } from "firebase/app";
import { getAuth } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore';


const firebaseConfig = {
  apiKey: "AIzaSyB3vzvYKmw1mxAGTAQ_rHn6l4mzUYWL-vg",
  authDomain: "rnativechatapp.firebaseapp.com",
  projectId: "rnativechatapp",
  storageBucket: "rnativechatapp.appspot.com",
  messagingSenderId: "65454646965",
  appId: "1:65454646965:web:c48b0565c159b7424300fc"
};


initializeApp(firebaseConfig);

export const auth = getAuth();
export const database = getFirestore();