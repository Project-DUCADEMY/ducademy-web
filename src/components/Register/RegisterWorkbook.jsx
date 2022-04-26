import { useState } from 'react'
import styled from 'styled-components'
import Problem from '../Problems/Problems'
import ProblemList from '../Problems/ProblemList'
import axios from 'axios'

const MainContainer = styled.div`
    width: 90%;
    margin-bottom: 70px;
    display: flex;
    flex-direction: column;
    justify-content: right;
`
const ComponentWrapper = styled.div`
    display: flex;
`
const SubmitWrapper = styled.div`
    display: flex;
    align-items: center;
    justify-content: right;
    position: relative;
    bottom: 100px;
    justify-content: space-around;
`
const ComponentContainer = styled.div`
    width: 50%;
    height: 100%;
    overflow: scroll;
    padding: 10px;
    display: flex;
    justify-content: center;
`
const LeftComponentContainer = styled(ComponentContainer)`
    padding-top: 135px;
`
const Input = styled.input`
    display: flex;
    padding-left: 10px;
    width: 40%;
    height: 50px;
    font-size: 20px;
    background-color: #ffffff;
    border: 1px solid #ccc;
    box-sizing: border-box;
    outline: none;
    transition: box-shadow ease-in-out .15s, border-color ease-in-out .15s;
    &:focus {
        box-shadow: 0 0 2px #c9c9c9;
        border-color: #bbb;
    }
`
const Button = styled.button`
	width: 100px;
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
    const [getWorkbookName, setWorkbookName] = useState('')
    const [getColor, setColor] = useState('')
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
            title: getWorkbookName,
            questionNumber: questionNumbers,
            color: getColor
        })
        .then(() => {alert("문제집 등록 성공")})
        .catch(() => {alert("문제집 등록 실패")})
    }
    return(
        <MainContainer>
            <ComponentWrapper>
                <LeftComponentContainer>
                    <ProblemList newQuestions={getProblems} forRegister={popProblemList}/>
                </LeftComponentContainer>
                <ComponentContainer>
                    <Problem fullSize={true} forRegister={pushProblemList} />
                </ComponentContainer>
                
            </ComponentWrapper>
            <SubmitWrapper>
                <Input placeholder="색" value={getColor} onChange={(e) => setColor(e.target.value)}/>
                <Input placeholder="문제집 이름" value={getWorkbookName} onChange={(e) => setWorkbookName(e.target.value)}/>
                <Button onClick={registerWorkbook}>등록</Button>
            </SubmitWrapper>
        </MainContainer>
    )
}
export default Render