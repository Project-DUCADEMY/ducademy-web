import React, { useState, useEffect } from "react";

import * as Q from "./QnAPage.style";

import arrow from "../../assets/image/q&aPage/arrow.svg"

import { useParams } from "react-router-dom";

import axios from 'axios';

const QnAPage = () => {
  const { number } = useParams();
  const [question, setQuestion] = useState({comment: []});
  const [comment, setComment] = useState('')
  useEffect(() => {
    axios.get(`/QnA/detail/?id=${number}`)
    .then(result => {
      setQuestion(result.data.QnA)
    })
    .catch(console.log)
  }, [])
  const CheckLoading = (param) => {
		if (param === undefined || param === null) {
			return ' '
		}
		else {
			return param
		}
	}
  const registerComment = () => {
    axios.post(`/QnA/registerComment/?id=${number}`, {
      content: comment
    })
    .then(result => {
      console.log(result)
      setQuestion(result.data.QnA)
    })
    .catch(console.log)
  }
  return (
    <Q.Wrapper>
    {/* <img src={arrow} /> */}
      <Q.QuestionWrapper>
        <article>
          <h2>{CheckLoading(question.title)}</h2>
          <p dangerouslySetInnerHTML={{__html: CheckLoading(question.content)}}></p>
        </article>
      </Q.QuestionWrapper>

      <Q.AnswerWrapper>
        {question.comment.map((answer, idx) => (
          <Q.AnswerContainer
            key={idx}
            isRight={idx % 2 == 0 ? true : false}
          >
            <div>
              <div>
                <Q.AnswerContent>{answer.content}</Q.AnswerContent>
                <Q.AnswerInfo>
                  <div>
                    <i>by&#9;</i>
                    {answer.name}
                  </div>
                  <div>{answer.time}</div>
                </Q.AnswerInfo>
              </div>
              <Q.AnswerRecommand>ㅎㅇ</Q.AnswerRecommand>
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
