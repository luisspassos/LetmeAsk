import { createContext, useState, ReactNode, Dispatch, SetStateAction, useEffect } from "react"

import { light } from '../styles/themes/light'
import { dark } from '../styles/themes/dark'

import { useThemeDetector } from '../hooks/useThemeDetector';
import { DefaultTheme } from "styled-components";

type ColorThemeProviderProps = {
  children: ReactNode;
}

type ColorThemeContextType = {
  state: {
    theme: string, 
    setTheme: Dispatch<SetStateAction<string>>, 
    save: boolean,
    setSave: Dispatch<SetStateAction<boolean>>
  }
  themes: {
    dark: DefaultTheme, 
    light: DefaultTheme
  }
}

export const ColorThemeContext = createContext({} as ColorThemeContextType)

export function ColorThemeProvider({children}: ColorThemeProviderProps) {

  const storedTheme = localStorage.getItem('theme')
  const getUserTheme = useThemeDetector() ? 'dark' : 'light';

  const initialTheme = storedTheme ? storedTheme : getUserTheme

  const [theme, setTheme] = useState(initialTheme)
  const [save, setSave] = useState(false)

  useEffect(() => {
    if(save) {
      localStorage.setItem('theme', theme);
    }
  }, [theme, save])

  return(
    <ColorThemeContext.Provider value={{
      state: {theme, setTheme, save, setSave},
      themes: {dark, light}
    }}>
      {children}
    </ColorThemeContext.Provider>
  )
}