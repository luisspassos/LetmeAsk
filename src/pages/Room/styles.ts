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
      flex-wrap: wrap-reverse;
      justify-content: end;
      gap: 16px;

      button {
        height: 40px;
      }
    }

    .endContent {
      display: flex;
      align-items: center;

      margin-left: 20px;
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

export const Form = styled.form`
  textarea {
    width: 100%;
    border: 0;
    padding: 16px;
    border-radius: 8px;
    background-color: ${props => props.theme.colors.quinary};
    box-shadow: 0 2px 12px rgba(0, 0, 0, 0.04);
    resize: vertical;
    min-height: 130px;
  }
`

export const FormFooter = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-top: 16px;

  .user-info {
    display: flex;
    align-items: center;

    img {
      width: 32px;
      height: 32px;
      border-radius: 50%;
    }

    span {
      margin-left: 8px;
      color: ${props => props.theme.colors.text_primary};
      font-weight: 500;
      font-size: 14px;
    }
  }

  > span {
    font-size: 14px;
    color: ${props => props.theme.colors.text_secondary};
    font-weight: 500;

  button {
    background-color: transparent;
    border: 0;
    color: ${props => props.theme.colors.primary};
    text-decoration: underline;
    font-size: 14px;
    font-weight: 500;
    cursor: pointer;
  }
}
`

export const QuestionList = styled.div`
  margin: 32px 0 8px;
`