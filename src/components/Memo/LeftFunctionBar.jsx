import styled, { css } from 'styled-components'
import { ReactComponent as Delete } from './delete.svg'
import { ReactComponent as Create } from './create.svg'
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
    width: 100%;
    height: 100%;
    background-color: ${({color}) => color};
    position: relative;
    transition: all 0.3s;
    cursor: pointer;
    opacity: 0.6;
    ${({isDragOver}) => isDragOver ? 
    css`
        transform : translateX(-80px);
        opacity: 0.9;
    `: null}

    &:hover{
        transform : translateX(-80px);
        opacity: 0.9;
    };
    border-radius: 20px;

`
const IconWrapper = styled.div`
    position: relative;
    left: 15px;
    top: 15px;
    float: left;
    z-index: -1;
`
const TextWrapper = styled.div`
    float: right;
    clear: both;
    position: relative;
    right: 70px;
    bottom: 17px;
    z-index: -1;
`
const render = (props) => {
    return (
        <Main>
            <FunctionBoxContainer>
                <FunctionBox 
                    color={'red'}
                    onDragEnter={() => {
                        props.DragOver[1]('삭제')
                    }}
                    onDragLeave={() => {
                        props.DragOver[1]('')
                    }}
                    isDragOver={props.DragOver[0] === '삭제'}
                >
                    <IconWrapper>
                        <Delete
                            fill={"#222222"}
                        />
                    </IconWrapper>
                    <TextWrapper>
                        삭제
                    </TextWrapper>
                    <EventHandleDiv/>
                </FunctionBox>
            </FunctionBoxContainer>
        </Main>
    )
}

export default render