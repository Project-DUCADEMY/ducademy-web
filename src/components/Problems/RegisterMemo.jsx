import styled,{css} from 'styled-components'
import { useState } from 'react'
const Box = styled.div`
  background-color: #fbfbfb;
  border: 1px solid black;
  box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
  display: flex;
  box-sizing: border-box;
  justify-content: center;
  word-break: break-all;
  flex-wrap: wrap;
`;
const Memo = styled.div`
  width: 50%;
  height: 70%;
  left: 50%;
  top: 50%;
  z-index: 1000;
  transform: translate(-50%, -50%);
  position: absolute;
  right: 15px;
  background: #fff44f;
  overflow: hidden;
  inset: 0 -40px 40px rgba(0, 0, 0, 0.2), 0 5px 6px 5px rgba(0, 0, 0, 0.2);
  font-family: "Permanent Marker", cursive;
  font-size: 19px;
  color: #130d6b;
  transition: transform 0.4s;
  padding: 20px;
  border-radius: 0 0 0 30px/45px;
  opacity: ${({ Dragged }) => (Dragged ? 0 : 1)};
  box-shadow: 4px 4px 15px 0px rgba(0, 0, 0, 0.4);

  &:before {
    content: "";
    display: block;
    position: absolute;
    width: 20px;
    height: 25px;
    background: #ffa;
    box-shadow: 3px -2px 10px rgba(0, 0, 0, 0.1), inset 15px -15px 15px rgba(0, 0, 0, 0.3);
    left: 0;
    bottom: 0;
    z-index: 2;
    transform: skewX(25deg);
  }

  display: ${(props) => (props.visable ? "block" : "none")};
`;

const Main = styled(Box)`
  position: absolute;
  ${({ r, g, b }) => {
    return `background-color: rgb(${r == "" ? 255 : r}, ${g == "" ? 255 : g}, ${
      b == "" ? 255 : b
    })`;
  }};
  width: 50%;
  height: 70%;
  left: 50%;
  top: 50%;
  z-index: 1000;
  overflow: auto;
  outline: 0;
  transform: translate(-50%, -50%);
  /* translate(calc(-50% + 50px), calc(-50% + 50px)); */
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
const RGBContainer = styled.div`
  width: 100%;
  height: 10%;
  display: flex;
  justify-content: center;
`;
const RGBWrapper = styled.div`
  width: 40%;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  row-gap: 10px;
`;
const RGBColor = styled.div`
  width: 20px;
  height: 20px;
  background-color: ${(props) => props.color};
  border-radius: 50%;
`;
const RGBInput = styled.input`
  box-sizing: border-box;
  display: flex;
  text-align: center;
  width: 50%;
  height: 50%;
  font-size: 20px;
  background-color: #ffffff;
  border: 1px solid #ccc;
  outline: none;
  transition: box-shadow ease-in-out 0.15s, border-color ease-in-out 0.15s;
  &:focus {
    box-shadow: 0 0 2px #c9c9c9;
    border-color: #bbb;
  }
`;
const InputTheme = styled.textarea`
  resize: none;
  box-sizing: border-box;
  padding: 12px 10px;
  width: 80%;
  height: 80%;
  font-size: 14px;
  background-color: #fff44f;
  border: 0px;
  outline: none;
  transition: box-shadow ease-in-out 0.15s, border-color ease-in-out 0.15s;
  &:focus {
    box-shadow: 0 0 2px #c9c9c9;
    border-color: #bbb;
  }
`;
const BoxText = styled.h2`
  text-align: center;
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
`;

const Render = ({ visable }) => {
  const [red, setRed] = useState("");
  const [green, setGreen] = useState("");
  const [blue, setBlue] = useState("");
  const onChangeRed = (e) => {
    setRed(e.target.value);
  };
  const onChangeGreen = (e) => {
    setGreen(e.target.value);
  };
  const onChangeBlue = (e) => {
    setBlue(e.target.value);
  };
  return (
    <Memo visable={visable} r={red} g={green} b={blue}>
      <Container>
        <BoxText>메모 등록</BoxText>
        <InputTheme />
        {/* <RGBContainer>
                    <RGBWrapper>
                        <RGBColor color={'red'}></RGBColor>
                        <RGBInput type="number" value={(red > 255 ? 255 : red < 0 ? 0 : red)} onChange={onChangeRed}/>
                    </RGBWrapper>
                    <RGBWrapper>
                        <RGBColor color={'limegreen'}></RGBColor>
                        <RGBInput type="number" value={green > 255 ? 255 : green < 0 ? 0 : green} onChange={onChangeGreen}/>
                    </RGBWrapper>
                    <RGBWrapper>
                        <RGBColor color={'blue'}></RGBColor>
                        <RGBInput type="number" value={blue > 255 ? 255 : blue < 0 ? 0 : blue} onChange={onChangeBlue}/>
                    </RGBWrapper>
                </RGBContainer> */}
        <Button>등록</Button>
      </Container>
    </Memo>
  );
};
export default Render;
