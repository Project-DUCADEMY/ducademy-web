import styled, { css } from 'styled-components'
import { ReactComponent as Delete } from './../../assets/image/memo/delete.svg'
import { ReactComponent as Edit } from './../../assets/image/memo/edit.svg'
import { ReactComponent as Search } from './../../assets/image/memo/search.svg'
import { useEffect } from 'react'

const Main = styled.div`
    height: 100%;
    width: 70px;
    overflow: visible;
`
const FunctionBoxContainer = styled.div`
    height: 100%;
    width: 200px;
    display: flex;
    position: relative;
    bottom: 20px;
    flex-direction: column;
    justify-content: center;
    gap: 20px;
    cursor: default;

`
const FunctionBox = styled.div`
    width: 100%;
    height: 70px;
    background-color: ${({color}) => color};
    position: relative;
    transition: all 0.3s;
    opacity: 0.7;
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
    position: relative;
    right: 70px;
    top: 25px;
    z-index: -1;
`
const SearchContainer = styled.input`
    height: 30px;
    width:100px;
    font-size:17px;
    border-radius:15px;
    padding-left:30px;
    outline:none;
    border:none;
    margin-top: 18px;
    margin-left: 25px;
`
const SearchBox = styled(FunctionBox)`
    width: 120%;
    cursor: pointer;
    &:hover{
        transform : translateX(-120px);
        opacity: 0.9;
    };
`
const render = (props) => {
    return (
        <Main>
            <FunctionBoxContainer>
                <SearchBox 
                    color={'blue'}
                    onDragEnter={() => {
                        props.DragOver[1]('등록')
                    }}
                    onDragLeave={() => {
                        props.DragOver[1]('')
                    }}
                    isDragOver={props.DragOver[0] === '등록'}
                >
                    <IconWrapper>
                        <Search/>
                    </IconWrapper>
                    <SearchContainer>
                        {/* <input type="text" onChange={(e) => changeSearchValue(e.target.value)}/>
                        <img src={search} onClick={searchThat}/> */}
                    </SearchContainer>
                </SearchBox>
                <FunctionBox 
                    color={'green'}
                    onDragEnter={() => {
                        props.DragOver[1]('수정')
                    }}
                    onDragLeave={() => {
                        props.DragOver[1]('')
                    }}
                    isDragOver={props.DragOver[0] === '수정'}
                >
                    <IconWrapper>
                        <Edit/>
                    </IconWrapper>
                    <TextWrapper>
                        수정
                    </TextWrapper>
                </FunctionBox>
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
                        <Delete/>
                    </IconWrapper>
                    <TextWrapper>
                        삭제
                    </TextWrapper>
                </FunctionBox>
            </FunctionBoxContainer>
        </Main>
    )
}

export default render