import styled from 'styled-components'
import Menu from './Menu'
import Userinfo from './UserInfo'
import { Link } from 'react-router-dom'
import {   matchPath, useLocation } from 'react-router-dom';

import { useRecoilValue } from 'recoil'
import userData from '../../store/userData'

const NavBarMainWrapper = styled.div`
	height: 50px;
	width: 100%;
	border-bottom: solid 2px #ede;
	background-color: #E8F5E9;
	display: flex;
	align-items: flex-end;
	justify-content: space-around;
`
const LogoWrapper = styled(Link)`
	position: relative;
	width: 250px;
`
const MenuWrapper = styled.div`
	width: 40%;
	height: 40px;
	display: inline-flex;
`
const menus = [
	{ title: '문제', link:'problems'},
	{ title: '문제집', link:'workbook'},
	{ title: '노트', link:'note'},
	{ title: '시험', link:'exam'},
	{ title: 'Q&A', link:'QandA'},
	{ title: '그룹', link:'group'},

]
const NavBar = () => {
	const userState = useRecoilValue(userData)
	return (
		<NavBarMainWrapper>
			<LogoWrapper to={'/'}>
				<img alt="메인 로고" src="DUCAMI.svg" />
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