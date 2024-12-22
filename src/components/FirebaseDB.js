// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getDatabase } from "firebase/database";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyD01DkMTso2zLWRv2_updLJUT7wcqmy8GA",
    authDomain: "reactfirebaseexample-db9eb.firebaseapp.com",
    projectId: "reactfirebaseexample-db9eb",
    storageBucket: "reactfirebaseexample-db9eb.firebasestorage.app",
    messagingSenderId: "714395620407",
    appId: "1:714395620407:web:4fcd04a7ca8cc2529d5bb2",
    databaseURL: "https://reactfirebaseexample-db9eb-default-rtdb.firebaseio.com/"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const database = getDatabase(app);

export default database