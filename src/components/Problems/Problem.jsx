import styled, {css} from 'styled-components'
import axios from 'axios'
import { useEffect, useState } from 'react'
import { route, useParams } from "react-router";
import { useRecoilValue } from 'recoil';
import RegisterMemo from './RegisterMemo'
import userData from '../../store/userData';
import { useNavigate } from "react-router-dom";
const Main = styled.div`
  	width: 80%;
	display: flex;
	justify-content: center;
	background-color: rgb(255, 255, 255);
	margin-top: 30px;
	padding-top: 50px;
	margin-bottom: 100px;
`

const Wrapper = styled.div`
	box-sizing: border-box;
	padding-bottom: 10px;
	width: 80%;
	position: relative;
	display: flex;
	flex-direction: column;
	row-gap: 30px;
`
const BoxWrapper = styled.div`
	display: flex;
	flex-direction: column;
`
const ButtonWrapper = styled(BoxWrapper)`
	justify-content: right;
	flex-direction: row;
	column-gap: 20px;
`
const Button = styled.button`
	width: 50px;
	height: 50px;
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
const MemoButton = styled(Button)`
	
`

const LikeButton = styled(Button)`
	font-size: 20px;
`
const BookMarkButton = styled(Button)`
	color: ${props => props.Yellow ? "yellow" : "#fbfbfb"};
	-webkit-text-stroke-width: 2px;
	-webkit-text-stroke-color: black;
	transition: background-color ease-in-out .15s, color ease-in-out .15s;
	&:hover {
		color: ${props => props.Yellow ? "#c4c42c" : "#cccccc"}
	}
`

const Box = styled.div`
	width: 100%;
	background-color: #fbfbfb;
	border : 1px solid #dcdcdc;
	box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
	padding: 18px 22px;
	display: flex;
	box-sizing: border-box;
	justify-content: center;
	align-items: center;
	position: relative;
	word-break: break-all;
	flex-wrap: wrap;
`

const BoxText = styled.h2`
	
`
const TitleBox = styled(Box)`
	display: flex;
	flex-direction: column;
`
const TitleNumber = styled.h1`
	font-size: 40px;
`
const TitleName = styled.h2`
	font-size: 30px;
`

const InfoBox = styled(Box)`
	display: flex;
	justify-content: space-evenly;
`

const InfoItem = styled.div`
	display: flex;
	flex-direction: column;
	align-items: center;
	row-gap: 5px;
`
const InfoHead = styled.div`
	font-weight: bold;
`
const InfoBody = styled.div`
`

const MainBox = styled(Box)`
	justify-content: flex-start;
	display: block;
`
const RecommendBox = styled(Box)`
	justify-content: flex-start;
`
const Submit = styled.input`
  box-sizing: border-box;
  padding: 18px 22px;
  width: 100%;
  font-size: 20px;
  background-color: #ffffff;
  border: 1px solid #ccc;
  outline: none;
  transition: box-shadow ease-in-out .15s, border-color ease-in-out .15s;
  &:focus {
    box-shadow: 0 0 2px #c9c9c9;
    border-color: #bbb;
  }
`
const SubmitButton = styled.button`
	width: 200px;
	height: 60px;
	border-radius: 15px;
	border: none;
	background-color: #3fe2a6;
	display: flex;
	align-items: center;
	justify-content: center;
	font-size: 20px;
	cursor: pointer;
	transition: opacity ease-in-out .1s;
	color : white;
	margin: 0px auto;
	margin-top: 45px;
	&:hover {
		opacity: 0.7;
	}
`
const CategoryCore = styled.div`
	background-color: ${({color}) => color};
	height: 30px;
	min-width: 70px;
	border-radius: 3px;
	line-height: 30px;
	text-align: center;
`
const CategoryContainer = styled(Box)`
	display: flex;
    flex-direction: row;
    justify-content: flex-start;
    align-items: center;
	color: white;
	gap: 10px;

`

const ModalOverlay = styled.div`
  box-sizing: border-box;
  display: ${(props) => (props.visable ? 'block' : 'none')};
  position: fixed;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  background-color: rgba(0, 0, 0, 0.6);
  z-index: 100;
