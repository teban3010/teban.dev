import React, { useState, useEffect } from 'react';

import { lightTheme, darkTheme } from 'styles/theme';

export const ThemeContext = React.createContext({
  themeLight: true,
  theme: lightTheme,
  toggleTheme: () => {},
});

const ThemeContextProvider = (props) => {
  const [themeLight, setThemeLight] = useState(true);

  useEffect(() => {
    setThemeLight(localStorage.getItem('lightTheme') === 'true');
  }, []);

  useEffect(() => {
    localStorage.setItem('lightTheme', themeLight);
  }, [themeLight]);

  const toggleThemeHandler = () => {
    setThemeLight((prevState) => !prevState);
  };

  return (
    <ThemeContext.Provider
      value={{
        toggleTheme: toggleThemeHandler,
        theme: themeLight ? lightTheme : darkTheme,
        themeLight,
      }}>
      {props.children}
    </ThemeContext.Provider>
  );
};

export default ThemeContextProvider;
