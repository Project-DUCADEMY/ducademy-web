import styled, { css } from 'styled-components'
import { ReactComponent as Delete } from './delete.svg'
import { ReactComponent as Create } from './create.svg'
import { ReactComponent as Edit } from './edit.svg'
import { useEffect } from 'react'

const Main = styled.div`
    height: 100%;
    width: 70px;
    overflow: visible;
`
const FunctionBoxContainer = styled.div`
    height: 70px;
    width: 200px;
    display: flex;
    right: 130px;
    position: relative;
    flex-direction: column;
    margin-top: 30px;

`
const EventHandleDiv = styled.div`
    height: 70px;
    width: 200px;
    cursor: pointer;
    z-index: 100;
`
const FunctionBox = styled.div`
    margin-top: 20px;
    width: 100%;
    height: 100%;
    background-color: ${({color}) => color};
    position: relative;
    transition: all 0.3s;
    cursor: pointer;
    opacity: 0.7;

    &:hover{
        transform : translateX(80px);
        opacity: 0.9;
    };
    border-radius: 20px;

`
const IconWrapper = styled.div`
    position: relative;
    left: 15px;
    top: 15px;
    float: right;
    z-index: -1;
`
const TextWrapper = styled.div`
    float: right;
    position: relative;
    right: 40px;
    top: 25px;
    z-index: -1;
`
const render = (props) => {
    return (
        <Main>
            <FunctionBoxContainer>
                <FunctionBox 
                    color={'blue'}
                >
                    <IconWrapper>
                        <Create/>
                    </IconWrapper>
                    <TextWrapper>
                        등록
                    </TextWrapper>
                    <EventHandleDiv/>
                </FunctionBox>
            </FunctionBoxContainer>
        </Main>
    )
}

export default render