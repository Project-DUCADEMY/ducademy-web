import styled from 'styled-components'
import { Link } from 'react-router-dom'
import '../../fonts/Nanum_Gothic_Coding.css'
const Main = styled.div`
	width: 15%;
	height: 20px;
	margin: auto;
	margin-top: 16px;
	display: flex;
`
const StyledLink = styled(Link)`
    font-size: 16px;
    font-family: 'Nanum Gothic Coding';
    color: rgb(80, 80, 80);
    margin: 0 auto;
    &:focus, &:hover, &:visited, &:link, &:active {
        text-decoration: none;
    }
    :hover{
    	font-size: 18px;
    }
    text-align: center;
`
const Menu = (props) => {
	return (	
		<Main>
			<StyledLink to={props.link}>
				{
					props.title
				}
			</StyledLink>
		</Main>
	)
}

export default Menu;