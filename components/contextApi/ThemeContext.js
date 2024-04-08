"use client";
import { createContext, useState } from "react";

export const ThemeContext = createContext();
import React from "react";

const ThemeProvider = ({ children }) => {
  const [theme, setTheme] = useState("light");
  const switchDark = () => {
    setTheme("dark");
  };
  const switchLight = () => {
    setTheme("light");
  };
  return (
    <div>
      <ThemeContext.Provider value={{ theme, switchDark, switchLight }}>
        {children}
      </ThemeContext.Provider>
    </div>
  );
};

export default ThemeProvider;
