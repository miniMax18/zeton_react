import React, { createContext, useContext, useEffect, useReducer } from 'react';
import axios from 'axios';
import { type TokenAction, type Authentication } from './types.ts';
import {
  authenticationReducer,
  type AuthenticationReducer,
} from './authenticationReducer.ts';
import {useNavigate} from "react-router-dom";

export const AuthenticationContext = createContext<Authentication>({
  token: null,
});
export const TokenDispatchContext = createContext<React.Dispatch<TokenAction>>(
  {} as React.Dispatch<TokenAction>
);

export const useAuthenticationData = () => useContext(AuthenticationContext);
export const useTokenDispatch = () => useContext(TokenDispatchContext);

const AuthProvider = ({ children }: { children: React.ReactNode }) => {
  const localStorageKey = 'token';
  const navigate = useNavigate();

  const [authentication, dispatch] = useReducer<AuthenticationReducer>(
    authenticationReducer,
    {
      token: null,
    }
  );

  useEffect(() => {
    if (authentication.token) {
      axios.defaults.headers.common["Authorization"] =
        "Bearer " + authentication.token;
      localStorage.setItem(localStorageKey, authentication.token);
    } else if(localStorage.getItem(localStorageKey)) {
      axios.defaults.headers.common["Authorization"] =
        "Bearer " + localStorage.getItem(localStorageKey);
    }
    else {
      navigate("/login");
    }
  }, [authentication, localStorageKey]);

  return (
    <AuthenticationContext.Provider value={authentication}>
      <TokenDispatchContext.Provider value={dispatch}>
        {children}
      </TokenDispatchContext.Provider>
    </AuthenticationContext.Provider>
  );
};

export default AuthProvider;
