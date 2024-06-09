import { createContext, useState, useEffect } from 'react';
import axios from 'axios';

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const apiUrl = import.meta.env.VITE_REACT_APP_DOUCEUR_API;
  const [auth, setAuth] = useState({
    token: localStorage.getItem('token') || null,
    user: null,
  });
  const [isLoggedIn, setIsLoggedIn] = useState(!!localStorage.getItem('token'));

  const logout = async () => {
    setIsLoggedIn(false);
    localStorage.removeItem('token');

    await axios.post(`${apiUrl}/logout`);
  };

  useEffect(() => {
    if (auth.token) {
      localStorage.setItem('token', auth.token);
    } else {
      localStorage.removeItem('token');
    }
  }, [auth.token]);

  return (
    <AuthContext.Provider
      value={{ auth, setAuth, isLoggedIn, setIsLoggedIn, logout }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export default AuthContext;
