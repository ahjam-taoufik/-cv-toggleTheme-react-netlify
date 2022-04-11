import { createContext, useState } from 'react';
import { themes } from './theme';

export const themeContext = createContext();


const ThemeProvider = ({ children }) => {
  const [isdark, setIsdark] = useState(false);
  const theme = isdark ? themes.darkTheme : themes.lightTheme;

  const toggleTheme = () => {
    setIsdark(!isdark);
  };

  const state = [{ isdark, theme, toggleTheme }];

  return (
    <themeContext.Provider value={state}>{children}</themeContext.Provider>
  );
};

export default ThemeProvider;
