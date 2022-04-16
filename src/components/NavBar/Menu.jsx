import styled from 'styled-components'
import { Link, useLocation } from 'react-router-dom'
import '../../assets/fonts/Nanum_Gothic_Coding.css'
import { useState } from 'react'

const Main = styled.div`
	// width: 15%;
	// height: 20px;
	// margin: auto;
	// margin-top: 23px;
	// display: flex;
	// flex-direction: column;
	// position: relative;
`

const StyledLink = styled(Link)`
    font-size: 16px;
    font-family: 'Nanum Gothic Coding';
    color: rgb(80, 80, 80);
    &:focus, &:hover, &:visited, &:link, &:active {
        text-decoration: none;
    }
	width: 15%;
	height: 30px;
	margin: auto;
	margin-top: 10px;
	display: flex;
	flex-direction: column;
	position: relative;
	align-items: center;
    justify-content: flex-end;
    color: ${({color}) => color};
    bottom: 13px;
`
const UnderBar = styled.div`
	border-radius:15px;
	height: 3.5px;
	/* height: 2px; */
	background-color: ${({color}) => color};
	position: relative;
	top: 5px;
	transition: all 0.1s;
	width:25%;
	width: ${({color}) => { return color === 'black' ? '0%' : '30%' }};
	/* width: ${({color}) => { return color === 'black' ? '0%' : '70%' }}; */
`
const Menu = (props) => {
	const [getOnOver, setOnOver] = useState(false)
	const path = useLocation().pathname.split('/')
	const color = path[1] === props.link ? '#00C853' : getOnOver ? '#00BFA5' : 'black'
	return (	
		<StyledLink to={props.link}
			onMouseOver={() => setOnOver(true)}
			onMouseOut={() => setOnOver(false)}
			color={color}>
			{
				props.title
			}
		<UnderBar color={color}/>
		</StyledLink>
	)
}

export default Menu;