const display = {
  mobile: '561px',
  tablet: '769px',
  desktop: '1025px',
};

const color = {
  white: '#fff',
  black: '#000',
  lightGrayYello: '#FCF6EF',
  lightGray: '#F5F5F5',
  main: '#E2DCC1',
  mainLight: '#F0EEE3',
  mainDark: '#574910',
  mainDim: '#A08E45',
};

const fontSize = {
  xs: '1.2rem',
  s: '1.3rem',
  r: '1.4rem',
  m: '1.6rem',
  l: '2.4rem',
  xl: '4rem',
};

const theme = {
  color,
  fontSize,
  display,
  mobile: `(min-width: ${display.mobile})`,
  tablet: `(min-width: ${display.tablet})`,
  desktop: `(min-width: ${display.desktop})`,
};

export default theme;
