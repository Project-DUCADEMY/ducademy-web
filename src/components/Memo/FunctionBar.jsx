import styled from 'styled-components'
const Main = styled.div`
    height: 100%;
    width: 70px;
    overflow: visible;
`
const FunctionBoxContainer = styled.div`
    height: 100%;
    display: flex;
    position: relative;
    flex-direction: column;
`
const FunctionBox = styled.div`
    width: 200px;
    height: 70px;
    background-color: red;
    position: relative;
    margin-top: 30px;
    transition: all 0.3s;
    cursor: pointer;
    &:hover{
        transform : translateX(-100px);
    }
    border-radius: 20px;
`

const render = () => {
    return (
        <Main>
            <FunctionBoxContainer>
                <FunctionBox/>
                <FunctionBox/>
                <FunctionBox/>
            </FunctionBoxContainer>
        </Main>
    )
}

export default render