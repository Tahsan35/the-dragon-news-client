// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyB3KlBmwNRuGUEIwUznIkNFMYuVdMBY7o0",
    authDomain: "the-news-dragon-b8648.firebaseapp.com",
    projectId: "the-news-dragon-b8648",
    storageBucket: "the-news-dragon-b8648.appspot.com",
    messagingSenderId: "929804106999",
    appId: "1:929804106999:web:b74aac41817b9e0e8c67f2"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app;