import React, { useState, useEffect } from 'react';
import { ThemeProvider } from 'styled-components';
import { lightTheme, darkTheme } from '../styles/Theme';
import { GlobalStyles } from '../styles/GlobalStyles';

const ToggleTheme = ({ children }) => {
  const [theme, setTheme] = useState(() => localStorage.getItem("theme") || "light");

  const toggleTheme = () => {
    const newTheme = theme === 'light' ? 'dark' : 'light';
    setTheme(newTheme);
    localStorage.setItem("theme", newTheme);
  };

  useEffect(() => {
    document.body.style.backgroundColor = theme === "light" ? lightTheme.body : darkTheme.body;
  }, [theme]);

  return (
    <ThemeProvider theme={theme === 'light' ? lightTheme : darkTheme}>
      <GlobalStyles />
      {typeof children === 'function' 
        ? children({ toggleTheme, theme })  // Pass as object
        : children}
    </ThemeProvider>
  );
};

export default ToggleTheme;
