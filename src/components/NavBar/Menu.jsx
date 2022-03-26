import styled from 'styled-components'
import { Link, useLocation } from 'react-router-dom'
import '../../fonts/Nanum_Gothic_Coding.css'
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
`
const TitleWrapper = styled.div`
    font-size: 16px;
    font-family: 'Nanum Gothic Coding';
    color: rgb(80, 80, 80);
    margin: 0 auto;
    &:focus, &:hover, &:visited, &:link, &:active {
        text-decoration: none;
    }
    text-align: center;
`
const UnderBar = styled.div`
	height: 2px;
	width: 80%;
	background-color: ${props=>props.color};
	position: relative;
	top: 1px;
`
const Menu = (props) => {
	const [getOnOver, setOnOver] = useState(false)
	const path = useLocation().pathname.split('/')
	return (	
		<StyledLink to={props.link}
			onMouseOver={() => setOnOver(true)}
			onMouseOut={() => setOnOver(false)}>
			{
				props.title
			}
			{
				path[1] === props.link ? <UnderBar color={'green'}/> : 
				getOnOver ? <UnderBar color={'red'}/> :
				null
			}
		</StyledLink>
	)
}

export default Menu;