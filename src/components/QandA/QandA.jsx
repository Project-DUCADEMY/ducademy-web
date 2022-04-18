import React, { useState, useEffect } from "react";
// import Q from "./QandA.style"
import * as Q from "./QandA.style";
import * as M from "../../style/menu.style"

import moreInfo from "../../assets/image/q&aPage/more.svg";
import search from "../../assets/image/q&aPage/search.svg";

import ProblemList from "../common/ProblemList";

import PlusButton from "../common/PlusButton";

// 60자로 해야함
const QandA = () => {
  // 더미----------------------------

  const [myQuestions, setMyQuestions] = useState([
    {
      id: 1,
      category: "국어",
      title: "국어시간 너무 잠옴",
      time: "Tue Apr 1 2022 09:44:35 GMT+0900 (대한민국 표준시)",
      new: true,
    },
    {
      id: 2,
      category: "파이썬",
      title: "잘하고싶다",
      time: "Tue Apr 1 2022 09:44:35 GMT+0900 (대한민국 표준시)",
      new: false,
    },
    {
      id: 3,
      category: "국어",
      title:
        "일일일일일일일일일일이이이이이이이이이이삼삼삼삼삼삼삼삼삼삼사사사사사사사사사사오오오오오오오오오오육육육육육육육육육육",
      time: "Tue Apr 1 2022 09:44:35 GMT+0900 (대한민국 표준시)",
      new: true,
    },
    {
      id: 4,
      category: "기타",
      title: "잘하고싶다",
      time: "Tue Apr 1 2022 09:44:35 GMT+0900 (대한민국 표준시)",
      new: false,
    },
    {
      id: 5,
      category: "파이썬",
      title: "잘하고싶다",
      time: "Tue Apr 1 2022 09:44:35 GMT+0900 (대한민국 표준시)",
      new: false,
    },
    {
      id: 6,
      category: "파이썬",
      title: "잘하고싶다",
      time: "Tue Apr 1 2022 09:44:35 GMT+0900 (대한민국 표준시)",
      new: false,
    },
    {
      id: 7,
      category: "파이썬",
      title: "잘하고싶다 아 이거 어케함 기모찡 하하하하하하하",
      time: "Tue Apr 1 2022 09:44:35 GMT+0900 (대한민국 표준시)",
      new: false,
    },
  ]);

  const [newQuestions, setNewQuestions] = useState([
    {
      id: 1,
      category: "수학",
      title:
        "일일일일일일일일일일이이이이이이이이이이삼삼삼삼삼삼삼삼삼삼사사사사사사사",
      comments: 4,
      writer: "codingbotPark",
      time: "Tue Apr 1 2022 09:44:35 GMT+0900 (대한민국 표준시)",
    },
    {
      id: 2,
      category: "과학",
      title: "원석쌤도 몰랐음",
      comments: 4,
      writer: "codingbotPark",
      time: "Tue Apr 12 2022 09:44:35 GMT+0900 (대한민국 표준시)",
    },
    {
      id: 3,
      category: "수학",
      title: "4의 n제곱근 중 실수 구하기",
      comments: 4,
      writer: "codingbotPark",
      time: "Tue Apr 12 2022 09:44:35 GMT+0900 (대한민국 표준시)",
    },
    {
      id: 4,
      category: "수학",
      title: "4의 n제곱근 중 실수 구하기",
      comments: 4,
      writer: "codingbotPark",
      time: "Tue Apr 12 2022 09:44:35 GMT+0900 (대한민국 표준시)",
    },
    {
      id: 5,
      category: "수학",
      title: "4의 n제곱근 중 실수 구하기",
      comments: 4,
      writer: "codingbotPark",
      time: "Tue Apr 12 2022 09:44:35 GMT+0900 (대한민국 표준시)",
    },
    {
      id: 6,
      category: "수학",
      title: "4의 n제곱근 중 실수 구하기",
      comments: 4,
      writer: "codingbotPark",
      time: "Tue Apr 12 2022 09:44:35 GMT+0900 (대한민국 표준시)",
    },
    {
      id: 7,
      category: "수학",
      title: "4의 n제곱근 중 실수 구하기",
      comments: 4,
      writer: "codingbotPark",
      time: "Tue Apr 12 2022 09:44:35 GMT+0900 (대한민국 표준시)",
    },
    {
      id: 8,
      category: "수학",
      title: "4의 n제곱근 중 실수 구하기",
      comments: 4,
      writer: "codingbotPark",
      time: "Tue Apr 12 2022 09:44:35 GMT+0900 (대한민국 표준시)",
    },
    {
      id: 9,
      category: "수학",
      title: "4의 n제곱근 중 실수 구하기",
      comments: 4,
      writer: "codingbotPark",
      time: "Tue Apr 12 2022 09:44:35 GMT+0900 (대한민국 표준시)",
    },
    {
      id: 10,
      category: "수학",
      title: "4의 n제곱근 중 실수 구하기",
      comments: 4,
      writer: "codingbotPark",
      time: "Tue Apr 12 2022 09:44:35 GMT+0900 (대한민국 표준시)",
    },
    {
      id: 11,
      category: "수학",
      title: "4의 n제곱근 중 실수 구하기",
      comments: 4,
      writer: "codingbotPark",
      time: "Tue Apr 12 2022 09:44:35 GMT+0900 (대한민국 표준시)",
    },
    {
      id: 12,
      category: "수학",
      title: "4의 n제곱근 중 실수 구하기",
      comments: 4,
      writer: "codingbotPark",
      time: "Tue Apr 12 2022 09:44:35 GMT+0900 (대한민국 표준시)",
    },
    {
      id: 13,
      category: "수학",
      title: "4의 n제곱근 중 실수 구하기",
      comments: 4,
      writer: "codingbotPark",
      time: "Tue Apr 12 2022 09:44:35 GMT+0900 (대한민국 표준시)",
    },
    {
      id: 14,
      category: "수학",
      title: "4의 n제곱근 중 실수 구하기",
      comments: 4,
      writer: "codingbotPark",
      time: "Tue Apr 12 2022 09:44:35 GMT+0900 (대한민국 표준시)",
    },
    {
      id: 15,
      category: "수학",
      title: "4의 n제곱근 중 실수 구하기",
      comments: 4,
      writer: "codingbotPark",
      time: "Tue Apr 12 2022 09:44:35 GMT+0900 (대한민국 표준시)",
    },
  ]);

  // 더미----------------------------

  function goToAnswer() {
    window.scrollTo({
      top: 450,
      behavior: "smooth",
    });
  }

  // 더미---------------------------- 위는 마이 아래는 뉴

  const [sortedBy, setSortedBy] = useState(0);
  // const menus = ["최신순","조회수순"];
  const [menus, setMenus] = useState([
    {
      title: "최신순",
      id: 0,
    },
    {
      title: "조회수순",
      id: 1,
    },
  ]);

  const [subjects, setSubjects] = useState([
    {
      id: 0,
      label: "일반교과",
      values: [{
        id:0,
        subject:"과학"
      },{
        id:1,
        subject:"수학"
      }],
    },
    {
      id: 1,
      label: "프로그래밍",
      values: [{
        id:0,
        subject:"파이썬",
      },{
        id:1,
        subject:"자바스크립트",
      }],
    },
  ]);

  function makeDate(time) {
    const tempTime = new Date(time);
    // console.log([
    //   tempTime.getFullYear(),
    //   tempTime.getMonth() + 1,
    //   tempTime.getDate(),
    // ]);
    // return [tempTime.getFullYear(),
    //   tempTime.getMonth()+1 < 10 ? "0"+tempTime.getMonth()+1: tempTime.getMonth()+1,tempTime.getDate()]
    return `
      ${tempTime.getFullYear()} / ${tempTime
      .getMonth()
      .toString()
      .padStart(2, "0")} / ${tempTime.getDate().toString().padStart(2, "0")}
    `;
  }

  const [searchValue,setSearchValue] = useState("")

  function changeSearchValue(value){
    setSearchValue(value)
  } 
  function searchThat(){
    console.log("서버통신",searchValue)
  }

  return (
    <>
    <PlusButton url="/질문추가"/>

    <Q.Container>
      <Q.Wrapper>
        <Q.temp />
        <Q.MyQContainer>
          <Q.MyQWrapper>
            <Q.tempMyQ />

            {myQuestions.map((myQ) => (
              <Q.MyQ key={myQ.id} isNew={myQ.new}>
                <section>
                  <h3>{myQ.title}</h3>
                </section>
                <Q.MyQFoot>
                  <Q.Category>
                    <div>{myQ.category}</div>
                  </Q.Category>
                  <Q.MyQFootMenu>{makeDate(myQ.time)}</Q.MyQFootMenu>
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

        <Q.BridgeQ>
              <h1>질문과 해설을 검색하세요</h1>
              <Q.SearchContainer>
                <input type="text" onChange={(e) => changeSearchValue(e.target.value)}/>
                <img src={search} onClick={searchThat}/>
              </Q.SearchContainer>
              <h2>도움을 주고 받을 수 있습니다</h2>
        </Q.BridgeQ>

        <Q.NewQContainer>
          <M.NewQMenus>
            <div>
              {menus.map((menu, idx) => (
                <M.NewQMenuSorted
                  key={idx}
                  sortedBy={sortedBy == idx ? true : false}
                  onClick={() => {
                    setSortedBy(idx)
                    goToAnswer()
                  }}
                >
                  {menu.title}
                </M.NewQMenuSorted>
              ))}
            </div>

            <M.NewQMenuSubject onChange={goToAnswer}>
              <option>모두</option>
              {subjects.map((subject) => (
                <optgroup key={subject.id} label={subject.label}>
                  {
                    (subject.values).map((subject) => (
                      <option 
                      key={subject.id}
                      >{subject.subject}</option>
                    ))
                  }
                </optgroup>
              ))}
            </M.NewQMenuSubject>
          </M.NewQMenus>

          <ProblemList newQuestions={newQuestions}/>
          {/* <Q.NewQWrapper>
            {newQuestions.map((newQ) => (
              <div key={newQ.id}>
                <Q.NewQListMenu>
                  <Q.Category>
                    <div>{newQ.category}</div>
                  </Q.Category>
                  <Q.NewQTitle>{newQ.title}</Q.NewQTitle>
                </Q.NewQListMenu>

                <Q.NewQListInfo>
                  <Q.NewQInfoWriter>{newQ.writer}</Q.NewQInfoWriter>
                  <Q.NewQInfoDate>{makeDate(newQ.time)}</Q.NewQInfoDate>
                </Q.NewQListInfo>
              </div>
            ))}
          </Q.NewQWrapper> */}
        </Q.NewQContainer>


      </Q.Wrapper>
    </Q.Container>

    </>
  );
};

export default QandA;
