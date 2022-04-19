import styled, { css } from 'styled-components'
import { ReactComponent as Delete } from './../../assets/image/memo/delete.svg'
import { ReactComponent as Option } from './../../assets/image/memo/option.svg'
import { ReactComponent as Search } from './../../assets/image/memo/search.svg'
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
const FunctionBox = styled.div`
    width: 100%;
    height: 70px;
    background-color: ${({color}) => color};
    position: relative;
    transition: all 0.3s;
    cursor: pointer;
    opacity: 0.9;
    transform : translateX(80px);
    border-radius: 20px;
`
const OpctionBox = styled(FunctionBox)`
    height: 500px;
    min-height: 
`
const IconWrapper = styled.div`
    position: relative;
    right: 15px;
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
const OptionBar = styled.select`
    float: right;
    position: relative;
    top: 50%;
    right: -20%;
    width: 50%;
`
const Render = (props) => {
    const [getClickSearch, setClickSearch] = useState(false)
    return (
        <Main>
            <FunctionBoxContainer>
                <FunctionBox 
                    color={'blue'}
                >
                    <IconWrapper>
                        <Search/>
                    </IconWrapper>
                    <TextWrapper>
                        검색
                    </TextWrapper>
                </FunctionBox>
                <OpctionBox 
                    color={'blue'}
                >
                    <IconWrapper>
                        <Option/>
                    </IconWrapper>
                    <TextWrapper>
                        옵션
                    </TextWrapper>
                    <OptionBar>
                        <option>1</option>
                        <option>2</option>
                        <option>3</option>
                        <option>4</option>
                    </OptionBar>
                </OpctionBox>
            </FunctionBoxContainer>
        </Main>
    )
}

export default Render