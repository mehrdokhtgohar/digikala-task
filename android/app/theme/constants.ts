import {Theme} from './tokenTypes';

export const TOKENS = {
  [Theme.Light]: {
    PRIMARY: {
      REGULAR: '#FCBE5B',
      LIGHT: '#635F68',
      BACKGROUND: '#FFFF',
      TEXT: '#1F1F1F',
      RED: '#FF0000',
      GREEN: '#008000',
      HEADER_BACKGROUND: '#EAEAEB',
      BORDER_COLOR: '#635F68',
    },
  },
  [Theme.Dark]: {
    PRIMARY: {
      REGULAR: '#FCBE5B',
      LIGHT: '#EAEAEB',
      BACKGROUND: '#192734',
      TEXT: '#FFFF',
      RED: '#FF0000',
      GREEN: '#008000',
      HEADER_BACKGROUND: '#15202B',
      BORDER_COLOR: '#8899A6',
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

export type Tokens =
  | (typeof TOKENS)[`${Theme.Light}`]
  | (typeof TOKENS)[`${Theme.Dark}`];
export const STORAGE_KEY = '@theme';
