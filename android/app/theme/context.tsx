import React, {createContext, useState, useEffect, useCallback} from 'react';
import {useColorScheme} from 'react-native';
import {Tokens, TOKENS} from './constants';
import {ThemeContextType} from './tokenTypes';

export const ThemeContext = createContext<Partial<ThemeContextType>>({});

export const ThemeProvider = ({children}: any) => {
  const systemTheme = useColorScheme();
  const [theme, setTheme] = useState<Tokens>(
    systemTheme ? TOKENS[systemTheme] : TOKENS.light,
  );

  useEffect(() => {
    setTheme(systemTheme ? TOKENS[systemTheme] : TOKENS.light);
  }, [systemTheme]);

  const toggleTheme = useCallback(() => {
    setTheme(prevTheme =>
      prevTheme === TOKENS.light ? TOKENS.dark : TOKENS.light,
    );
  }, []);

  return (
    <ThemeContext.Provider value={{theme, toggleTheme}}>
      {children}
    </ThemeContext.Provider>
  );
};
