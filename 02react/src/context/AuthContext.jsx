import React, { createContext, useContext, useEffect, useState } from 'react'
import { useNavigate } from 'react-router';

const AuthContext = createContext (null);


export function AuthProvider({children}) {
    const [user, setUser] = useState(null);
    const navigate = useNavigate();

    useEffect(() => {
      setUser(JSON.parse(localStorage.getItem("user")));
    },[]);

    const register = (userData) => {
      setUser(userData);
      localStorage.setItem("user", JSON.stringify(userData));
      navigate("/login");
    }

    const login = (userData) => {
      setUser(userData);
      localStorage.setItem("user", JSON.stringify(userData));
      navigate("/dashboard");
    }

    const logout = () => {
      setUser(null);
      localStorage.removeItem("user");
      navigate("/login");

    }
    
    const isAuthenticated = () => {
      return !!user;
    }

    const value = {user,register, login, logout, isAuthenticated: !!user};


  return <AuthContext.Provider value={value} > {children} </AuthContext.Provider>
}

export function useAuth() {
  return useContext(AuthContext);
}

