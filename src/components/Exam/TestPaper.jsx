import { useState } from 'react'
import styled, { css } from 'styled-components'

const Paper = styled.div`
    background-color: white;
    box-shadow: 4px 4px 15px 0px #0000001A;
    transform: rotate(${({Rotate}) => Rotate}deg);
    position: relative;
    width: 100%;
    height: 100%;
    bottom: ${({correction}) => correction}%;
    box-sizing: border-box;
    display: flex;
    flex-direction: column;
    row-gap: 10px;
    align-items: center;
    padding: 18px 22px;
`
const ExamContainer = styled.div`    
    cursor: pointer;
    max-width: 300px;
    max-height: 430px;
    min-width: 260px;
    min-height: 390px;
`
const TitleText = styled.span`
    font-weight: bold;
    font-size: 20px;
`
const AuthorText = styled.span`
    font-weight: 15px;
    margin-left: auto;
    margin-right: 5px;
`
const Render = (props) => {

    return (
        <ExamContainer
            onClick={() => {props.click[1](props.idx)}}
            myIdx={props.idx}
            click={props.click[0]}>
            <Paper Rotate={10} correction={0}></Paper>
            <Paper Rotate={-10} correction={100}></Paper>
            <Paper correction={200}>
                <TitleText>관음충의 발생학</TitleText>
                <AuthorText>윤지선</AuthorText>
            </Paper>
        </ExamContainer>
    )
}

export default Render
