import React from "react";
import { GoogleAuthProvider,getAuth, getRedirectResult } from "firebase/auth";
import {app} from './firebaseConfig.js'

 const AuthContext = React.createContext();


export const AuthProvider = ({ children }) => {
  const [user, setUser] = React.useState(null);

  React.useEffect(() => {
    app.auth().onAuthStateChanged(setUser);
  }, []);

  return (
    <AuthContext.Provider value={{ user }}>{children}</AuthContext.Provider>
  );
};