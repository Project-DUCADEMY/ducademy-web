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
`
const ExamContainer = styled.div`    
    cursor: pointer;
    width: 300px;
    height: 430px;
`
const Render = (props) => {

    return (
        <ExamContainer
            onClick={() => {props.click[1](props.idx)}}
            myIdx={props.idx}
            click={props.click[0]}>
            <Paper Rotate={10} correction={0}></Paper>
            <Paper Rotate={-10} correction={100}></Paper>
            <Paper correction={200}></Paper>
        </ExamContainer>
    )
}

export default Render
