import React, { useState } from "react";

import * as Q from "./QnAPage.style";

import arrow from "../../assets/image/q&aPage/arrow.svg"

const QnAPage = () => {
  const [question, setQuestion] = useState({
    title: "두카미 친구들 눈을 보고 얘기합시다",
    content:
      "고등학교2학년 1학기 로그 문제들인데 너무 쉽네요 님들ㅇ도 풀어보셈 ㅎㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋ 하하하하",
  });

  const [answers, setAnswers] = useState([
    {
      id: 0,
      userId: "병관선생",
      content:
        "이걸 못품? ㄹㅇ 김건호 이어폰 낀다고 못듣는거 이해하지만 버즈 빼버리고싶다",
      time: "Tue Apr 12 2022 09:44:35 GMT+0900 (대한민국 표준시)",
    },
    {
      id: 1,
      userId: "병관선생",
      content:
        "이걸 못품? ㄹㅇ 김건호 이어폰 낀다고 못듣는거 이해하지만 버즈 빼버리고싶다",
      time: "Tue Apr 12 2022 09:44:35 GMT+0900 (대한민국 표준시)",
    },
    {
      id: 2,
      userId: "병관선생",
      content:
        "이걸 못품? ㄹㅇ 김건호 이어폰 낀다고 못듣는거 이해하지만 버즈 빼버리고싶다 이거 길이 얼마나 길어도 ㄱㄴ 한가 모르겠네 ㅋㅋㄹㄹ ",
      time: "Tue Apr 12 2022 09:44:35 GMT+0900 (대한민국 표준시)",
    },
  ]);

  return (
    <Q.Wrapper>
    <img src={arrow} />
      <Q.QuestionWrapper>
        <article>
          <h2>{question.title}</h2>
          <p>{question.content}</p>
        </article>
      </Q.QuestionWrapper>

      <Q.AnswerWrapper>
        {answers.map((answer, idx) => (
          <Q.AnswerContainer
            key={answer.id}
            isRight={idx % 2 == 0 ? true : false}
          >
            <div>
              <div>
                <Q.AnswerContent>{answer.content}</Q.AnswerContent>
                <Q.AnswerInfo>
                  <div>
                    <i>by&#9;</i>
                    {answer.userId}
                  </div>
                  <div>{answer.time}</div>
                </Q.AnswerInfo>
              </div>
              <Q.AnswerRecommand>ㅎㅇ</Q.AnswerRecommand>
            </div>
          </Q.AnswerContainer>
        ))}
      </Q.AnswerWrapper>
    </Q.Wrapper>
  );
};

export default QnAPage;
