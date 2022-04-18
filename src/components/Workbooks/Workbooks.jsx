import styled from 'styled-components'
import Workbook from './Workbook'
import { palette } from '../../style/palette'
import PlusButton from "../common/PlusButton";

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
	width: 70%;
	margin: 20px 0px 20px 0px;
	padding: 18px 22px;
	row-gap: 20px;
	background-color: #fbfbfb;
	border : 1px solid #dcdcdc;
	box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
	justify-content: space-evenly;
	box-sizing: border-box;
`
const themes = [palette.theme1, palette.theme2, palette.theme3, palette.theme4, palette.theme5, palette.theme6]
const Workbooks = () => {
	return (
		<Main>
			<PlusButton url="/문제집추가"/>
			<h1>문제집</h1>
			<BookShelf>
				<Workbook color={themes[0]}/>
				<Workbook color={themes[1]}/>
				<Workbook color={themes[2]}/>
				<Workbook color={themes[3]}/>
				<Workbook color={themes[4]}/>
				<Workbook color={themes[5]}/>
				<Workbook color={themes[0]}/>
				<Workbook color={themes[0]}/>
				<Workbook color={themes[0]}/>
			</BookShelf>
		</Main>
	)
}

export default Workbooks;