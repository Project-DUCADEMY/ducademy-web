import styled from 'styled-components'
import axios from 'axios'
import { useEffect } from 'react'
import { useRecoilValue } from 'recoil'
import problemNumber from '../../store/problem'
import { route } from "react-router";
const Background = styled.div`
  	width: 100%;
	height: calc(100vh - 52px);
	display: flex;
	justify-content: center;
	background-color: rgb(255, 255, 255);
	margin-top: 52px;
	padding-top: 50px;
	`
const Wrapper = styled.div`
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
`
const InfoTable = styled.table`
	text-align: center;
	width: 100%;
	box-sizing: border-box;
	border: 1px solid #ddd;
`

const MainBox = styled(Box)`
	justify-content: flex-start;
`
const InputExampleBox = styled(Box)`
	justify-content: flex-start;
`
const Submit = styled.input`
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

const Render = ({ location }) => {
	const getProblemNumber = useRecoilValue(problemNumber)
	useEffect(() => {
		axios.get(`/problem/problem/?id=${getProblemNumber}`)
			.then(response => {
				console.log(response.data.question)
			})
			.catch(error => console.log(error))
	}, [getProblemNumber])
	return (
		<Background>
			<Wrapper>
				<BoxWrapper>
					<TitleBox>
						<TitleNumber>{1136}</TitleNumber>
						<TitleName>{"5x + 2 = 12의 실수 해 구하기"}</TitleName>
					</TitleBox>
				</BoxWrapper>
				<BoxWrapper>
					<BoxText>정보</BoxText>
					<InfoBox>
						<InfoTable>
							<thead>
								<tr>
									<th>제출</th>
									<th>정답</th>
									<th>오답</th>
									<th>정답 비율</th>
								</tr>
							</thead>
							<tbody>
								<tr>
									<td>160042</td>
									<td>88384</td>
									<td>71658</td>
									<td>{(88384 / 160042 * 100).toFixed(3)}%</td>
								</tr>
							</tbody>
						</InfoTable>
					</InfoBox>
				</BoxWrapper>
				<BoxWrapper>
					<BoxText>문제</BoxText>
					<MainBox>
						{'나는해물짬뽕훠훠훠나는해물짬뽕훠훠훠나는해물짬뽕훠훠훠나는해물짬뽕훠훠훠나는해물짬뽕훠훠훠나는해물짬뽕훠훠훠나는해물짬뽕훠훠훠나는해물짬뽕훠훠훠나는해물짬뽕훠훠훠나는해물짬뽕훠훠훠나는해물짬뽕훠훠훠나는해물짬뽕훠훠훠나는해물짬뽕훠훠훠나는해물짬뽕훠훠훠나는해물짬뽕훠훠훠나는해물짬뽕훠훠훠나는해물짬뽕훠훠훠나는해물짬뽕훠훠훠나는해물짬뽕훠훠훠나는해물짬뽕훠훠훠나는해물짬뽕훠훠훠나는해물짬뽕훠훠훠나는해물짬뽕훠훠훠나는해물짬뽕훠훠훠나는해물짬뽕훠훠훠나는해물짬뽕훠훠훠나는해물짬뽕훠훠훠나는해물짬뽕훠훠훠나는해물짬뽕훠훠훠나는해물짬뽕훠훠훠나는해물짬뽕훠훠훠나는해물짬뽕훠훠훠나는해물짬뽕훠훠훠나는해물짬뽕훠훠훠나는해물짬뽕훠훠훠나는해물짬뽕훠훠훠나는해물짬뽕훠훠훠나는해물짬뽕훠훠훠나는해물짬뽕훠훠훠나는해물짬뽕훠훠훠나는해물짬뽕훠훠훠나는해물짬뽕훠훠훠나는해물짬뽕훠훠훠나는해물짬뽕훠훠훠나는해물짬뽕훠훠훠나는해물짬뽕훠훠훠나는해물짬뽕훠훠훠나는해물짬뽕훠훠훠나는해물짬뽕훠훠훠나는해물짬뽕훠훠훠나는해물짬뽕훠훠훠나는해물짬뽕훠훠훠나는해물짬뽕훠훠훠나는해물짬뽕훠훠훠나는해물짬뽕훠훠훠나는해물짬뽕훠훠훠나는해물짬뽕훠훠훠나는해물짬뽕훠훠훠나는해물짬뽕훠훠훠나는해물짬뽕훠훠훠나는해물짬뽕훠훠훠나는해물짬뽕훠훠훠나는해물짬뽕훠훠훠나는해물짬뽕훠훠훠나는해물짬뽕훠훠훠나는해물짬뽕훠훠훠나는해물짬뽕훠훠훠나는해물짬뽕훠훠훠나는해물짬뽕훠훠훠나는해물짬뽕훠훠훠나는해물짬뽕훠훠훠'}
					</MainBox>
				</BoxWrapper>
				<BoxWrapper>
					<BoxText>입력</BoxText>
					<InputExampleBox>
						양의 정수 하나를 입력해야 한다. 이외 문자는 허용되지 않는다.
						허허허
					</InputExampleBox>
				</BoxWrapper>
				<BoxWrapper>
					<BoxText>제출</BoxText>
					<Box><Submit></Submit></Box>
				</BoxWrapper>
			</Wrapper>
		</Background>
	)
}

export default Render;