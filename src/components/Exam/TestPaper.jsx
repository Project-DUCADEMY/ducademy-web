import { useState } from 'react'
import styled, { css } from 'styled-components'

const Paper = styled.div`
    background-color: white;
    box-shadow: 4px 4px 15px 0px #0000001A;
    position: absolute;
    width: 90%;
    height: 90%;
    transform: rotate(${({Rotate}) => Rotate}deg);
`
const ExamContainer = styled.div`    
    cursor: pointer;
    ${({click, myIdx}) => {

        return click === null ? css`
            width: 300px;
            height: 420px;
        `:
        click === myIdx ? css`
            width: 70%;
            height: 100%;
            transition: all, 0.3s;
        `:
        css`
            transition: transform, 2s;
            transform: translateY(-1000%);
        `
    }}
    
`
const Render = (props) => {

    return (
        <ExamContainer
            onClick={() => {props.click[1](props.idx)}}
            myIdx={props.idx}
            click={props.click[0]}>
            <Paper Rotate={10}></Paper>
            <Paper Rotate={-10}></Paper>
            <Paper></Paper>
        </ExamContainer>
    )
}

export default Render
