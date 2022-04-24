import styled from "styled-components";

export const Wrapper = styled.section`
  background-color: #f4f4f4;
  min-height: 100vh;
  width: 100%;
  min-width: 800px;
  display: flex;
  flex-direction: column;
  align-items: center;
`;
export const QuestionWrapper = styled.div`
  width: 60%;
  min-width: 800px;
  /* min-height: 500px; */

  background-color: white;
  margin-top: 100px;
  border-radius: 20px;
  box-shadow: 4px 4px 15px 0px #0000001a;
  display: flex;
  flex-direction: column;
  padding: 50px 50px 40px 50px;
  box-sizing: border-box;

  @media (max-width: 1000px) {
    padding-right: 40px;
    padding-left: 40px;
  }
`;
export const QuestionContent = styled.article`
  > h2 {
    margin-top: 0px;
    /* padding:0px 85px 0px 85px; */
  }
  > p {
    /* padding:0px 85px 0px 85px; */
    line-height: 25px;
    word-spacing: 1px;
    letter-spacing: 0.3px;
  }
`;
export const QuestionInfo = styled.article`
  margin-top: 60px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  > div:nth-child(1) {
    display: flex;
    align-items: center;
    > div:nth-child(2) {
      margin-left: 20px;
    }
  }
`;

export const Category = styled.div`
  display: flex;
  align-items: center;
  position: relative;
  z-index: 5;
  > div {
    box-shadow: 4px 4px 15px 0px #0000001a;
    border-radius: 20px;
    padding: 6px 20px 6px 20px;
    font-size: 13px;
    min-width: 26px;
    cursor: pointer;
    :hover {
      color: white;
      background-color: #3fe2a6;
    }
  }
`;

export const AnswerContainer = styled.div`
  /* background-color:yellowgreen; */
  width: 100%;
  margin-bottom: 40px;
  float: right;
  > div {
    float: ${(props) => (props.isRight ? "right" : "left")};
    width: 60%;
    /* min-height:300px; */
    background-color: white;
    border-radius: 15px;
    box-shadow: 4px 4px 15px 0px #0000001a;
    /* padding:40px 40px 30px 40px; */
    padding: 30px 25px 30px 30px;
    box-sizing: border-box;
    display: flex;
    justify-content: space-between;
  }
`;

export const AnswerWrapper = styled.article`
  width: 60%;
  min-width: 800px;
  margin-top: 100px;
  margin-bottom: 100px;
`;

export const AnswerContentWrapper = styled.div`
  width: 100%;
  min-height: 90px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

export const AnswerContent = styled.p`
  margin: 0px;
  margin-bottom: 40px;
`;

export const AnswerInfo = styled.header`
  display: flex;
  justify-content: space-between;
  > div {
    font-size: 14px;
  }
`;

export const AnswerRecommand = styled.div`
  /* width:40px; */
  //가로 임시
  padding-left: 15px;
  margin-left: 20px;
  /* display:flex;
justify-content:center;
align-items:center; */
  border-left: solid #f4f4f4 2px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  div {
    margin: none;
    display: flex;
    flex-direction: column;
    * {
      cursor: pointer;
    }
  }
  .upArrow {
    transform: rotate(90deg);
    margin-bottom: 10px;
  }
  .downArrow {
    transform: rotate(270deg);
  }
`;

export const CommentInput = styled.textarea`
  resize: none;
  outline: none;
  padding: 18px 22px;
  box-sizing: border-box;
  margin-bottom: 20px;
  width: 400px;
  height: 150px;
  border: 1px solid #ccc;
  transition: box-shadow ease-in-out 0.15s, border-color ease-in-out 0.15s;
  &:focus {
    box-shadow: 0 0 2px #c9c9c9;
    border-color: #bbb;
  }
`
export const ConfirmButton = styled.button`
  width: 230px;
  height: 65px;
  border-radius: 30px;
  border: none;
  background-color: #3fe2a6;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 20px;
  cursor: pointer;
  transition: opacity ease-in-out 0.1s;
  color: white;
  margin: 10px auto;
  &:hover {
    opacity: 0.7;
  }
`;
