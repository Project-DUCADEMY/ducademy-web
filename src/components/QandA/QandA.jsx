import React, { useState, useEffect } from "react";
// import Q from "./QandA.style"
import * as Q from "./QandA.style";

import moreInfo from "../../assets/image/q&aPage/more.svg";
import chatting from "../../assets/image/q&aPage/chatting.svg";

// 60자로 해야함
const QandA = () => {
  // 더미----------------------------

  const [myQuestions, setMyQuestions] = useState([
    {
      id: 1,
      category: "국어",
      title: "국어시간 너무 잠옴",
      // comment:"아 저는 김건호의 노역에 시달리고 있습니다ㅋㅋㅋ 대소흠 아이디어좀 바꾸자",
      댓글: 4,
    },
    {
      id: 2,
      category: "파이썬",
      title: "잘하고싶다",
      // comment:"아 저는 김건호의 노역에 시달리고 있습니다ㅋㅋㅋ 대소흠 아이디어좀 바꾸자 안녕하세요 박성한 너무 귀엽다 앞에서 go언ㅇ어 하이요 박병관 안녕하세요 하하하하하하 아니 정말 성한이 ㅎㅇㅎㅇㅎㅇㅎㅇ 야이씨 왜 안되냐 하앙아아아아 아 제발 돼라라라라라라ㅏㄹ 아앙 ㅎㅎㅎㅎㅎㅎㅎㅎㅎㅎㅎㅎㅎㅎㅎㅎㅎㅎㅎㅎㅎㅎㅎㅎㅎㅎㅎㅎㅎ",
      댓글: 4,
    },
    {
      id: 3,
      category: "국어",
      title: "일일일일일일일일일일이이이이이이이이이이삼삼삼삼삼삼삼삼삼삼사사사사사사사사사사오오오오오오오오오오육육육육육육육육육육",
      // comment:"아 저는 김건호의 노역에 시달리고 있습니다ㅋㅋㅋ 대소흠 아이디어좀 바꾸자",
      댓글: 4,
    },
    {
      id: 4,
      category: "기타",
      title: "잘하고싶다",
      // comment:"아 저는 김건호의 노역에 시달리고 있습니다ㅋㅋㅋ 대소흠 아이디어좀 ",
      댓글: 4,
    },
    {
      id: 5,
      category: "파이썬",
      title: "잘하고싶다",
      // comment:"아 저는 김건호의 노역에 시달리고 있습니다ㅋㅋㅋ 대소흠 아이디어좀 바꾸자",
      댓글: 4,
    },
    {
      id: 6,
      category: "파이썬",
      title: "잘하고싶다",
      // comment:"아 저는 김건호의 노역에 시달리고 있습니다ㅋㅋㅋ 대소흠 아이디어좀 바꾸자",
      댓글: 4,
    },
    {
      id: 7,
      category: "파이썬",
      title: "잘하고싶다 아 이거 어케함 기모찡 하하하하하하하",
      // comment:"아 저는 김건호의 노역에 시달리고 있습니다ㅋㅋㅋ 대소흠 아이디어좀 바꾸자 ",
      댓글: 4,
    },
  ]);

  const [newQuestions, setNewQuestions] = useState([
    {
      id: 1,
      category: "수학",
      title: "이거 모르겠음 어케품?",
    },
    {
      id: 2,
      category: "과학",
      title: "원석쌤도 몰랐음",
      댓글: 4,
    },
    {
      id: 3,
      category: "수학",
      title: "4의 n제곱근 중 실수 구하기",
      댓글: 4,
    },
    {
      id: 4,
      category: "수학",
      title: "4의 n제곱근 중 실수 구하기",
      댓글: 4,
    },
    {
      id: 5,
      category: "수학",
      title: "4의 n제곱근 중 실수 구하기",
      댓글: 4,
    },
    {
      id: 6,
      category: "수학",
      title: "4의 n제곱근 중 실수 구하기",
      댓글: 4,
    },
    {
      id: 7,
      category: "수학",
      title: "4의 n제곱근 중 실수 구하기",
      댓글: 4,
    },
  ]);

  // 더미----------------------------

  function goToAnswer(){
    window.scrollTo({
        top:400,
        behavior:"smooth"
    })
    console.log("ㅎㅇ")
  }

  return (
    <Q.Container>
      <Q.temp />
      <Q.Wrapper>
        <Q.MyQContainer>
          <Q.MyQWrapper>
            <Q.tempMyQ />

            {myQuestions.map((myQ) => (
              <Q.MyQ key={myQ.id}>
                <section>
                <h3>{myQ.title}</h3>
                </section>
                <Q.MyQFoot>
                  <Q.Category>
                  <div>{myQ.category}</div>
                  </Q.Category>
                <Q.MyQFootMenu>

                </Q.MyQFootMenu>
                </Q.MyQFoot>
              </Q.MyQ>
            ))}

            <Q.PlusCard onClick={goToAnswer}>
              <p>당신의 문제를 다 해결했으면 이제 도와줄 차례입니다</p>
              <img src={moreInfo} />
            </Q.PlusCard>
            <Q.tempMyQ />
          </Q.MyQWrapper>
        </Q.MyQContainer>
        
        <Q.NewQContainer>
            <Q.NewQMenu>
              <div>최신순</div>
              <div>조회수순</div>
            </Q.NewQMenu>
            <Q.NewQWrapper>
              {
                newQuestions.map((newQ) => (
                  <div key={newQ.id}>
                    {newQ.title}
                  </div>
                ))
              }
            </Q.NewQWrapper>
        </Q.NewQContainer>

      </Q.Wrapper>
    </Q.Container>
  );
};

export default QandA;
