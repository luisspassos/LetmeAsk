import styled from "styled-components";

type ContainerProps = {
  isHighlighted: boolean;
  isAnswered: boolean;
}

export const Container = styled.div<ContainerProps>`
  background-color: ${({isHighlighted, isAnswered, theme})=> 
   isAnswered ? theme.colors.senary : isHighlighted ? theme.colors.septenary : theme.colors.quinary
  };
  border-radius: 8px;
  box-shadow: 0 2px 12px rgba(0, 0, 0, 0.04);
  padding: 24px;
  border: ${({isHighlighted, isAnswered, theme})=> isHighlighted && !isAnswered ? `1px solid ${theme.colors.primary}` : 0};

  & + div {
    margin-top: 8px;
  }

  p {
    color: ${props => props.theme.colors.text_primary};
    word-break: break-word;
  }
`

export const Footer = styled.footer<ContainerProps>`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-top: 24px;

  > div:first-child {
    display: flex;
    align-items: center;

    img {
      width: 32px;
      height: 32px;
      border-radius: 50%;
      filter: ${({isAnswered})=> isAnswered ? 'grayscale(80%)' : 0};
    }

    span {
      margin-left: 8px;
      color: ${({isHighlighted, isAnswered, theme})=> isHighlighted && !isAnswered ? theme.colors.text_primary : theme.colors.text_secondary};
      font-size: 14px;
    }
  }

  > div {
    display: flex;
    gap: 16px;
  }

  button {
    border: 0;
    background-color: transparent;
    cursor: pointer;
    transition: filter 0.2s;

    &.like-button {
      display: flex;
      align-items: flex-end;
      color: ${props => props.theme.colors.text_secondary};
      gap: 8px;

      &.liked {
        color: ${props => props.theme.colors.primary};

        svg path{
          stroke: ${props => props.theme.colors.primary};
        }
      }
    }

    &:hover {
      filter: ${props => props.theme.colors.brightness};
    }
  }

`