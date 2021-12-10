import { DefaultTheme } from 'styled-components';

export const defaultTheme: DefaultTheme = {
  borderRadius: '4px',
  palette: {
    common: {
      main: '#854AFF',
      orange: '#f09292',
      red: '#f09292',
      gray: {
        light: 'rgba(196, 196, 196, 0.08)',
      },
    },
    text: {
      primary: '#FFFFFF',
      secondary: '#FF9900',
    },
    darkText: {
      primary: '#000000',
      secondary: '#444444',
    },
  },
  breakpoints: {
    xs: '480px',
    sm: '768px',
    md: '1024px',
    lg: '1280px',
    xl: '1440px',
  },
};

export default defaultTheme;
