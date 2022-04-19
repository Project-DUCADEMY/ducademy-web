import styled from 'styled-components'
const Main = styled.div`
    width: 400px;
    height: 400px;
    background-color:black;
    box-sizing: border-box;
    position: absolute;
    width: 18vh;
    height: 18vh;
    left: 50%;
    top: 50%;
    z-index: 1000;
    overflow: auto;
    outline: 0;
    transform: rotate(0deg) scale(3)
    translate(calc(-50% + 50px), calc(-50% + 50px));
    display: ${(props) => (props.visable ? 'block' : 'none')};
    z-index: 1000;
`
const Render = ({visable}) => {
    return(
        <Main visable={visable}></Main>
    )
}
export default Render;