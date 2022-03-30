import styled from "styled-components"
import { useState } from 'react'
import axios from 'axios'
import '../../fonts/Nanum_Gothic_Coding.css'

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
const InputWrap = styled.div`
	width: 100%;
	display: flex;
	flex-direction: column;
	row-gap: 10px;
	margin-top: auto;
`

const JoinTitle = styled.span`
	font-weight: bold;
	font-size: 48px;
	text-decoration: bold;
	color :#3fe2a6;
	text-align: center;
`

const JoinInput = styled.input`
	box-sizing: border-box;
	width: 100%;
	height: 70px;
	font-size: 20px;
	padding: 24px 20px;
	background-color: #eff1ee;
	border: 0px;
	outline: none;
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
		opacity: 0.7;
	}
`

const Joinpage = () => {
	const [getEmail, setEmail] = useState('')
    const [getPw, setPw] = useState('')
    const [getPwCh, setPwCh] = useState('')
    const [getUsername, setUsername] = useState('')

    const handleInputEmail = (e) => {
        setEmail(e.target.value)
    }
    const handleInputUsername = (e) => {
        setUsername(e.target.value)
    }
    const handleInputPw = (e) => {
        setPw(e.target.value)
    }
    const handleInputPwCh = (e) => {
        setPwCh(e.target.value)
    }

    const join = (e) => {
    	axios.post(
        '/authenticate/join', 
        { 
        	username: getUsername,
        	email: getEmail,
        	password: getPw,
        	passwordCh: getPwCh
        })
        .then(console.log)
        .catch(console.log)
    }
    //name, username, email, password, passwordCh
	return (
		<Background>
			<Container>
				<JoinTitle>Join</JoinTitle>
				<InputWrap>
					<JoinInput type="text" placeholder="Nickname" value={getUsername} onChange={handleInputUsername}/>
					<JoinInput type="Email" placeholder="Email" value={getEmail} onChange={handleInputEmail}/>
					<JoinInput type="password" placeholder="Password" value={getPw} onChange={handleInputPw}/>
					<JoinInput type="password" placeholder="Password Check" value={getPwCh} onChange={handleInputPwCh}/>
				</InputWrap>
				<ConfirmButton onClick={join}>Confirm</ConfirmButton>
			</Container>
		</Background>
	)
}

export default Joinpage;