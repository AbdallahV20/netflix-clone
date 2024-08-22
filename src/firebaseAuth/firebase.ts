import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBGYotjOHEIawsRpY-YF8W284M9hy_xQfo",
  authDomain: "netflix-clone-222.firebaseapp.com",
  projectId: "netflix-clone-222",
  storageBucket: "netflix-clone-222.appspot.com",
  messagingSenderId: "649988918742",
  appId: "1:649988918742:web:223e91ee2144380280a877",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export { app, auth };
