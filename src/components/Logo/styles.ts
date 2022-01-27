import styled from 'styled-components';

type LogoProps = {
  maxHeight?: number;
  alignSelf?: string;
};

export const StylizedLogo = styled.img<LogoProps>`
  align-self: ${({ alignSelf }) => alignSelf};
  max-height: ${({ maxHeight }) => `${maxHeight}px`};

  &.itsInTheRoom {
    @media (max-width: 450px) {
      & {
        display: none;
      }
    }
  }
`;
