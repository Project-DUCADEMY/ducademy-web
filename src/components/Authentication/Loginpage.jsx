import styled from "styled-components"
import { useState, useEffect } from 'react'
import axios from 'axios'
import '../../fonts/Nanum_Gothic_Coding.css'

import userData from '../../store/userData'
import { useSetRecoilState } from 'recoil'


const Background = styled.div`
	width: 100%;
	height: calc(100vh - 52px);
	display: flex;
	align-items: center;
	justify-content: center;
	background-color: white;
	margin-top: 52px;
`
const Container = styled.div`
	width: 800px;
	height: 700px;
	background-color: #fbfbfb;
	border-radius: 10px;
	display: flex;
	flex-direction: column;
	border : 1px solid #dcdcdc;
	box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
	padding: 70px 150px;
	padding-top: 90px;
	box-sizing: border-box;
`
const LoginTitle = styled.span`
	/* font-family: 'Nanum Gothic Coding'; */
	font-weight: bold;
	font-size: 48px;
	text-decoration: bold;
	color :#3fe2a6;
	text-align: center;
`

const InputWrap = styled.div`
	width: 100%;
	display: flex;
	flex-direction: column;
	row-gap: 10px;
	margin-top: auto;
`

const InputTitle = styled.h1`
	width: 100%;
	font-size: 20px;
	font-weight: bold;
	color :black;
	margin: 0px;
`

const LoginInput = styled.input`
	box-sizing: border-box;
	width: 100%;
	height: 70px;
	font-size: 20px;
	padding: 24px 20px;
	background-color: #eff1ee;
	border: 0px;
	outline: none;

`
const CheckboxContainer = styled.div`
	display: flex;
	justify-content: center;
	margin-top: 30px;
	margin-right: auto;
`
const CheckboxText = styled.span`
	font-size: 20px;
`
const Checkbox = styled.div`
	width: 30px;
	height: 30px;
	margin-right: 10px;
	position: relative;
	border-radius: 10px;
	background-color: #eff1ee;
`
const ClickedCheckbox = styled.div`
	width: 30px;
	height: 30px;
	background-color: #37eeab;
	border-radius: 10px;
	position: absolute;
	top : 50%;
	left: 50%;
	transform: translate(-50%, -50%);
`
const ConfirmButton = styled.button`
	width: 230px;
	height: 65px;
	border-radius: 30px;
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
		opacity: 0.5;
	}
`

const Loginpage = () => {
	const [getEmail, setEmail] = useState('')
    const [getPw, setPw] = useState('')

    const setUserData = useSetRecoilState(userData)

    const handleInputEmail = (e) => {
        setEmail(e.target.value)
    }
    const handleInputPw = (e) => {
        setPw(e.target.value)
    }
    const login = (e) => {
    	axios.post(
        '/authenticate/login', 
        { 
        	email: getEmail,
        	password: getPw,
        })
        .then((response) => {
        	axios.post('/user/userinfo')
        	.then(response => setUserData(response.data))
        	.catch(error => setUserData(null))
            window.location.replace('/')
        })
        .catch(error => {
        	console.log(error.message)
        })
    }

	const [click, setClick] = useState(false)
	return (
		<Background>
			<Container>
				<LoginTitle>Login</LoginTitle>
				<InputWrap>
					<LoginInput type="text" placeholder="Email" value={getEmail} onChange={handleInputEmail}/>
					<LoginInput type="password" placeholder="Password" value={getPw} onChange={handleInputPw}/>
				</InputWrap>
				<CheckboxContainer>
					<Checkbox onClick={()=>setClick(!click)}>
						{
							click && <ClickedCheckbox/>
						}
					</Checkbox>
					<CheckboxText>로그인 상태 유지</CheckboxText>
				</CheckboxContainer>

				<ConfirmButton onClick={login}>Confirm</ConfirmButton>
			</Container>
		</Background>
	)
}

export default Loginpage;