import styled from 'styled-components'
import { useState, useEffect } from 'react'
import Memo from './Memo'
const Main = styled.div`
    width: 100%;
    height: 100%;
    background-color: white;
    z-index: 1;
    border: 20px solid grey;
    border-radius: 10px;
`
const MemoContainer = styled.div`
	width: 100%;

	display: flex;
	flex-wrap: wrap; 
	gap: 20px;
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

const rand = (min, max) => { return Math.floor(Math.random() * (max - min + 1)) + min; }
const Render =(props) => {
    const [getMemos, setMemos] = useState([{},{},{},{},{},{},{},{},{},{},{},{}])
	const [getDragOn, setDragOn] = useState(null)
    const getDragOver = props.getDragOver
    const [getModalOpen, setModalOpen] = useState(null)
    useEffect(() => {
		let temp = [...getMemos]
		temp.forEach((element, idx) => {
			temp[idx].tilt = rand(-10, 10)
		})
		setMemos(temp)
	}, [])
    return <Main>
        <MemoContainer>
		<ModalOverlay visable={getModalOpen} onClick={() => {setModalOpen(null)}}/>
        {
            getMemos.map((element, idx) => {
                return <Memo
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
    </Main>
}
export default Render;