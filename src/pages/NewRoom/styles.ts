import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  align-items: stretch;
  height: 100vh;

  main {
    flex: 8;
    
    padding: 0 32px;

    display: flex;
    align-items: center;
    justify-content: center;
  }
`

export const MainContent = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  max-width: 320px;
  align-items: stretch;
  text-align: center;

  h2 {
    font-size: 24px;
    margin: 64px 0 24px;
    font-family: 'Poppins', sans-serif;
  }

  p {
    font-size: 14px;
    color: ${props => props.theme.colors.text_secondary};
    margin-top: 16px;
  }

  a {
    color: ${props => props.theme.colors.twelfth};
  }
`

export const Form = styled.form`

  button {
    margin-top: 16px;
    width: 100%;
  }

`