// 사용함

import styled from "styled-components"
import React, { useState, useEffect } from "react"
import { Link, useNavigate } from 'react-router-dom'
import ProblemList from "./ProblemList"
import * as M from "../../style/menu.style"
import axios from 'axios'
import problems from '../../store/problems'
import { useRecoilState } from 'recoil'

const Main = styled.div`
  width: ${({fullSize}) => fullSize? 95 : 70}%;
  margin-top: 30px;
  display: flex;
  flex-direction: column;
  align-content: center;
  align-items: center;
`;

const MainWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  height: 100%;
`;

const Problems = ({forRegister}) => {
  const [sortedBy, setSortedBy] = useState(0);
  // const menus = ["최신순","조회수순"];
  const [menus, setMenus] = useState([
    {
      title: "전체",
      id: 0,
    },
    {
      title: "저장",
      id: 1,
    },
    {
      title: "오답",
      id: 1,
    },
    {
      title: "유형",
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

  const [getProblems, setProblems] = useRecoilState(problems)
	useEffect(() => {
		axios.get('/problem/problems')
		.then(response => {
			setProblems(response.data.questionInfo)
      console.log(response.data.questionInfo)
		})
		.catch(error => console.log(error))
	}, [])

  return (
    <Main fullSize={forRegister}>
      {/* <SearchSpace /> */}
      <M.NewQMenus>
        <div>
          {menus.map((menu, idx) => (
            <M.NewQMenuSorted
              key={idx}
              sortedBy={sortedBy == idx ? true : false}
              onClick={() => {
                setSortedBy(idx);
              }}
            >
              {menu.title}
            </M.NewQMenuSorted>
          ))}
        </div>

        <M.NewQMenuSubject>
          <option>모두</option>
          {subjects.map((subject) => (
            <optgroup key={subject.id} label={subject.label}>
              {subject.values.map((subject) => (
                <option key={subject.id}>{subject.subject}</option>
              ))}
            </optgroup>
          ))}
        </M.NewQMenuSubject>
      </M.NewQMenus>
			<ProblemList newQuestions={getProblems} forRegister={forRegister}/>
    </Main>
  )
}

export default Problems;
