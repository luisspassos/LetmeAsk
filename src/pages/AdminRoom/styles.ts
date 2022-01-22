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

export const RoomTitle = styled.div`
  margin: 32px 0 24px;
  display: flex;
  align-items: center;

  h1 {
    font-family: 'Poppins', sans-serif;
    font-size: 24px;
    color: ${props => props.theme.colors.text_primary};
  }

  span {
    margin-left: 16px;
    background-color: ${props => props.theme.colors.tertiary};
    border-radius: 9999px;
    padding: 8px 16px;
    color: white;
    font-weight: 500;
    font-size: 14px;
  }
`
export const QuestionList = styled.div`
  margin: 32px 0 8px;
`