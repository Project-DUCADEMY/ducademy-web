import React, { useState, useEffect } from "react";
import { useRecoilState } from "recoil";
import { selected } from "../../store/qna";

// import Q from "./QandA.style"
import * as Q from "./QandA.style";
import * as M from "../../style/menu.style";

import moreInfo from "../../assets/image/q&aPage/more.svg";
import search from "../../assets/image/q&aPage/search.svg";

import ProblemList from "./ProblemList";

import PlusButton from "../common/PlusButton";
import { Link, Navigate, useNavigate } from "react-router-dom";

import axios from "axios";

// 60자로 해야함
const QandA = () => {
  // 더미----------------------------

  const [searchValue, setSearchValue] = useState("");
  useEffect(() => {
    axios.get(`/QnA/allList/?query=${searchValue}`)
    .then((result) => {
      setNewQuestions(result.data.QnAList)
    })
    .catch(console.log)
  }, [searchValue])

  useEffect(() => {
    axios.get(`/QnA/recent/`)
    .then((result) => {
      setMyQuestions(result.data.QnAList)
    })
    .catch(console.log)
  }, [])

  const [myQuestions, setMyQuestions] = useState([]);
  const [newQuestions, setNewQuestions] = useState([]);
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
      values: [
        {
          id: 0,
          subject: "과학",
        },
        {
          id: 1,
          subject: "수학",
        },
      ],
    },
    {
      id: 1,
      label: "프로그래밍",
      values: [
        {
          id: 0,
          subject: "파이썬",
        },
        {
          id: 1,
          subject: "자바스크립트",
        },
      ],
    },
  ]);

  // ----------- 더미

  // 현재 선택 된 정렬방식
  const [sortedBy, setSortedBy] = useState(0);
  // 현재 선택된 옵션
  const [selectedSubject, setSelectedSubject] = useRecoilState(selected);

  function goToAnswer() {
    window.scrollTo({
      top: 450,
      behavior: "smooth",
    });
  }

  useEffect(() => {
    console.log("selected가 바뀜", selectedSubject);
  }, [selectedSubject]);

  function makeDate(time) {
    const tempTime = new Date(time);
    return `
      ${tempTime.getFullYear()} / ${tempTime.getMonth().toString().padStart(2, "0")} / ${tempTime
      .getDate()
      .toString()
      .padStart(2, "0")}
    `;
  }


  function changeSearchValue(value) {
    setSearchValue(value);
  }
  function searchThat() {
    console.log("서버통신", searchValue);
  }

  const [hover, setHover] = useState(false);

  const nevigate = useNavigate();
  function clickMyQ(objectId, category) {
    if (hover) {
      setSelectedSubject(category);
      goToAnswer();
    } else {
      nevigate(`/QandA/${objectId}`);
    }
  }

  // 이 함수 때문에 goToAnswer함수가 두 번 실행되는 걸 알지만
  // QnA 확인 페이지에서 카테고리를 누르고 이동 했을 때를 위해 사용
  useEffect(() => {
    if (selectedSubject != "모두"){
      goToAnswer();
    }
  }, [selectedSubject]);

  return (
    <>
      <PlusButton url="/registerQuestion" />

      <Q.Container>
        <Q.Wrapper>
          <Q.temp />
          <Q.MyQContainer>
            <Q.MyQWrapper>
              <Q.tempMyQ />
              {myQuestions.map((myQ, idx) => (
                
                <Q.MyQ
                  key={idx}
                  isNew={myQ.new}
                  onClick={() => clickMyQ(myQ._id, myQ.category)}
                >
                  <section>
                    <h3>{myQ.title}</h3>
                  </section>
                  <Q.MyQFoot>
                    <Q.Category
                      onMouseOver={() => setHover(true)}
                      onMouseOut={() => setHover(false)}
                    >
                      <div>{myQ.category}</div>
                    </Q.Category>
                    <Q.MyQFootMenu>{makeDate(myQ.day)}</Q.MyQFootMenu>
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
              <input type="text" onChange={(e) => changeSearchValue(e.target.value)} />
              <img src={search} onClick={searchThat} />
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
                      setSortedBy(idx);
                      goToAnswer();
                    }}
                  >
                    {menu.title}
                  </M.NewQMenuSorted>
                ))}
              </div>

              <M.NewQMenuSubject
                onChange={(e) => {
                  goToAnswer();
                  setSelectedSubject(e.target.value);
                }}
                value={selectedSubject}
              >
                <option value="모두">모두</option>
                <option value="기타">기타</option>
                {subjects.map((subject) => (
                  <optgroup key={subject.id} label={subject.label}>
                    {subject.values.map((subject) => (
                      <option value={subject.subject} key={subject.id}>
                        {subject.subject}
                      </option>
                    ))}
                  </optgroup>
                ))}
              </M.NewQMenuSubject>
            </M.NewQMenus>

            <ProblemList
              newQuestions={newQuestions}
              hover={hover}
              setHover={setHover}
              setSelectedSubject={setSelectedSubject}
              goToAnswer={goToAnswer}
            />
          </Q.NewQContainer>
        </Q.Wrapper>
      </Q.Container>
    </>
  );
};

export default QandA;
