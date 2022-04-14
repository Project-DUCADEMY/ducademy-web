import styled from 'styled-components'
import SearchSpace from './SearchSpace'
import Memo from './Memo'
import LeftFunctionBar from './LeftFunctionBar'



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
	height: 730px;
	background-size: auto;
	background-image: url('./CorkBoard.png');
	background-size: contain;
	display: flex;
	justify-content: center;
	align-items: center;
	z-index: 1;

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
	width: 1200px;
	align-items: flex-end;
	justify-content: space-evenly;
`
const PenWrapper = styled.div`
	width: 100px;
`

const ModalOverlay = styled.div`
  box-sizing: border-box;
  display: ${(props) => (props.visable ? 'block' : 'none')};
  position: fixed;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  background-color: rgba(0, 0, 0, 0.6);
  z-index: 100;
`


const rand = (min, max) => {
	return Math.floor(Math.random() * (max - min + 1)) + min;
}
const Memos = () => {
	const [getTrashCanHover, setTrashCanHover] = useState(false)
	const [getModalOpen, setModalOpen] = useState(null)
	const [getDragOn, setDragOn] = useState(null)
	const [getDragOver, setDragOver] = useState('')
	const [getMemos, setMemos] = useState([{},{},{},{},{},{},{},{},{},{},{},{}])

	useEffect(() => {
		let temp = [...getMemos]
		temp.forEach((element, idx) => {
			temp[idx].tilt = rand(-10, 10)
		})
		setMemos(temp)
	}, [])
	
	return (
		<MainWrapper>
			<Main>
				<SearchSpace/>
				<FunctionWrapper>
					<LeftFunctionBar DragOver={[getDragOver, setDragOver]}/>
					<CorkBoard>
						<ModalOverlay visable={getModalOpen} onClick={() => {setModalOpen(null)}}/>
						<MemoContainer>
						{
							getMemos.map((element, idx) => {
								return <Memo
									Size={150}
									Tilt={element.tilt}
									Modal={[getModalOpen, setModalOpen]}
									Drag={[getDragOn, setDragOn]}
									DragOver={getDragOver}
									Idx={idx + 1}
									key={idx + 1}
									draggable={true} 	
								></Memo>
							})
						}
						</MemoContainer>
					</CorkBoard>
				</FunctionWrapper>
			</Main>
			
		</MainWrapper>
	)
}

export default Memos;