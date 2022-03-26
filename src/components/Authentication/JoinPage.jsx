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
	background-color: #D7FFC3;
`
const Container = styled.div`
	width: 400px;
	height: 550px;
	background-color: #96FB66;
	border-radius: 10px;
	display: flex;
	flex-direction: column;
	align-items: center;
`
const LoginTitle = styled.span`
	font-family: 'Nanum Gothic Coding';
	margin-top: 70px;
	margin-bottom: 80px;
	font-size: 45px;
	text-decoration: bold;
`
const EmailInput = styled.input`
	box-sizing: border-box;
	width: 300px;
	height: 50px;
	border: 2px solid black;
	border-radius: 10px;
	background-color: white;
	font-size: 18px;
	padding: 18px 16px;
	margin-bottom: 35px;
`
const PasswordInput = styled.input`
	box-sizing: border-box;
	width: 300px;
	height: 50px;
	border: 2px solid black;
	border-radius: 10px;
	background-color: white;
	font-size: 18px;
	padding: 18px 16px;
`
const CheckboxContainer = styled.div`
	display: flex;
	justify-content: center;
	margin-top: 30px;
	float: left;
`
const Checkbox = styled.input`
	width: 30px;
	height: 30px;
	border-radius: 10px;
	margin-right: 10px;

`
const CheckboxText = styled.span`
	font-size: 20px;
`
const ConfirmButton = styled.button`
	width: 150px;
	height: 50px;
	margin-top: 45px;
	border-radius: 10px;
	display: flex;
	align-items: center;
	justify-content: center;
	font-size: 20px;
	cursor: pointer;
	&:hover {
		background-color: #848484;
	}
	&:active {
		transform:translateY(5px);
	}
`

const Joinpage = () => {
	const [getEmail, setEmail] = useState('')
    const [getPw, setPw] = useState('')
    const [getPwCh, setPwCh] = useState('')
	const [getName, setName] = useState('')
    const [getUsername, setUsername] = useState('')

    const handleInputEmail = (e) => {
        setEmail(e.target.value)
    }
    const handleInputUsername = (e) => {
        setUsername(e.target.value)
    }
    const handleInputName = (e) => {
        setName(e.target.value)
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
        	name: getName,
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
				<LoginTitle>회원가입</LoginTitle>
				<EmailInput type="text" placeholder="name" value={getName} onChange={handleInputName}/>
				<EmailInput type="text" placeholder="nickname" value={getUsername} onChange={handleInputUsername}/>
				<EmailInput type="Email" placeholder="Email" value={getEmail} onChange={handleInputEmail}/>
				<PasswordInput type="password" placeholder="Password" value={getPw} onChange={handleInputPw}/>
				<PasswordInput type="password" placeholder="Password Check" value={getPwCh} onChange={handleInputPwCh}/>
				<ConfirmButton onClick={join}>Confirm</ConfirmButton>
			</Container>
		</Background>
	)
}

export default Joinpage;