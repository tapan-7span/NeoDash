// https://github.dev/PoojanBhalodiya/crudfirebase
// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBbwQKYxika_qwdMLG2ZJ_0EbHWXRojq2A",
  authDomain: "neobase-40fd5.firebaseapp.com",
  projectId: "neobase-40fd5",
  storageBucket: "neobase-40fd5.appspot.com",
  messagingSenderId: "1037781943734",
  appId: "1:1037781943734:web:b49ff3741854e2655eed17",
  measurementId: "G-9BGWPV8DH2",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
