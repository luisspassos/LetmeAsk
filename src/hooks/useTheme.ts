import { useContext } from 'react';

import { ColorThemeContext } from '../contexts/ColorThemeContext';

export function useTheme() {
  const value = useContext(ColorThemeContext);

  return value;
}
