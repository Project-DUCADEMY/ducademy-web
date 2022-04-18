import styled from "styled-components"
import React, { useState, useEffect } from "react"
import { Link, useNavigate } from 'react-router-dom'
import ProblemList from "./ProblemList"
import * as M from "../../style/menu.style"
import axios from 'axios'
import problems from '../../store/problems'
import { useRecoilState } from 'recoil'

const StyledLink = styled(Link)`
  margin-top: 20px;
  width: 20%;
  color: #222222;
  text-decoration: none;
`
const Background = styled.div`
  width: 100%;
  height: 100vh - 75px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background-color: white;
  margin-top: 75px;
`
const ButtonWrapper = styled.div`
  width: 100%;
  display: flex;
	justify-content: right;
`
const Button = styled.button`
	height: 50px;
	background-color: #fbfbfb;
	border : 1px solid #dcdcdc;
	box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
	font-size: 20px;
	font-weight: bold;
	display: flex;
	box-sizing: border-box;
	justify-content: center;
	align-items: center;
	position: relative;
  text-decoration: none;
	transition: background-color ease-in-out .15s, color ease-in-out .15s;
	&:hover {
		background-color: #cccccc;
	}
	cursor: pointer;
`


const Main = styled.div`
  width: 70%;
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

const Problems = () => {
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
  const [getProblems, setProblems] = useRecoilState(problems)
	useEffect(() => {
		axios.get('/problem/problems')
		.then(response => {
			setProblems(response.data.questionInfo)
		})
		.catch(error => console.log(error))
	}, [])

  return (
    <Main>
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
      <ProblemList newQuestions={getProblems} />
      <ButtonWrapper><StyledLink to='/resister'><Button>문제 등록</Button></StyledLink></ButtonWrapper>
    </Main>
  )
}

export default Problems;
