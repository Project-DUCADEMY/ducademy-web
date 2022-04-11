import styled from 'styled-components'
import axios from 'axios'
import { useEffect } from 'react'
import {	route } from "react-router";


const Test = styled.div`
	background-color: black;
	width: 100px;
	height: 100px;
`
const Render = ({location}) => {
	const param = document.location.href.split('/')[document.location.href.split('/').length - 1];
	useEffect(() => {
		axios.get(`/problem/problem/?id=${param}`)
		.then(response => {
			console.log(response.data.question)
		})
		.catch(error => console.log(error))
	},[])
	return (
		<Test></Test>
	)
}
export default Render;