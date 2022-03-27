import styled from 'styled-components'
import { Link } from 'react-router-dom'
import userData from '../../store/userData'
import { useRecoilValue } from 'recoil'
const Main = styled.div`
	height: 100%;
	width: 250px;
    display: flex;
    align-items: center;
    flex-direction: row-reverse; 
`
const UserImgWrapper = styled(Link)`
	
`
const UserImg = styled.img`
	width: 40px;
    height: 40px;
    object-fit: cover;
    margin-top: 10px;
    border-radius: 40%;
`
const Username = styled.div`
	color: grey;
	font-size: 12px;
	margin-top: 30px;
	margin-left: 5px;
`
const Sign = styled.div`
	color: grey;
	font-size: 10px;
	margin-top: 30px;
	margin-left: 5px;
`
const LoginJoinWrapper = styled.div`
	display: flex;
`
const LinkWrapper = styled(Link)`
	&:focus, &:hover, &:visited, &:link, &:active {
        text-decoration: none;
    }
    display: flex;
`
const UserInfo = () => {
	const userState = useRecoilValue(userData)
	return (
		<Main>
			{
				userState === null ? (
				<>
					<LoginJoinWrapper>
						<LinkWrapper to={'/login'}>
							<Username>로그인</Username>
						</LinkWrapper>
						<Username>|</Username>
						<LinkWrapper to={'/join'}>
							<Username>회원가입</Username>
						</LinkWrapper>
					</LoginJoinWrapper>
				</>
				) : (
				<>
					<Sign>로그아웃</Sign>
					<Username>김건호 | </Username>
					<UserImgWrapper to={'/mypage'}>
					<UserImg src={'default.jpeg'} />
					</UserImgWrapper>
				</>
				)
			}
		</Main>
	)
}

export default UserInfo;