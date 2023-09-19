const display = {
  mobile: '560px',
  tablet: '768px',
  desktop: '1024px',
};

const screenSize = {
  mobile: `screen and (max-width: ${display.mobile})`,
  tablet: `screen and (max-width: ${display.tablet})`,
  desktop: `screen and (max-width: ${display.desktop})`,
};

const color = {
  white: '#fff',
  black: '#000',
  lightGray: '#F5F5F5',
  main: '#F6ECC9',
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
  screenSize,
};

export default theme;
