// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyABRTMQAVYWCw5oWtovQCh3ySa-YKImhqQ",
  authDomain: "netflix-v20.firebaseapp.com",
  projectId: "netflix-v20",
  storageBucket: "netflix-v20.appspot.com",
  messagingSenderId: "569692704207",
  appId: "1:569692704207:web:92ba70b8e43074273b16ba"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export { app, auth };
