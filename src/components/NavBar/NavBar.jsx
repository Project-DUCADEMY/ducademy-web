import styled from 'styled-components'
import Menu from './Menu'
import Userinfo from './UserInfo'
import { Link } from 'react-router-dom'
import { useEffect } from 'react'
import { matchPath, useLocation } from 'react-router-dom';

import { ReactComponent as Icon } from '../../assets/image/DUCAMI.svg'
import { useRecoilValue } from 'recoil'
import userData from '../../store/userData'

const NavBarMainWrapper = styled.div`
	position: fixed;
	z-index: 2;
	width: 100%;
	background-color: #F1F8E9;
	height: 50px;
	display: flex;
	align-items: flex-end;
	justify-content: space-around;
	top: 0px;
`
const LogoWrapper = styled(Link)`
	position: relative;
	width: 200px;
	bottom: 5px;
`
const Logo = styled(Icon)`
fill: "red";
`
const MenuWrapper = styled.div`
	width: 40%;
	height: 40px;
	display: inline-flex;
`
const menus = [
	{ title: '문제', link:'problems'},
	{ title: '문제집', link:'workbook'},
	{ title: '노트', link:'memo'},
	{ title: '시험', link:'exam'},
	{ title: 'Q&A', link:'QandA'},
	{ title: '그룹', link:'group'},

]
const NavBar = () => {
	const getUserData = useRecoilValue(userData)
	// useEffect(() => {
		
	// },[getUserData])
	return (
		<NavBarMainWrapper>
			<LogoWrapper to={'/'}>
				<Logo/>
			</LogoWrapper>
			<MenuWrapper>
				{
					menus.map((element, idx) => {
						return <Menu 
							title={element.title}
							link={element.link}
							key={idx}
						/>
					})
				}
			</MenuWrapper>
			<Userinfo/>
		</NavBarMainWrapper>
	)
}

export default NavBar;