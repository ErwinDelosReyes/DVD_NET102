// Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/11.2.0/firebase-app.js";
import { getAuth } from "https://www.gstatic.com/firebasejs/11.2.0/firebase-auth.js"; 
import { getFirestore } from "https://www.gstatic.com/firebasejs/11.2.0/firebase-firestore.js";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBfFyDmTdne5bnlE01Gy-46iDwgNKVmNZc",
  authDomain: "dvd-net102-project.firebaseapp.com",
  projectId: "dvd-net102-project",
  storageBucket: "dvd-net102-project.firebasestorage.app",
  messagingSenderId: "19168809490",
  appId: "1:19168809490:web:3414534a8dae02367f3ecb",
  measurementId: "G-ZT02XEL75Y"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);

export { auth, db };