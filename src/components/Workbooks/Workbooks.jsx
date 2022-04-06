import styled from 'styled-components'
import Workbook from './Workbook'
import { palette } from '../../style/palette'
const Background = styled.div`
	width: 100%;
	height: 100vh - 52px;
	display: flex;
	align-items: center;
	justify-content: center;
	background-color: white;
	margin-top: 52px;
`

const BookShelf = styled.div`
	display: flex;
	flex-wrap: wrap;
	width: 70%;
	margin: 20px 0px 20px 0px;
	padding: 18px 22px;
	row-gap: 20px;
	justify-content: space-evenly;
	box-sizing: border-box;
	border: 1px solid black;
`

const themes = [palette.theme1, palette.theme2, palette.theme3, palette.theme4, palette.theme5, palette.theme6]
const Workbooks = () => {
	return (
		<Background>
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
		</Background>
	)
}

export default Workbooks;