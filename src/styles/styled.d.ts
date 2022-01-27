import 'styled-components';

declare module 'styled-components' {
  export interface DefaultTheme {
    title: string;

    colors: {
      background: string;

      primary: string;
      secondary: string;
      tertiary: string;
      quaternary: string;
      quinary: string;
      senary: string;
      septenary: string;
      octonary: string;
      nonary: string;
      denary: string;
      eleventh: string;
      twelfth: string;

      switcher_icon: string;
      switcher_background: string;

      brightness: string;
      placeholder: string;

      text_primary: string;
      text_secondary: string;
      text_tertiary: string;
    };
  }
}
