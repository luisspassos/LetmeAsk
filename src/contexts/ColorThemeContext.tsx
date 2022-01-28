import {
  createContext,
  useState,
  ReactNode,
  Dispatch,
  SetStateAction,
  useEffect,
  useMemo,
} from 'react';
import { DefaultTheme } from 'styled-components';

import { useThemeDetector } from '../hooks/useThemeDetector';
import { dark } from '../styles/themes/dark';
import { light } from '../styles/themes/light';

type ColorThemeProviderProps = {
  children: ReactNode;
};

type ColorThemeContextType = {
  state: {
    theme: string;
    setTheme: Dispatch<SetStateAction<string>>;
    save: boolean;
    setSave: Dispatch<SetStateAction<boolean>>;
  };
  themes: {
    dark: DefaultTheme;
    light: DefaultTheme;
  };
};

export const ColorThemeContext = createContext({} as ColorThemeContextType);

export function ColorThemeProvider({ children }: ColorThemeProviderProps) {
  const storedTheme = localStorage.getItem('theme');
  const getUserTheme = useThemeDetector() ? 'dark' : 'light';

  const initialTheme = storedTheme || getUserTheme;

  const [theme, setTheme] = useState(initialTheme);
  const [save, setSave] = useState(false);

  useEffect(() => {
    if (save) {
      localStorage.setItem('theme', theme);
    }
  }, [theme, save]);

  const colorProviderValue = useMemo(
    () => ({
      state: { theme, setTheme, save, setSave },
      themes: { dark, light },
    }),
    [theme]
  );

  return (
    <ColorThemeContext.Provider value={colorProviderValue}>
      {children}
    </ColorThemeContext.Provider>
  );
}
