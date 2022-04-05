import styled from 'styled-components'
import Workbook from './Workbook'

const Background = styled.div`
	width: 100%;
	height: (100vh - 52px);
	display: flex;
	align-items: center;
	justify-content: center;
	background-color: white;
	margin-top: 52px;
`
const BookShelf = styled.div`
	display: flex;
	justify-content: space-evenly;
	flex-direction: row;
	flex-wrap: wrap;
	box-sizing: border-box;
	padding: 18px 22px;
	width: 700px;
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
			</BookShelf>
		</Background>
	)
}

export default Workbooks;