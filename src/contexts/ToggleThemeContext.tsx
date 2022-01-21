import { createContext, Dispatch, ReactNode, SetStateAction, useEffect, useState } from 'react';

import { DefaultTheme } from 'styled-components'

type ToggleThemeProviderProps = {
  children: ReactNode;
  theme: {
    state: DefaultTheme;
    dark: DefaultTheme;
    light: DefaultTheme;
    save: boolean;
    setTheme: Dispatch<SetStateAction<{state: DefaultTheme, save: boolean}>>
  }
}

export const ToggleThemeContext = createContext(()=> {})

export function ToggleThemeProvider({children, theme}: ToggleThemeProviderProps) {

  useEffect(() => {
    if(theme.save) {
      localStorage.setItem('theme', JSON.stringify(theme.state))
    }
  }, [theme])

  function toggleAndSaveTheme() {
    theme.setTheme({state: theme.state.title === 'light' ? theme.dark : theme.light, save: true});
  }
  
  return (
    <ToggleThemeContext.Provider value={toggleAndSaveTheme}>
      {children}
    </ToggleThemeContext.Provider>
  )
}