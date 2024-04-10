import axios from "axios";
import React from "react";

import { createContext, useContext, useEffect, useMemo, useState } from "react";

type JWTToken = {
  token: string | null
}

const AuthContext = createContext<JWTToken>( {token:null});

const AuthProvider = ({children}: {children: React.ReactNode}) => {
  // State to hold the authentication token
  const [JWTToken, setJWTToken_] = useState<JWTToken>({token:localStorage.getItem("token")});

  // Function to set the authentication token
  const setToken = (newToken: string) => {
    setJWTToken_({token: newToken});
  };

  useEffect(() => {
    if (JWTToken.token) {
      axios.defaults.headers.common["Authorization"] = "JWT " + JWTToken;
      localStorage.setItem('token',JWTToken.token);
    } else {
      delete axios.defaults.headers.common["Authorization"];
      localStorage.removeItem('token')
    }
  }, [JWTToken]);

  // Memoized value of the authentication context
  const contextValue = useMemo(
    () => (
        JWTToken
    ),
    [JWTToken]
  );

  // Provide the authentication context to the children components
  return (
    <AuthContext.Provider value={contextValue}>{children}</AuthContext.Provider>
  );
};

export const useAuth = () => {
  return useContext(AuthContext);
};

export default AuthProvider;