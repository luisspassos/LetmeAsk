import styled from "styled-components";

export const Header = styled.header`
  padding: 24px;
  border-bottom: 1px solid ${props => props.theme.colors.quaternary};

  .content {
    max-width: 1120px;
    margin: 0 auto;
    display: flex;
    justify-content: space-between;
    align-items: center;

    > div {
      display: flex;
      align-items: center;
      flex-wrap: wrap;
      justify-content: end;
      gap: 16px;
      margin-left: 20px;

      button {
        height: 40px;
      }
    }  
  }
`

export const Main = styled.main`
  max-width: 840px;
  margin: 0 auto;
  padding: 0 20px;
`
