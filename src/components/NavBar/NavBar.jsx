import styled from 'styled-components'
import Menu from './Menu'
import Userinfo from './UserInfo'
import { Link } from 'react-router-dom'
import {   matchPath, useLocation } from 'react-router-dom';

const NavBarMainWrapper = styled.div`
	width: 100%;
	height: 50px;
	border-bottom: solid 2px #ede;
	background-color: rgb(240, 245, 240);
	display: flex;
	align-items: flex-end;
	justify-content: space-around;
`
const LogoWrapper = styled.div`
	position: relative;
	width: 15%;
`
const MenuWrapper = styled.div`
	width: 40%;
	height: 40px;
	display: inline-flex;
`
const menus = [
	{ title: '문제', link:'problems'},
	{ title: '문제집', link:'workbook'},
	{ title: '시험', link:'exam'},
	{ title: 'Q&A', link:'QandA'},
	{ title: '그룹', link:'group'},
	// { title: '로그인', link:'signin'}
]
const NavBar = () => {
	return (
		<NavBarMainWrapper>
			<LogoWrapper>
				<Link to={'/'}>
					<img alt="메인 로고" src="DUCAMI.svg" />
				</Link>
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