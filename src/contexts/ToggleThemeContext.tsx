import { createContext, Dispatch, ReactNode, SetStateAction } from 'react';

import { DefaultTheme } from 'styled-components'

type ToggleThemeProviderProps = {
  children: ReactNode;
  theme: {
    state: DefaultTheme;
    dark: DefaultTheme;
    light: DefaultTheme;
    setTheme: Dispatch<SetStateAction<DefaultTheme>>
  }
}

export const ToggleThemeContext = createContext(()=> {})

export function ToggleThemeProvider({children, theme}: ToggleThemeProviderProps) {

  function toggleTheme() {
    theme.setTheme(theme.state.title === 'light' ? theme.dark : theme.light);
  }
  
  return (
    <ToggleThemeContext.Provider value={toggleTheme}>
      {children}
    </ToggleThemeContext.Provider>
  )
}