import styled from 'styled-components'
import axios from 'axios'
import { useEffect } from 'react'
import { useRecoilValue } from 'recoil'
import problemNumber from '../../store/problem'
const Test = styled.div`
	background-color: black;
	width: 100px;
	height: 100px;
`
const Render = (props) => {
	const getProblemNumber = useRecoilValue(problemNumber)
	useEffect(() => {
		axios.get(`/problem/problem/?id=${getProblemNumber}`)
		.then(response => {
			console.log(response.data.question)
		})
		.catch(error => console.log(error))
	},[getProblemNumber])
	return (
		<Test></Test>
	)
}
export default Render;