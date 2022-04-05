import styled from 'styled-components'
import Workbook from './Workbook'
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
const Workbooks = () => {
	return (
		<Background>
			<BookShelf>
				<Workbook/>
				<Workbook/>
				<Workbook/>
				<Workbook/>
				<Workbook/>
				<Workbook/>
				<Workbook/>
				<Workbook/>
				<Workbook/>
			</BookShelf>
		</Background>
	)
}

export default Workbooks;