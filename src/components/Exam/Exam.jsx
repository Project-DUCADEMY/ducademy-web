import { useEffect, useState } from 'react'
import styled from 'styled-components'
import TestPaper from './TestPaper'
import PlusButton from "../common/PlusButton";
import * as M from "../../style/menu.style"
import search from "../../assets/image/q&aPage/search.svg"

const Main = styled.div`
    position: relative;
    width: 100%;
    display: flex;
    justify-content: center;
`
const TestPaperContainer = styled.div`
    display: flex;
    flex-wrap: wrap;
    gap: 100px;
    position: relative;
    top: 100px;
    width: 80%;
    height: 120vh;
    justify-content: center;
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

const Render = () => {
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
    const [getClickTestPaper, setClickPaper] = useState(null)
    const Test = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12]
    // useEffect(() => {
    //     console.log(getClickTestPaper)
    // }, [getClickTestPaper])
    return (
        <Main>
            <PlusButton url="/시험추가"/>
            <TestPaperContainer>
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
                {
                    Test.map((element, idx) => {
                        return <TestPaper
                            key={idx}
                            idx={idx + 1}
                            click={[getClickTestPaper, setClickPaper]}
                        />
                    })
                }
            </TestPaperContainer>
        </Main>
    )
}

export default Render
