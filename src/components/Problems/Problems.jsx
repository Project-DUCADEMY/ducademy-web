// 사용함
import styled from "styled-components"
import React, { useState, useEffect } from "react"
import { Link, useNavigate } from 'react-router-dom'
import ProblemList from "./ProblemList"
import * as M from "../../style/menu.style"
import search from "../../assets/image/q&aPage/search.svg"
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
`
const SearchWrapper = styled.div`
  display: flex;
  flex-direction: column;
`
const SearchContainer = styled.div`
	display: flex;
	box-sizing: border-box;
	border : 1px solid #dcdcdc;
	background-color: white;
	align-items: center;
	justify-content: right;
	padding-left: 10px;
	transition: box-shadow ease-in-out .15s, border-color ease-in-out .15s;
	input {
		width: 100%;
		font-size: 17px;
		border-radius: 15px;
		outline: none;
		border: none;
	}
	img {
		cursor: pointer;
		padding-right: 10px;
	}
`

const Problems = ({forRegister}) => {
  const [getSortedBy, setSortedBy] = useState('정렬');
  const [getType, setType] = useState(0)
  const [menus, setMenus] = useState([
    "전체",
    "저장",
    "오답",
    "유형"
  ]);
  const [subjects, setSubjects] = useState([
    '최신순',
    '오래된순',
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
              sortedBy={getType == idx ? true : false}
              onClick={() => {
                setType(idx);
              }}
            >
              {menu}
            </M.NewQMenuSorted>
          ))}
        </div>
        <SearchWrapper>
          <M.NewQMenuSubject onChange={(e) => setSortedBy(e.target.value)}>
            <option value={getSortedBy}>정렬</option>
            {subjects.map((subject, idx) => (
              <option key={idx}>{subject}</option>
            ))}
          </M.NewQMenuSubject>
          <SearchContainer>
            <input type="text" />
            <img src={search} />
          </SearchContainer>
        </SearchWrapper>
      </M.NewQMenus>
      <ProblemList newQuestions={getProblems} forRegister={forRegister} />
    </Main>
  )
}

export default Problems;
