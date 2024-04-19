// ThemeContext.js
import React, {createContext, useState, useEffect, useCallback} from 'react';
import {useColorScheme} from 'react-native';

export const ThemeContext = createContext();

export const ThemeProvider = ({children}) => {
  const systemTheme = useColorScheme();
  const [theme, setTheme] = useState(systemTheme ?? 'light');

  useEffect(() => {
    setTheme(systemTheme ?? 'light');
  }, [systemTheme]);

  const toggleTheme = useCallback(() => {
    setTheme(prevTheme => (prevTheme === 'light' ? 'dark' : 'light'));
  }, []);

  return (
    <ThemeContext.Provider value={{theme, toggleTheme}}>
      {children}
    </ThemeContext.Provider>
  );
};
