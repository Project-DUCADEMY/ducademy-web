import styled,{css} from 'styled-components'
import { useState } from 'react'
import axios from 'axios'
const Box = styled.div`
  left: 50%;
  top: 50%;
  z-index: 1000;
  transform: translate(-50%, -50%);
  position: fixed;
  overflow: hidden;
  display: ${(props) => (props.visable ? "block" : "none")};
`;

const Container = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  row-gap: 10px;
`;
const InputTheme = styled.textarea`
  resize: none;
  box-sizing: border-box;
  padding: 12px 10px;
  width: 500px;
  height: 500px;
  font-size: 14px;
  background-color: ${({Color}) => Color};
  border: 0px;
  outline: none;
  transition: box-shadow ease-in-out 0.15s, border-color ease-in-out 0.15s;
  &:focus {
    box-shadow: 0 0 2px #c9c9c9;
    border-color: #bbb;
  }
    border-radius: 0 0 0 30px/45px;
`;
const Button = styled.button`
  width: 20%;
  height: 50px;
  margin: 10px;
  background-color: #fbfbfb;
  border: 1px solid #dcdcdc;
  box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
  font-size: 25px;
  font-weight: bold;
  display: flex;
  box-sizing: border-box;
  justify-content: center;
  align-items: center;
  position: relative;
  transition: background-color ease-in-out 0.15s, color ease-in-out 0.15s;
  &:hover {
    background-color: #cccccc;
  }
  cursor: pointer;
  border-radius: 10px;
`
const BottomContainer = styled.div`
    width: 500px;
    height: 100px;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    position: relative;
    bottom: 20px;
`
const ColorSelectorContainer = styled.div`
    height: 100px;
    width: 350px;
    display: flex;
    justify-content: space-evenly;
    align-items: center;
    flex-direction: row;
    cursor: pointer;

`
const ColorSelector = styled.div`
    background-color: ${({color}) => color};
    width: 40px;
    height: 40px;
    border-radius: 50%;
    border: ${({clicked}) => clicked ? 'solid black 3px' : ''};
    
`
const postitColorTheme = [
    '#FCF0AD',
    '#FFDF25',
    '#36A9CE',
    '#ff7eb9',
    '#CDDD73',
    '#AE86BC'
]

const Render = ({ visable, questionNumber, onSuccessMemoRegister }) => {
    const [getClickedColor, setClickedColor] = useState(0)
    const [getText, setText] = useState('')
    const RegisterMemo = () => {
        const Text = getText.replace(/\n/gi, '<br>')
        console.log(getText)
        axios.post('/memo/create', {
            content: Text,
            color: postitColorTheme[getClickedColor],
            questionNumber: questionNumber
        })
        .then((result) => {
            onSuccessMemoRegister()
            setClickedColor(0)
            setText('')
        })
        .catch(console.log)
    }
    return (
        <Box visable={visable}>
        <Container>
            <InputTheme Color={postitColorTheme[getClickedColor]} value={getText} onChange={(e) => setText(e.target.value)}/>
            <BottomContainer>
                <ColorSelectorContainer>
                {
                    postitColorTheme.map((element, idx) => {
                        return <ColorSelector 
                            key={idx}
                            clicked={getClickedColor === idx}
                            color={element}
                            onClick={() => {setClickedColor(idx)}}
                        />
                    })
                }
                </ColorSelectorContainer>
                <Button onClick={RegisterMemo}>등록</Button>
            </BottomContainer>
        </Container>
        </Box>
    );
};
export default Render;
