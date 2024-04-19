import {Tokens} from './constants';

export enum Theme {
  Light = 'light',
  Dark = 'dark',
}

export type ThemeState = `${Theme}` | 'systemPreferences' | undefined;

export interface ThemeContextType {
  theme: `${Theme}`;
  tokens: Tokens;
  setTheme: (newTheme: ThemeState) => void;
}
