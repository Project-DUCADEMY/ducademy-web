import styled from 'styled-components'
import Workbook from './Workbook'
import { useEffect, useState } from 'react'
import { palette } from '../../style/palette'
import PlusButton from "../common/PlusButton"
import axios from 'axios'

const Main = styled.div`
	width: 100%;
	height: 100vh - 75px;
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: center;
	background-color: white;
	margin-top: 30px;
`
const BookShelf = styled.div`
	display: flex;
	flex-wrap: wrap;
	width: 80%;
	margin: 20px 0px 20px 0px;
	padding: 30px 15px;
	row-gap: 30px;
	background-color: #fbfbfb;
	border : 1px solid #dcdcdc;
	box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
	justify-content: space-evenly;
	box-sizing: border-box;
`
const themes = [palette.theme1, palette.theme2, palette.theme3, palette.theme4, palette.theme5, palette.theme6]
const Workbooks = () => {
	const [getWorkbooks, setWorkbooks] = useState([])
	useEffect(() => {
		axios.get('/workbook/list')
		.then((result) => {
			setWorkbooks(result.data.workBookAllList)
			console.log(result.data.workBookAllList)
		})
		.catch(console.log)
	}, [])

	
	return (
		<Main>
			<PlusButton url="/registerWorkbook"/>
			<h1>문제집</h1>
			<BookShelf>
				{
					getWorkbooks.map((element, idx) => {
						return <Workbook
							key={idx}
							color={themes[5]}
							owner={element.owner}
							title={element.title}
						>
						</Workbook>
					})
				}
			</BookShelf>
		</Main>
	)
}

export default Workbooks;