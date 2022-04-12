import styled from 'styled-components'
import SearchSpace from './SearchSpace'
import Memo from './Memo'

import { ReactComponent as TrashCanOpen } from './TrashCanOpen.svg'
import { ReactComponent as TrashCanClose } from './TrashCanClose.svg'
import { ReactComponent as Pen } from './Pen.svg'

import axios from 'axios'
import { useEffect, useState } from 'react'

const Main = styled.div	`
	margin-top: 75px;
	width: 70%;
	display: flex;
	flex-direction: column;
    align-content: center;
    align-items: center;
`
const MainWrapper = styled.div	`
	display:flex;
	flex-direction: column;
	align-items: center;
	height: 1200px;
`
const CorkBoard = styled.div`
	margin-top: 10px;
	width: 1100px;
	height: 745px;
	min-height: 100%;
	background-size: auto;
	background-image: url('./CorkBoard.png');
	background-size: contain;
	display: flex;
	justify-content: center;
	align-items: center;

`
const MemoContainer = styled.div`
	width: 1000px;
	height: 700px;
	display: flex;
	flex-wrap: wrap; 
	gap: 20px;


`
const FunctionWrapper = styled.div`
	display: flex;
	width: 1500px;
	align-items: flex-end;
	justify-content: space-evenly;
`
const PenWrapper = styled.div`
	width: 100px;
`

const dummy = [1,1,1,1,1,1,1,1,1,1,1,1]
const rand = (min, max) => {
	return Math.floor(Math.random() * (max - min + 1)) + min;
}
const Memos = () => {
	const [getTrashCanHover, setTrashCanHover] = useState(false)
	// useEffect(() => {
	// 	console.log(getTrashCanHover)
	// }, [getTrashCanHover])
	return (
		<MainWrapper>
			<Main>
				<SearchSpace/>
				<FunctionWrapper>
					{/* <PenWrapper>
						<Pen/>
					</PenWrapper> */}
					<CorkBoard>
						<MemoContainer>
						{
							dummy.map((element) => {
								return <Memo 
									Size={150}
									Tilt={rand(-10, 10)}
								></Memo>
							})
						}
						</MemoContainer>
					</CorkBoard>
					{/* {
						getTrashCanHover ? 
						<TrashCanOpen onMouseEnter={() => {setTrashCanHover(true)}} onMouseLeave={() => {setTrashCanHover(false)}}/>
						:<TrashCanClose onMouseEnter={() => {setTrashCanHover(true)}} onMouseLeave={() => {setTrashCanHover(false)}}/>
					} */}
				</FunctionWrapper>
			</Main>

		</MainWrapper>
	)
}

export default Memos;