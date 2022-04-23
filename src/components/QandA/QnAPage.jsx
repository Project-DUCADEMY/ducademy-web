import React, { useState } from "react";
import { useSetRecoilState } from "recoil";
import { selected } from "../../store/qna";

// import * as Q from "./QnAPage.style";
import * as Q from "./QnAPage.style"

import arrow from "../../assets/image/q&aPage/arrow.svg";
import { useNavigate } from "react-router-dom";

const QnAPage = () => {
  const [question, setQuestion] = useState({
    title: "두카미 친구들 눈을 보고 얘기합시다",
    userId: "병관학생",
    content:
      "고등학교2학년 1학기 로그 문제들인데 너무 쉽네요 님들ㅇ도 풀어보셈 ㅎㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋ 하하하하 나는 지금 청송입니다, 가족여행을 왔죠 하ㅏ하하하하",
    category: "기타",
    time: "Tue Apr 12 2022 09:44:35 GMT+0900 (대한민국 표준시)",

  });

  const [answers, setAnswers] = useState([
    {
      id: 0,
      userId: "병관선생",
      content: "이걸 못품?",
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

  function makeDate(time) {
    const tempTime = new Date(time);
    return `
      ${tempTime.getFullYear()} / ${tempTime
      .getMonth()
      .toString()
      .padStart(2, "0")} / ${tempTime.getDate().toString().padStart(2, "0")}
    `;
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
          <p>{question.content}</p>
        </Q.QuestionContent>
        <Q.QuestionInfo>
          <div>
            <Q.Category onClick={() => selectCategory(question.category)}>
              <div>{question.category}</div>
            </Q.Category>
            <div>
              <i>by&#9;</i>
              {question.userId}
            </div>
          </div>
          <div>
              {makeDate(question.time)}
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
                  <div>{makeDate(answer.time)}</div>
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
      {/* <Q.CommentInput value={comment} onChange={(e) => setComment(e.target.value)}/>
      <Q.ConfirmButton onClick={registerComment}>등록</Q.ConfirmButton> */}
    </Q.Wrapper>
  );
};

export default QnAPage;
