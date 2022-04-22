import styled from 'styled-components'
import { useState, useEffect } from 'react'
import Memo from './Memo'
const Main = styled.div`
    width: 100%;
    height: 100%;
    min-width: 1000px;
    background-color: white;
    z-index: 1;
    border: 20px solid grey;
    border-radius: 20px;
    overflow-y: scroll;
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
  z-index: 1000;
`

const rand = (min, max) => { return Math.floor(Math.random() * (max - min + 1)) + min; }
const Render =(props) => {
	const [getDragOn, setDragOn] = useState(null)
    const [getTilt, setTilt] = useState([])
    const [getModalOpen, setModalOpen] = useState(null)
    const getDragOver = props.getDragOver
    useEffect(() => {
		let temp = new Array(props.getMemos.length)
        temp.length = props.getMemos.length
        for(let i = 0; i < props.getMemos.length; i++) {
            temp[i] = rand(-10, 10)
        }
		setTilt(temp)
	}, [props.getMemos])
    return <Main>
        <MemoContainer>
		<ModalOverlay visable={getModalOpen} onClick={() => {setModalOpen(null)}}/>
        {
                props.getMemos.map((element, idx) => {
                return <Memo
                    Tilt={getTilt[idx]}
                    Modal={[getModalOpen, setModalOpen]}
                    Drag={[getDragOn, setDragOn]}
                    DragOver={getDragOver}
                    DragMemo={props.DragMemo}
                    Idx={idx + 1}
                    key={idx + 1}
                    draggable={true}
                    info={element}
                >
                </Memo>
            })
        }
        </MemoContainer>
    </Main>
}
export default Render;