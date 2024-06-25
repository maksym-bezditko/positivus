export const theme = {
  colors: {
    black: '#000',
    green: '#b9ff66',
    lightGrey: '#f3f3f3',
    dark: '#191a23',
    transparent: 'transparent',
    darkGrey: '#292A32',
    grey: '#33475b',
    lighterGrey: '#d9d9d9',
    red: '#d81f26',
    blue: '#2d8cff',
    white: '#fff',
    orange: '#ff9900',
    redishOrange: '#FF7A59',
    darkBlue: '#191a23'
  },
  fontSizes: {
    xs: '1rem',
    sm: '1.125rem',
    md: '1.25rem',
    lg: '1.875rem',
    xl: '2rem',
    xxl: '2.5rem',
    xxxl: '3.75rem'
  },
  breakpoints: {
    xs: '0px',
    xxs: '320px',
    xsm: '480px',
    sm: '576px',
    md: '768px',
    lg: '992px',
    xl: '1200px',
    xxl: '1400px',
    xxxl: '1600px'
  }
};

export type CustomTheme = typeof theme;
