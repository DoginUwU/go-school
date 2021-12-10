import 'styled-components';
interface IPalette {
  main: string;
}
declare module 'styled-components' {
  export interface DefaultTheme {
    borderRadius: string;
    palette: {
      common: {
        main: string;
        orange: string;
        red: string;
        gray: {
          light: string;
        }
      };
      text: {
        primary: string;
        secondary: string;
      };
      darkText: {
        primary: string;
        secondary: string;
      };
    };
    breakpoints: {
      xs: string;
      sm: string;
      md: string;
      lg: string;
      xl: string;
    };
  }
}
