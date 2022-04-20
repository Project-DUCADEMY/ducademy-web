import { useState } from 'react'
import styled from 'styled-components'
import Problem from '../Problems/Problems'
import ProblemList from '../Problems/ProblemList'
import axios from 'axios'

const ComponentContainer = styled.div`
    width: 50%;
    height: 100%;
    overflow: scroll;
    display: flex;
    justify-content: center;
`
const MainContainer = styled.div`
    width: 90%;
    height: calc(100vh - 150px);
    display: flex;
    margin-top: 25px;
    justify-content: space-around;
`
const OKbutton = styled.div`
    border-radius: 100%;
    width: 50px;
    height: 50px;
    background-color: green;
    margin: 0 auto;
    position: absolute;
    z-index: 1;
    cursor: pointer;
    
`
const Render = () => {
    const [getProblems, setProblems] = useState([])
    const pushProblemList = (problem) => {
        if(!getProblems.includes(problem)) {
            let temp = [...getProblems]
            temp.push(problem) 
            setProblems(temp)  
        }
    }
    const popProblemList = (problem) => {
        let temp = [...getProblems]
        temp = temp.filter((item) => {
            return item.questionNumber !== problem.questionNumber
        })
        setProblems(temp)
    }
    const registerWorkbook = () => {
        let questionNumbers = []
        getProblems.forEach((element) => {
            questionNumbers.push({id: element.questionNumber})
        })
        console.log(questionNumbers)
        axios.post('/workbook/create', {
            title: "test",
            questionNumber: questionNumbers
        })
        .then(console.log)
        .catch(console.log)
    }
    return(
        <MainContainer>
            <ComponentContainer>
                <ProblemList newQuestions={getProblems} forRegister={popProblemList}/>
            </ComponentContainer>
            <OKbutton onClick={registerWorkbook}/>
            <ComponentContainer>
                <Problem fullSize={true} forRegister={pushProblemList} />
            </ComponentContainer>
        </MainContainer>
    )
}
export default Render