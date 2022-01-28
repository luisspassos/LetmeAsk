import styled from 'styled-components';

export const Title = styled.div`
  margin: 32px 0 24px;
  display: flex;
  align-items: center;
  flex-wrap: wrap;
  gap: 16px;

  h1 {
    word-break: break-word;
    font-family: 'Poppins', sans-serif;
    font-size: 24px;
    color: ${(props) => props.theme.colors.text_primary};
  }

  span {
    background-color: ${(props) => props.theme.colors.tertiary};
    border-radius: 9999px;
    padding: 8px 16px;
    color: white;
    font-weight: 500;
    font-size: 14px;
  }
`;
