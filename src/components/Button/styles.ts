import styled from "styled-components";

type StylizedButtonProps = {
  isOutlined: boolean;
} 

export const StylizedButton = styled.button<StylizedButtonProps>`
  height: 50px;
  border-radius: 8px;
  font-weight: 500;
  background-color: ${({ isOutlined, theme }) => isOutlined ? theme.colors.nonary : theme.colors.primary};
  color: ${({ isOutlined, theme }) => isOutlined ? theme.colors.eleventh : '#FFF'};
  padding: 0 32px;

  display: flex;
  justify-content: center;
  align-items: center;
  
  cursor: pointer;
  border: ${({ isOutlined, theme }) => isOutlined ? `1px solid ${theme.colors.primary}` : 0};

  transition: filter 0.2s;

  img {
    margin-right: 8px;
  }

  &:not(:disabled):hover {
    filter: ${props => props.theme.colors.brightness};
  }

  &:disabled {
    opacity: 0.6;
    cursor: not-allowed;
  }

  &.create-room {
    margin-top: 64px;
    height: 50px;
    border-radius: 8px;
    font-weight: 500;
    background-color: ${props => props.theme.colors.secondary};
    color: white;

    display: flex;
    justify-content: center;
    align-items: center;
    
    cursor: pointer;
    border: 0;

    transition: filter 0.2s;

    img {
      margin-right: 8px;
    }

    &:hover {
      filter: ${props => props.theme.colors.brightness};
    }
  }
`