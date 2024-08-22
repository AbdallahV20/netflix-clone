// import React, { useContext, useState, useEffect, ReactNode } from "react";
// import { auth } from "../../firebaseAuth/firebase";
// import { onAuthStateChanged } from "firebase/auth";

// // Define the shape of the AuthContext's value

// // Create the AuthContext with an empty default value
// const AuthContextt = React.createContext(null);

// export function useAuth() {
//   const context = useContext(AuthContextt);
//   if (context === undefined) {
//     throw new Error("useAuth must be used within an AuthProvider");
//   }
//   return context;
// }

// // Props interface for AuthProvider
// interface AuthProviderProps {
//   children: ReactNode;
// }

// export function AuthProvider({ children }: AuthProviderProps) {
//   const [currentUser, setCurrentUser] = useState<null>(null);
//   const [userLoggedIn, setUserLoggedIn] = useState<boolean>(false);
//   const [isEmailUser, setIsEmailUser] = useState<boolean>(false);
//   const [isGoogleUser, setIsGoogleUser] = useState<boolean>(false);
//   const [loading, setLoading] = useState<boolean>(true);

//   useEffect(() => {
//     const unsubscribe = onAuthStateChanged(auth, initializeUser);
//     return unsubscribe;
//   }, []);

//   async function initializeUser(user:any) {
//     if (user) {
//       setCurrentUser({ ...user });

//       // check if provider is email and password login
//       const isEmail = user.providerData.some(
//         (provider) => provider.providerId === "password"
//       );
//       setIsEmailUser(isEmail);

//       // check if the auth provider is google or not
//       // const isGoogle = user.providerData.some(
//       //   (provider) => provider.providerId === GoogleAuthProvider.PROVIDER_ID
//       // );
//       // setIsGoogleUser(isGoogle);

//       setUserLoggedIn(true);
//     } else {
//       setCurrentUser(null);
//       setUserLoggedIn(false);
//     }

//     setLoading(false);
//   }

//   const value = {
//     userLoggedIn,
//     isEmailUser,
//     isGoogleUser,
//     currentUser,
//     setCurrentUser,
//   };

//   return (
//     <AuthContextt.Provider value={value}>
//       {!loading && children}
//     </AuthContextt.Provider>
//   );
// }
export function h() {
  return console.log("Work on it");
}
