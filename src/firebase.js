import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';


let firebaseConfig = {
   apiKey: "AIzaSyCiQ3uWziSk2mkCYUqle5JDMtpMAXkSa24",
   authDomain: "proyectocursos-7ab88.firebaseapp.com",
   databaseURL: "https://proyectocursos-7ab88.firebaseio.com",
   projectId: "proyectocursos-7ab88",
   storageBucket: "proyectocursos-7ab88.appspot.com",
   messagingSenderId: "907313448106",
   appId: "1:907313448106:web:7c602081a28d8da2dc3cd3"
};
 
firebase.initializeApp(firebaseConfig);

const db = firebase.firestore();
const auth = firebase.auth();

export { db, auth };