import styled from 'styled-components'
import Menu from './Menu'
import Userinfo from './UserInfo'
import { useEffect } from 'react'
import { matchPath, useLocation } from 'react-router-dom';

import { useRecoilValue } from 'recoil'
import userData from '../../store/userData'

import * as N from "./NavBar.style"


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
		<N.NavBarMainWrapper>
			<N.LogoWrapper to={'/'}>
				<N.Logo/>
			</N.LogoWrapper>
			<N.MenuWrapper>
				{
					menus.map((element, idx) => {
						return <Menu 
							title={element.title}
							link={element.link}
							key={idx}
						/>
					})
				}
			</N.MenuWrapper>
			<Userinfo/>
		</N.NavBarMainWrapper>
	)
}

export default NavBar;