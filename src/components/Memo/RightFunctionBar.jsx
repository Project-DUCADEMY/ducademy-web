import styled, { css } from 'styled-components'
import { ReactComponent as Delete } from './delete.svg'
import { ReactComponent as Create } from './create.svg'
import { ReactComponent as Search } from './search.svg'
import { useEffect, useState } from 'react'

const Main = styled.div`
    height: 100%;
    width: 70px;
    overflow: visible;
`
const FunctionBoxContainer = styled.div`
    height: 100%;
    width: 200px;
    display: flex;
    right: 130px;
    position: relative;
    flex-direction: column;
    gap: 20px;

`
const EventHandleDiv = styled.div`
    height: 70px;
    width: 200px;
    cursor: pointer;
    z-index: 100;
`
const FunctionBox = styled.div`
    width: 100%;
    height: 70px;
    background-color: ${({color}) => color};
    position: relative;
    transition: all 0.3s;
    cursor: pointer;
    opacity: 0.7;
    ${({getClickSearch}) => getClickSearch ? 
    css`
        opacity: 0.9;
        transform : translateX(80px);
    `:
    css`
        &:hover{
            opacity: 0.9;
            transform : translateX(80px);
        };
    `}

    border-radius: 20px;
`
const OpctionBox = styled(FunctionBox)`
    ${({getClickOpction}) => getClickOpction ? 
    css`
        height: 85%;
        opacity: 0.9;
        transform : translateX(80px);
    `:
    css`
        &:hover{
            height: 85%;
            opacity: 0.9;
            transform : translateX(80px);
        };
    `}
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
const Render = (props) => {
    const [getClickSearch, setClickSearch] = useState(false)
    const [getClickOpction, setClickOpction] = useState(false)
    return (
        <Main>
            <FunctionBoxContainer>
                <FunctionBox 
                    color={'blue'}
                    getClickSearch={getClickSearch}
                    onClick={() => setClickSearch(!getClickSearch)}
                >
                    <IconWrapper>
                        <Search/>
                    </IconWrapper>
                    <TextWrapper>
                        검색
                    </TextWrapper>
                    <EventHandleDiv/>
                </FunctionBox>
                <OpctionBox 
                    color={'blue'}
                    getClickOpction={getClickOpction}
                    onClick={() => setClickOpction(!getClickOpction)}
                >
                    <IconWrapper>
                        <Create/>
                    </IconWrapper>
                    <TextWrapper>
                        검색
                    </TextWrapper>
                    <EventHandleDiv/>
                </OpctionBox>
            </FunctionBoxContainer>
        </Main>
    )
}

export default Render