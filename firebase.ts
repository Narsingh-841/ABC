// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCydpRHP6zPWFL9P06UY_g7EHMoal1Eo_A",
  authDomain: "capabiliq-849e6.firebaseapp.com",
  projectId: "capabiliq-849e6",
  storageBucket: "capabiliq-849e6.firebasestorage.app",
  messagingSenderId: "524639148490",
  appId: "1:524639148490:web:f855991fd9374585aad733",
  measurementId: "G-D9F50HRH9V"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);