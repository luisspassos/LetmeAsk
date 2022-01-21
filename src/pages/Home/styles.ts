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

  > img {
    align-self: center;
  }

  h2 {
    font-size: 24px;
    margin: 64px 0 24px;
    font-family: 'Poppins', sans-serif;
  }
`

export const Form = styled.form`
  input {
    height: 50px;
    border-radius: 8px;
    padding: 0 16px;
    background-color: white;
    border: 1px solid ${props => props.theme.colors.text_tertiary};
  }

  button {
    margin-top: 16px;
  }

  button, input {
    width: 100%;
  }
`

export const Separator = styled.div`
  font-size: 14px;
  color: ${props => props.theme.colors.text_tertiary};

  margin: 32px 0;
  display: flex;
  align-items: center;

  &::before {
    content: '';
    flex: 1;
    height: 1px;
    background-color: ${props => props.theme.colors.text_tertiary};
    margin-right: 16px;
  }

  &::after {
    content: '';
    flex: 1;
    height: 1px;
    background-color: ${props => props.theme.colors.text_tertiary};
    margin-left: 16px;
  }
`