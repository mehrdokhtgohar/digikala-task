import {useContext} from 'react';
import {useColorScheme} from 'react-native';
import {ThemeContext} from './context';
import {Theme} from './tokenTypes';

export const useTheme = () => {
  const {theme, toggleTheme} = useContext(ThemeContext);

  if (!theme || !toggleTheme) {
    throw new Error('useTheme must be used within a ThemeProvider');
  }

  return {theme, toggleTheme};
};

export const useSystemTheme = () => {
  const systemTheme = useColorScheme();
  return systemTheme ?? Theme.Light;
};
