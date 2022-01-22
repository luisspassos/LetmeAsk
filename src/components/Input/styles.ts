import styled from "styled-components";

export const StylizedInput = styled.input`
  width: 100%;
  height: 50px;
  border-radius: 8px;
  padding: 0 16px;
  background-color: ${props => props.theme.title === 'light' ? 'white' : 'auto'};
  border: 1px solid ${props => props.theme.colors.text_tertiary};
`