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
const Text = styled.div`
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
							<Text>로그인</Text>
						</LinkWrapper>
						<Text>|</Text>
						<LinkWrapper to={'/join'}>
							<Text>회원가입</Text>
						</LinkWrapper>
					</LoginJoinWrapper>
				</>
				) : (
				<>
					<Text>로그아웃</Text>
					<Text>{ userState } |</Text>
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