import styled from 'styled-components'
import Menu from './Menu'
import { Link } from 'react-router-dom'
import {   matchPath, useLocation } from 'react-router-dom';

const NavBarMainWrapper = styled.div`
	width: 100%;
	height: 80px;
	border-bottom: solid 2px #ede;
	background-color: rgb(240, 245, 240);
`
const Logo = styled.img`
	width: 300px;
	position: relative;
	float: left;
	left: 17%;
	top: 40%;
`
const MenuWrapper = styled.div`
	position: relative;
	width: 35%;
	height: 40px;
	float: right;
	right: 17%;
	top: 40px;
	display: inline-flex;
`
const menus = [
	{ title: '문제', link:'problems'},
	{ title: '문제집', link:'workbook'},
	{ title: '시험', link:'exam'},
	{ title: 'Q&A', link:'QandA'},
	{ title: '그룹', link:'group'},
	{ title: '로그인', link:'signin'}
]
const NavBar = () => {
	return (
		<NavBarMainWrapper>
				<Link to={'/'}>
					<Logo alt="메인 로고" src="DUCAMI.svg" />
				</Link>
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
		</NavBarMainWrapper>
	)
}

export default NavBar;