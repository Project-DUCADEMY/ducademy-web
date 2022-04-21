import styled from 'styled-components'
import GroupsTable from './GroupsTable'
import SearchSpace from './SearchSpace'
import PlusButton from '../common/PlusButton'
import React, { useState, useEffect } from "react"
import { Link, useNavigate } from 'react-router-dom'
import ProblemList from "../Problems/ProblemList"
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

const Groups = ({forRegister}) => {
  const [sortedBy, setSortedBy] = useState(0);
  // const menus = ["최신순","조회수순"];
  const [menus, setMenus] = useState([
    {
      title: "전체",
      id: 0,
    },
    {
      title: "인기",
      id: 1,
    },
    {
      title: "최신",
      id: 1,
    },
    {
      title: "내 소속",
      id: 1,
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

      </M.NewQMenus>
			<ProblemList newQuestions={getProblems} forRegister={forRegister}/>
    </Main>
  )
}

export default Groups
