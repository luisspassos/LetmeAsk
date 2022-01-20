import styled from "styled-components";

type ContainerProps = {
  isHighlighted: boolean;
  isAnswered: boolean;
}

export const Container = styled.div<ContainerProps>`
  background-color: ${({isHighlighted, isAnswered})=> 
   isAnswered ? '#DBDCDD' : isHighlighted ? '#F4F0FF' : '#fefefe'
  };
  border-radius: 8px;
  box-shadow: 0 2px 12px rgba(0, 0, 0, 0.04);
  padding: 24px;
  border: ${({isHighlighted, isAnswered})=> isHighlighted && !isAnswered ? ' 1px solid #835afd' : 0};

  & + div {
    margin-top: 8px;
  }

  p {
    color: #29292e;
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
      color: ${({isHighlighted, isAnswered})=> isHighlighted && !isAnswered ? '#29292e' : '#737380'};
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
      color: #737380;
      gap: 8px;

      &.liked {
        color: #835afd;

        svg path{
          stroke: #835afd;
        }
      }
    }

    &:hover {
      filter: brightness(0.7);
    }
  }

`