import { initializeApp } from "firebase/app";
import firebase from 'firebase/compat/app';

import 'firebase/compat/auth';
import 'firebase/compat/firestore';
import {getFirestore} from "@firebase/firestore"
import { getAnalytics } from 'firebase/analytics';

const firebaseConfig = {  
  apiKey: "AIzaSyAhPtCixdocc0kdH9Ge-303SOTS33vA_IQ",
  authDomain: "laundry-buddy-5ff93.firebaseapp.com",
  projectId: "laundry-buddy-5ff93",
  storageBucket: "laundry-buddy-5ff93.appspot.com",
  messagingSenderId: "588811188737",
  appId: "1:588811188737:web:62ea3d50be02a324a49e00"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const db = getFirestore(app);
export default firebase;



