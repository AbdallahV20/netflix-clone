import { onAuthStateChanged, User } from "firebase/auth";
import React, {
  createContext,
  useContext,
  useEffect,
  useState,
  ReactNode,
} from "react";
import { auth } from "../../firebaseAuth/firebase";

interface AuthContextType {
  currentUser: User | null;
  loggedIn: boolean;
  isLoading: boolean;
}

const AuthContext = createContext<AuthContextType | null>(null);

export function useAuth() {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error("useAuth must be used within an AuthProvider");
  }
  return context;
}

export function AuthProvider({ children }: { children: ReactNode }) {
  const [currentUser, setCurrentUser] = useState<User | null>(null);
  const [loggedIn, setLoggedIn] = useState<boolean>(false);
  const [isLoading, setIsLoading] = useState<boolean>(true);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, initializeUser);
    return () => unsubscribe(); // Cleanup subscription on unmount
  }, []);

  function initializeUser(user: User | null) {
    if (user) {
      setCurrentUser(user);
      setLoggedIn(true);
    } else {
      setCurrentUser(null);
      setLoggedIn(false);
    }
    setIsLoading(false);
  }

  const value: AuthContextType = {
    currentUser,
    loggedIn,
    isLoading,
  };

  return (
    <AuthContext.Provider value={value}>
      {!isLoading && children}
    </AuthContext.Provider>
  );
}
