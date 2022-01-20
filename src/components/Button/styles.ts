import styled from "styled-components";

type StylizedButtonProps = {
  isOutlined: boolean;
}

export const StylizedButton = styled.button<StylizedButtonProps>`
  height: 50px;
  border-radius: 8px;
  font-weight: 500;
  background-color: ${({isOutlined})=> isOutlined ? '#FFF' : '#835afd'};
  color: ${({isOutlined})=> isOutlined ? '#835afd' : '#FFF'};
  padding: 0 32px;

  display: flex;
  justify-content: center;
  align-items: center;
  
  cursor: pointer;
  border: ${({isOutlined})=> isOutlined ? '1px solid #835afd' : 0};

  transition: filter 0.2s;

  img {
    margin-right: 8px;
  }

  &:not(:disabled):hover {
    filter: brightness(0.9);
  }

  &:disabled {
    opacity: 0.6;
    cursor: not-allowed;
  }
`