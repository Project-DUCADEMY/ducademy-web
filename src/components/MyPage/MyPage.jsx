import userData from '../../store/userData'
import { useRecoilState } from 'recoil'
import axios from 'axios'
import styled from 'styled-components'
const Background = styled.div`
	flex-direction: column;
	width: 100%;
	height: calc(1150px - 52px);
	display: flex;
	align-items: center;
	justify-content: center;
	background-color: white;
	margin-top: 52px;
`
const FinalWrapper = styled.div`
	
`
const ProfileTitle = styled.h1`
	margin-left: 10px;
	margin-bottom: 10px;
	margin-right: auto;
`
const Main = styled.div`
  	width: 800px;
  	height: 900px;
  	background-color: #fbfbfb;
	border : 1px solid #dcdcdc;
	box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
  	display: flex;
  	flex-direction: column;
  	align-content: center;
  	align-items: center;
  	justify-content: space-evenly;
  	position: relative;
`

const MyPage = () => {
	return (
		<Background>
			<FinalWrapper>
				<ProfileTitle>test님의 정보</ProfileTitle>
				<Main></Main>
			</FinalWrapper>
		</Background>
	)
}

export default MyPage;