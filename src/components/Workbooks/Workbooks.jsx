import styled from 'styled-components'
import * as M from "../../style/menu.style"
import search from "../../assets/image/q&aPage/search.svg"
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
const MainWrapper = styled.div`
	width: 80%;
`
const MenuBar = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  div {
	display: flex;
  }
`
const SearchContainer = styled.div`
	display: flex;
	box-sizing: border-box;
	border-radius :10px;
	border: none;
	box-shadow: 4px 4px 15px 0px #0000001a;
	background-color: white;
	align-items: center;
	justify-content: right;
	width: 35%;
	padding-left: 10px;
	transition: box-shadow ease-in-out .15s, border-color ease-in-out .15s;
	input {
		width: 100%;
		font-size: 17px;
		border-radius: 15px;
		outline: none;
		border: none;
	}
	img {
		cursor: pointer;
		padding-right: 10px;
	}
`
const BookShelf = styled.div`
	display: flex;
	flex-wrap: wrap;
	width: 100%;
	margin: 0px 0px 20px 0px;
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
	const [sortedBy, setSortedBy] = useState(0);
	const [menus, setMenus] = useState([
		{
		  title: "전체",
		  id: 0,
		},
		{
		  title: "저장",
		  id: 1,
		},
		{
		  title: "오답",
		  id: 1,
		},
		{
		  title: "유형",
		  id: 1,
		},
	  ]);
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
			<PlusButton url="/registerWorkbook" />
			<MainWrapper>
				<MenuBar>
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
					<SearchContainer>
						<input type="text" />
						<img src={search} />
					</SearchContainer>
				</MenuBar>
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
			</MainWrapper>
		</Main>
	)
}

export default Workbooks;