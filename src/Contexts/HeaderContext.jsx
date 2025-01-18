import React, { useState, createContext } from "react";

export const HeaderContext = createContext();

export const HeaderContextProvider = ({ children }) => {
  const [content, setContent] = useState('dashboard');

  return (
    <HeaderContext.Provider value={{ content, setContent }}>
      {children}
    </HeaderContext.Provider>
  )
}