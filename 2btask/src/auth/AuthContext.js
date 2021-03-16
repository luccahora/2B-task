import React, { useEffect, useState, createContext } from "react";
import { authConfig } from "./config";

export const AuthContext = createContext();

export const AuthProvider = (props) => {
  const { children } = props;
  const [user, setUser] = useState(null); // Check if there is a user logged in
  const [aguardando, setAguardando] = useState(true);

  useEffect(() => {
    authConfig.auth().onAuthStateChanged((user) => {
      setUser(user);
      setAguardando(false);
    });
  }, []);

  if (aguardando) {
    return <> Carregando... </>;
  }

  return (
    <AuthContext.Provider value={{ user }}>  
      {" "}
      {children}{" "}
    </AuthContext.Provider>
  );
};
