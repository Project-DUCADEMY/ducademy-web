import styled from 'styled-components'
const NavBarMainWrapper = styled.div`
	width: 100%;
	height: 80px;
	border-bottom: solid 2px #eee;
`
const Logo = styled.img`
	width: 300px;
	position: relative;
	float: left;
	left: 20%;
	top: 35px;
`
const MenuWrapper = styled.div`
	background-color: black;
	position: relative;
	width: 40%;
	height: 40px;
	float: right;
	right: 20%;
	top: 40px;
`
const NavBar = () => {
	return (	
		<NavBarMainWrapper>
			<Logo alt="메인 로고" src="DUCAMI.svg" />
			<MenuWrapper/>
		</NavBarMainWrapper>
	)
}

export default NavBar;