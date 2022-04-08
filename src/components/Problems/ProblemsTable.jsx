import styled from 'styled-components'
import dummy from '../../Dummy/Problems'
import axios from 'axios'
import { useEffect, useState } from 'react'
import { useNavigate  } from 'react-router-dom'

import { useSetRecoilState, useRecoilState } from 'recoil'
import problemNumber from '../../store/problem'
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
const TitleTh = styled(Th)`
	width: 40%;	
`
const TypeTh = styled(Th)`
	width: 20%;
`
const InfoTh = styled(Th)`
	width: 25%;
`
const Td = styled.td`
	padding: 5px;
	border: 1px solid #c5c5c5;
	height: 20px;
`
const Tr = styled.tr`
	height: 20px;
	&:hover{
		background-color: #AED581;
	}
	cursor: pointer;
	background-color: ${props => props.idx % 2 == 1 ? '#F9FFF9' : ''}
`
const ProblemsTable = (props) => {
	const [getProblems, setProblems] = useRecoilState(problems)
	const setProblemNumber = useSetRecoilState(problemNumber)
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
		setProblemNumber(idx)
		navigate({
			pathname: "/problem",
			state: {number: 1000}
		})
	}
	return (
		<Table>
	      <thead>
	        <Tr idx={1}>
	          	<NumberTh>번호</NumberTh>
	          	<TitleTh>제목</TitleTh>
	          	<TypeTh>유형</TypeTh>
	          	<InfoTh>정보</InfoTh>
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
export default ProblemsTable