import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
  :root {
    color-scheme: ${(props) => props.theme.title};
  }

  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  body {
    background-color: ${(props) => props.theme.colors.background};
    color: ${(props) => props.theme.colors.text_primary};
  }

  body, input, textarea, button {
    font: 400 16px 'Roboto', sans-serif;
  }

  input::placeholder, textarea::placeholder {
    color: ${(props) => props.theme.colors.placeholder};
  }
`;
