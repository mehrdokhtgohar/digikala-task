import {useContext} from 'react';
import {useColorScheme} from 'react-native';
import {ThemeContext} from './context';
import {Theme} from './tokenTypes';

export const useTheme = () => {
  const {theme, toggleTheme} = useContext(ThemeContext);

  return {theme, toggleTheme};
};

export const useSystemTheme = () => {
  const systemTheme = useColorScheme();
  return systemTheme ?? Theme.Light;
};