`
const Render = ({ location }) => {

	const [getProblem, setProblem] = useState({})
	const [getSubmitInfo, setSubmitinfo] = useState({})

	const [getModalOpen, setModalOpen] = useState(false)
	const [getAnswer, setAnswer] = useState('')
	const getUserData = useRecoilValue(userData)
	const navigate = useNavigate();
	const { number } = useParams();
	useEffect(() => {
		axios.get(`/problem/problem/?id=${number}`)
			.then(response => {
				setProblem(response.data.question)
				if(response.data.submit === null) {
					setSubmitinfo({try: 0, success: false})
				}
				else {
					setSubmitinfo(response.data.submit)
				}

			})
			.catch(error => console.log(error))
	}, [])


	const CheckLoading = (param) => {
		if (param === undefined || param === null) {
			return ' '
		}
		else {
			return param
		}
	}
	const DeleteProblem = () => {
		axios.delete(`/problem/delete/?id=${number}`)
		.then(() => {
			alert("삭제 성공")
			navigate(-1)
		})
		.catch(console.log)
	}
	const onSuccessMemoRegister = () => {
		alert('메모 등록 성공')
		setModalOpen(false)
	}
	const submitAnswer = () => {
		axios.post('/problem/answer', {
			answer: getAnswer,
			questionNumber: number
		})
		.then((result) => {
			console.log(result)
			setSubmitinfo(result.data)
			alert(result.data.Message)
		})
		.catch(console.log)
	}
	return (
		<Main>
			<RegisterMemo visable={getModalOpen} questionNumber={number} onSuccessMemoRegister={onSuccessMemoRegister}/>
			<ModalOverlay visable={getModalOpen} onClick={() => {setModalOpen(false)}}/>
			<Wrapper>
				<ButtonWrapper>
					<Button onClick={() => setModalOpen(true)}>🗒</Button>
					<Button>👍</Button>
					<Button>☆</Button>
					{
						getUserData.username === getProblem.owner && 
						<>
							<Button>✏️</Button>
							<Button onClick={DeleteProblem}>❌</Button>
						</>
	
					}
				</ButtonWrapper>
				<BoxWrapper>
					<TitleBox>
						<TitleNumber>{CheckLoading(getProblem.questionNumber)}</TitleNumber>
						<TitleName>{CheckLoading(getProblem.title)}</TitleName>
					</TitleBox>
				</BoxWrapper>
				<BoxWrapper>
					<BoxText>도전 정보</BoxText>
					<InfoBox>
						<InfoItem>
							<InfoHead>도전 여부</InfoHead>
							<InfoBody>{getSubmitInfo.try === 0 ? '미도전' : getSubmitInfo.success ? '성공' : '실패'}</InfoBody>
						</InfoItem>
						<InfoItem>
							<InfoHead>내 제출</InfoHead>
							<InfoBody>{getSubmitInfo.try}</InfoBody>
						</InfoItem>
					</InfoBox>
				</BoxWrapper>
				<BoxWrapper>
					<BoxText>문제</BoxText>
					<MainBox dangerouslySetInnerHTML={{__html: CheckLoading(getProblem.content) }}>
					</MainBox>
				</BoxWrapper>
				<BoxWrapper>
					<BoxText>유형</BoxText>
					<CategoryContainer>
						{
							getProblem.info === undefined ? <>Loading</> :
							getProblem.info.map((element, idx) => {
								return (
									<CategoryCore 
										color='#3fe2a6;'
										key={idx}>
									{element}
									</CategoryCore>
								)
							}) 
						}
					</CategoryContainer>
				</BoxWrapper>
				<BoxWrapper>
					<BoxText>출처</BoxText>
					<MainBox>
					{
						CheckLoading(getProblem.source)
					}
					</MainBox>
				</BoxWrapper>
				<BoxWrapper>
					<BoxText>제출</BoxText>
					<Box>
						<Submit value={getAnswer} onChange={(e) => {setAnswer(e.target.value)}}/>
						<SubmitButton onClick={submitAnswer}>제출</SubmitButton>
					</Box>
				</BoxWrapper>
			</Wrapper>
		</Main>
	)
}

export default Render;