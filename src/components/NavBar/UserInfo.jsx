import styled from 'styled-components'
const Main = styled.div`
	height: 100%;
	width: 15%;
    display: flex;
    align-items: center;
    flex-direction: row-reverse; 
`
const UserImg = styled.img`
	width: 40px;
    height: 40px;
    object-fit: cover;
    margin-top: 5px;
    border-radius: 40%;
`
const Username = styled.div`
	
`
const SIgnOut = styled.div`
	color: grey;
	font-size: 8px;
	margin-top: 30px;
	margin-left: 5px;
`
const UserInfo = () => {
	return (
		<Main>
			<SIgnOut>로그아웃</SIgnOut>
			<UserImg src={'default.jpeg'} />

		</Main>
	)
}

export default UserInfo;