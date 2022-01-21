import styled from "styled-components";

export const StylizedAside = styled.aside`
  flex: 7;

  background-color: ${props => props.theme.colors.primary};
  color: white;

  display: flex;
  flex-direction: column;
  justify-content: center;

  padding: 120px 80px;

  img {
    max-width: 320px;
  }

  strong {
    font: 700 36px 'Poppins', sans-serif;
    line-height: 42px;
    margin-top: 16px;
  }

  p {
    font-size: 24px;
    line-height: 32px;
    margin-top: 16px;
    color: ${props => props.theme.colors.octonary};
  }

  @media (max-width: 825px) {
    & {
      display: none;
    }
  }
`