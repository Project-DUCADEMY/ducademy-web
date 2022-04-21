import { useState } from 'react'
import styled from 'styled-components'
import Problem from '../Problems/Problems'
import ProblemList from '../Problems/ProblemList'
import axios from 'axios'

const MainContainer = styled.div`
    width: 90%;
    height: calc(100vh - 150px);
    display: flex;
    margin-top: 25px;
    justify-content: space-around;
`
const ComponentWrapper = styled.div`
    display: flex;
    flex-direction: column;
`
const ComponentContainer = styled.div`
    width: 50%;
    height: 100%;
    overflow: scroll;
    display: flex;
    justify-content: center;
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
const Button = styled.button`
	width: 20%;
	height: 50px;
    margin: 10px;
	background-color: #fbfbfb;
	border : 1px solid #dcdcdc;
	box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
	font-size: 25px;
	font-weight: bold;
	display: flex;
	box-sizing: border-box;
	justify-content: center;
	align-items: center;
	position: relative;
	transition: background-color ease-in-out .15s, color ease-in-out .15s;
	&:hover {
		background-color: #cccccc;
	}
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
            <ComponentContainer>
                <Problem fullSize={true} forRegister={pushProblemList} />
            </ComponentContainer>
            <Button onClick={registerWorkbook}>등록</Button>
        </MainContainer>
    )
}
export default Render