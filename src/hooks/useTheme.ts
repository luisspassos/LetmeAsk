import { useState, Dispatch, SetStateAction } from 'react';

import { useThemeDetector } from './useThemeDetector';

import { light } from '../styles/themes/light'
import { dark } from '../styles/themes/dark'

import { DefaultTheme } from 'styled-components'

type Response = [
  {
    state: DefaultTheme;
    save: boolean;
  },
  Dispatch<SetStateAction<{
    state: DefaultTheme;
    save: boolean;
  }>>
]

export function useTheme():Response {
  const checkTheme = useThemeDetector() ? dark : light;
  let initialTheme = checkTheme;
  const storedTheme = localStorage.getItem('theme');

  if(storedTheme) {
    initialTheme = JSON.parse(storedTheme)
  }

  const [theme, setTheme] = useState({state: initialTheme, save: false});

  return [theme, setTheme]
}
