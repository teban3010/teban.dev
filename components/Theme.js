import React, { useContext } from 'react';
import { CssBaseline, ThemeProvider, StylesProvider } from '@material-ui/core';

import { ThemeContext } from 'context/ThemeContext';

const Theme = ({ children }) => {
  const themeContext = useContext(ThemeContext);

  return <ThemeProvider theme={themeContext.theme}>{children}</ThemeProvider>;
};

export default Theme;
