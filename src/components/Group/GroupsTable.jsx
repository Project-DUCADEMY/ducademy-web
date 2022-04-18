import styled from 'styled-components'
import axios from 'axios'
import { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'

import { useSetRecoilState, useRecoilState } from 'recoil'
import problems from '../../store/problems'

const Table = styled.table`
	width: 100%;
	border-collapse: collapse;
`
const Th = styled.th`
	border: 2px solid #c5c5c5;
`
const NumberTh = styled(Th)`
	width: 15%;
`
const MakerTh = styled(Th)`
	width: 15%;	
`
const TitleTh = styled(Th)`
	width: 50%;
`
const PeopleTh = styled(Th)`
	width: 20%;
`
const Td = styled.td`
	padding: 5px 15px;
	border: 1px solid #c5c5c5;
	height: 20px;
`
const Tr = styled.tr`
    height: 20px;
    background-color: ${props => props.idx % 2 == 1 ? '#F9FFF9' : ''};
    cursor: pointer;
	&:hover{
        background-color: #AED581;
	}
`

const GroupsTable = (props) => {
	const [getProblems, setProblems] = useRecoilState(problems)
	useEffect(() => {
		axios.get('/problem/problems')
		.then(response => {
			setProblems(response.data.questionInfo)
			// console.log(response.data.questionInfo)
		})
		.catch(error => console.log(error))
	}, [])
	const navigate = useNavigate();
	const problemClick = (idx) => {
		navigate(`/problem/${idx}`)
	}
	return (
		<Table>
	      <thead>
	        <Tr idx={1}>
	          	<NumberTh>번호</NumberTh>
	          	<MakerTh>창설자</MakerTh>
	          	<TitleTh>그룹명</TitleTh>
	          	<PeopleTh>인원</PeopleTh>
	        </Tr>
	      </thead>
	      <tbody>
	      {
	      	getProblems.map((element, idx) => {
	      		return (
		      		<Tr key={idx} idx={idx}  onClick={() => {problemClick(element.questionNumber)}}>
		      			<Td>{element.questionNumber}</Td>
			         	<Td>{element.title}</Td>
			         	<Td></Td>
			         	<Td></Td>
			        </Tr>
	      		)
	      	})
	      }
	      </tbody>
	    </Table>
	)
}
export default GroupsTable