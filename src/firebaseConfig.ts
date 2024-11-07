// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBUtrqvYo4r_K1xQg-4CewxYky--IQaPFk",
  authDomain: "compass-aws-portifolio-project.firebaseapp.com",
  projectId: "compass-aws-portifolio-project",
  storageBucket: "compass-aws-portifolio-project.firebasestorage.app",
  messagingSenderId: "535198043590",
  appId: "1:535198043590:web:b4ecd4a72c9388a496f6c7",
  measurementId: "G-YWM013WPX2"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const analytics = getAnalytics(app);