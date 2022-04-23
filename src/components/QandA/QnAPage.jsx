import React, { useEffect, useState } from "react";
import { useSetRecoilState } from "recoil";
import { selected } from "../../store/qna";
import { useParams } from "react-router-dom";

// import * as Q from "./QnAPage.style";
import * as Q from "./QnAPage.style"

import arrow from "../../assets/image/q&aPage/arrow.svg";
import { useNavigate } from "react-router-dom";
import axios from "axios";

const QnAPage = () => {
  const { number } = useParams()
  const [question, setQuestion] = useState({comment: []});
  const [comment, setComment] = useState('')

  useEffect(() => {
    axios.get(`/QnA/detail?id=${number}`)
    .then(result => {
      console.log(result.data.QnA)
      setQuestion(result.data.QnA)
    })
    .catch(console.log)
  }, [])

  function makeDate(time) {
    const tempTime = new Date(time);
    return `
      ${tempTime.getFullYear()} / ${tempTime
      .getMonth()
      .toString()
      .padStart(2, "0")} / ${tempTime.getDate().toString().padStart(2, "0")}
    `;
  }

  const registerComment = () => {
    axios.post(`/QnA/registerComment?id=${number}`, {
      content: comment
    })
    .then(result => {
      setQuestion(result.data.QnA)
    })
    .catch(console.log)
    setComment('')
  }

  // Qestion에 있는 카테고리를 클릭했을 때 selectedSubject변경
  const setSelectedSubject = useSetRecoilState(selected);
  const navigate = useNavigate();
  function selectCategory(category){
    setSelectedSubject(category);
    navigate("/QandA")
  }

  return (
    <Q.Wrapper>
      <Q.QuestionWrapper>
        <Q.QuestionContent>
          <h2>{question.title}</h2>
          <div dangerouslySetInnerHTML={{__html: question.content }}></div>
        </Q.QuestionContent>
        <Q.QuestionInfo>
          <div>
            <Q.Category onClick={() => selectCategory(question.category)}>
              <div>{question.category}</div>
            </Q.Category>
            <div>
              <i>by&#9;</i>
              {question.creator}
            </div>
          </div>
          <div>
              {makeDate(question.day)}
          </div>
        </Q.QuestionInfo>
      </Q.QuestionWrapper>

      <Q.AnswerWrapper>
        {question.comment.map((answer, idx) => (
          <Q.AnswerContainer
            key={idx}
            isRight={idx % 2 == 0 ? true : false}
          >
            <div>
              <Q.AnswerContentWrapper>
                <Q.AnswerContent>{answer.content}</Q.AnswerContent>
                <Q.AnswerInfo>
                  <div>
                    <i>by&#9;</i>
                    {answer.name}
                  </div>
                  <div>{makeDate(answer.date)}</div>
                </Q.AnswerInfo>
              </Q.AnswerContentWrapper>
              <Q.AnswerRecommand>
                <div>
                  <img src={arrow} className="upArrow" />
                  <img src={arrow} className="downArrow" />
                </div>
              </Q.AnswerRecommand>
            </div>
          </Q.AnswerContainer>
        ))}
      </Q.AnswerWrapper>
      <Q.CommentInput value={comment} onChange={(e) => setComment(e.target.value)}/>
      <Q.ConfirmButton onClick={registerComment}>등록</Q.ConfirmButton>
    </Q.Wrapper>
  );
};

export default QnAPage;
