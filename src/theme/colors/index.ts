import palette from './palette';

const colors = {
  background: palette.white,
  text: {
    primary: palette.black,
    secondary: palette.gray[700],
    disabled: palette.gray[500],
  },
  border: palette.gray[300],
  primary: {
    main: palette.primary,
    light: '#d1c4e9',
    dark: '#512da8',
  },
  gray: palette.gray,
};

export default colors;
