import styled from 'styled-components'
import { Link } from 'react-router-dom'
import { ReactComponent as Icon } from '../../assets/image/DUCAMI.svg'


export const NavBarMainWrapper = styled.div`
	position: fixed;
	z-index: 2;
	width: 100%;
    box-shadow: 4px 4px 15px 0px #0000001a;
	background-color: white;
	/* height: 100px; */
	/* height: 50px; */
	height: 75px;
	display: flex;
	align-items: flex-end;
	justify-content: space-around;
	top: 0px;
    *{
        margin-bottom:5px;
    }
`
export const LogoWrapper = styled(Link)`
	position: relative;
	width: 200px;
	bottom: 5px;
`
export const Logo = styled(Icon)`
fill: "red";
`
export const MenuWrapper = styled.div`
	width: 40%;
	height: 40px;
	display: inline-flex;
`