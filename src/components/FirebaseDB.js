// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getDatabase } from "firebase/database";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyBsBqzMI_lDDM0Vty6e0500IoOSINBVTSA",
    authDomain: "fir-example-f62fe.firebaseapp.com",
    projectId: "fir-example-f62fe",
    storageBucket: "fir-example-f62fe.firebasestorage.app",
    messagingSenderId: "79461844605",
    appId: "1:79461844605:web:064907a49ed27f2a421314",
    measurementId: "G-NCRY2XJ1GD",
    databaseURL: "https://fir-example-f62fe-default-rtdb.firebaseio.com/"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const database = getDatabase(app);

export default database