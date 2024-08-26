import { auth } from "./firebase";
import {
  createUserWithEmailAndPassword,
  sendPasswordResetEmail,
  signInWithEmailAndPassword,
  User,
  UserCredential,
} from "firebase/auth";

interface DataProps {
  email: string;
  password: string;
}

export const doRegister = async (email: string, password: string) => {
  return createUserWithEmailAndPassword(auth, email, password)
    .then((cred) => console.log(cred.user))
    .catch((err) => err);
};

export const doSignIn = async (email: string, password: string) => {
  return 
};

export const doSignOut = () => {
  return auth
    .signOut()
    .then((success) => console.log(success))
    .catch((err) => console.log(err));
};

export const doResetPassword = async (email: string) => {
  sendPasswordResetEmail(auth, email);
};
