import {Theme} from './tokenTypes';

export const TOKENS = {
  [Theme.Light]: {
    PRIMARY: {
      REGULAR: '#8448AC',
      LIGHT: '#635F68',
      BACKGROUND_COLOR: '#FFFF',
    },
  },
  [Theme.Dark]: {
    PRIMARY: {
      REGULAR: '#8448AC',
      LIGHT: '#635F68',
      BACKGROUND_COLOR: '#1F1F1F',
    },
  },
} as const;

export const FONTS = {
  PERSIAN: {
    LIGHT: 'Vazir-Light-FD',
    REGULAR: 'Vazir-Regular-FD',
    MEDIUM: 'Vazir-Medium-FD',
    BOLD: 'Vazir-Bold-FD',
  },
  ENGLISH: {
    REGULAR: 'Axiforma-Regular',
    MEDIUM: 'Axiforma-Medium',
    BOLD: 'Axiforma-Bold',
  },
} as const;

export type Tokens = (typeof TOKENS)[`${Theme.Light}`] &
  (typeof TOKENS)[`${Theme.Dark}`];
export const STORAGE_KEY = '@theme';
