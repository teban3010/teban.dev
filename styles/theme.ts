import { Theme, createMuiTheme } from '@material-ui/core/styles';

const storageKeys = {
  theme: 'theme',
};

export interface MyTheme extends Theme {
  type?: string;
  drawerWidth?: number;
}

declare module '@material-ui/core/styles/createMuiTheme' {
  interface ThemeOptions {
    type?: string;
    drawerWidth?: number;
  }
}

export const lightTheme = createMuiTheme({
  type: 'light',
  drawerWidth: 350,
  palette: {
    common: { black: '#000', white: '#fff' },
    background: {
      paper: 'rgba(245, 245, 250, 1)',
      default: 'rgba(234, 234, 255, 1)',
    },
    primary: {
      light: 'rgba(1, 146, 240, 1)',
      main: 'rgba(0, 114, 207, 1)',
      dark: 'rgba(0, 67, 158, 1)',
      contrastText: '#fff',
    },
    secondary: {
      light: 'rgba(96, 87, 146, 1)',
      main: 'rgba(80, 69, 125, 1)',
      dark: 'rgba(58, 44, 89, 1)',
      contrastText: '#fff',
    },
    error: {
      light: '#e57373',
      main: '#f44336',
      dark: '#d32f2f',
      contrastText: '#fff',
    },
    text: {
      primary: 'rgba(0, 0, 0, 0.87)',
      secondary: 'rgba(0, 0, 0, 0.54)',
      disabled: 'rgba(0, 0, 0, 0.38)',
      hint: 'rgba(0, 0, 0, 0.38)',
    },
  },
  typography: {
    fontFamily: [
      '-apple-system',
      'BlinkMacSystemFont',
      '"Segoe UI"',
      'Roboto',
      '"Helvetica Neue"',
      'Arial',
      'sans-serif',
      '"Apple Color Emoji"',
      '"Segoe UI Emoji"',
      '"Segoe UI Symbol"',
    ].join(','),
    h1: { fontSize: '2.5rem', marginTop: '1.75rem' },
    h2: { fontSize: '1.73286rem', marginTop: '1.75rem' },
    h3: { fontSize: '1.4427rem', marginTop: '1.75rem' },
    h4: { fontSize: '1rem', marginTop: '1.75rem' },
    h5: { fontSize: '0.83255rem', marginTop: '1.75rem' },
    h6: { fontSize: '0.83255rem', marginTop: '1.75rem' },
    body1: { fontSize: '0.875rem', marginBottom: '1.75rem' },
  },
});

export const darkTheme = createMuiTheme({
  type: 'dark',
  drawerWidth: 350,
  palette: {
    common: { black: 'rgba(0, 0, 0, 1)', white: 'rgba(255, 255, 255, 1)' },
    background: {
      paper: 'rgba(87, 76, 130, 1)',
      default: 'rgba(58, 44, 89, 1)',
    },
    primary: {
      light: 'rgba(242, 238, 63, 1)',
      main: 'rgba(242, 197, 46, 1)',
      dark: 'rgba(238, 134, 9, 1)',
      contrastText: 'rgba(0, 0, 0, 1)',
    },
    secondary: {
      light: 'rgba(234, 234, 255, 1)',
      main: 'rgba(167, 169, 244, 1)',
      dark: 'rgba(111, 107, 217, 1)',
      contrastText: 'rgba(0, 0, 0, 1)',
    },
    error: {
      light: '#e57373',
      main: '#f44336',
      dark: '#d32f2f',
      contrastText: '#fff',
    },
    text: {
      primary: 'rgba(255, 255, 255, 1)',
      secondary: 'rgba(176, 193, 206, 1)',
      disabled: 'rgba(178, 183, 189, 1)',
      hint: 'rgba(178, 183, 189, 1)',
    },
  },
  typography: {
    fontFamily: [
      '-apple-system',
      'BlinkMacSystemFont',
      '"Segoe UI"',
      'Roboto',
      '"Helvetica Neue"',
      'Arial',
      'sans-serif',
      '"Apple Color Emoji"',
      '"Segoe UI Emoji"',
      '"Segoe UI Symbol"',
    ].join(','),
    h1: { fontSize: '2.5rem', marginTop: '1.75rem' },
    h2: { fontSize: '1.73286rem', marginTop: '1.75rem' },
    h3: { fontSize: '1.4427rem', marginTop: '1.75rem' },
    h4: { fontSize: '1rem', marginTop: '1.75rem' },
    h5: { fontSize: '0.83255rem', marginTop: '1.75rem' },
    h6: { fontSize: '0.83255rem', marginTop: '1.75rem' },
    body1: { fontSize: '0.875rem', marginBottom: '1.75rem' },
  },
});
