import styled from 'styled-components'
import { Link, useLocation } from 'react-router-dom'
import '../../fonts/Nanum_Gothic_Coding.css'
import { useState } from 'react'

const Main = styled.div`
	width: 15%;
	height: 20px;
	margin: auto;
	margin-top: 16px;
	display: flex;
	flex-direction: column;
	position: relative;
	top: 9px;
`

const StyledLink = styled(Link)`
    font-size: 14px;
    font-family: 'Nanum Gothic Coding';
    color: rgb(80, 80, 80);
    margin: 0 auto;
    &:focus, &:hover, &:visited, &:link, &:active {
        text-decoration: none;
    }
    :hover{
    }
    text-align: center;
`

const UnderBar = styled.div`
	height: 2px;
	width: 100%;
	background-color: ${props=>props.color};
	position: relative;
	top: 1px;
`
const Menu = (props) => {
	const [getOnOver, setOnOver] = useState(false)
	const path = useLocation().pathname.split('/')
	return (	
		<Main
			onMouseOver={() => setOnOver(true)}
			onMouseOut={() => setOnOver(false)}>
			<StyledLink to={props.link}>
				{
					props.title
				}
			</StyledLink>
			{
				path[1] === props.link ? <UnderBar color={'green'}/> : 
				getOnOver ? <UnderBar color={'red'}/> :
				null
			}	
		</Main>
	)
}

export default Menu;