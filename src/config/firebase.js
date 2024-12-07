// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {get, getDatabase} from 'firebase/database';
import {getAuth,GoogleAuthProvider} from 'firebase/auth';

const firebaseConfig = {
  apiKey: "AIzaSyAeIqzjD1pL2ACIFKnC0JjMAFmiQnbpT1I",
  authDomain: "smart-helmet-eac8b.firebaseapp.com",
  databaseURL: "https://smart-helmet-eac8b-default-rtdb.firebaseio.com",
  projectId: "smart-helmet-eac8b",
  storageBucket: "smart-helmet-eac8b.appspot.com",
  messagingSenderId: "932939750030",
  appId: "1:932939750030:web:39e64bd9827753466307df"
};



const app = initializeApp(firebaseConfig);
const database=getDatabase(app);
export const auth=getAuth(app);
export const googleProvider=new GoogleAuthProvider();
// console.log(database);
// console.log('hello');
export {database};
