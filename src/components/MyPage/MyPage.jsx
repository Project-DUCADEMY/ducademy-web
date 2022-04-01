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
const Title = styled.h1`
	margin-left: 10px;
	margin-bottom: 10px;
	margin-right: auto;
`

const ProfileTitle = styled(Title)`

`
const StatTitle = styled(Title)`
	font-size: 30px;
`
const StreakTitle = styled(Title)`
	font-size: 30px;
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
const StatWrapper = styled.div`
	
`
const StatContainer = styled.div`
	box-sizing: border-box;
	padding: 18px 22px;
	width: 600px;
	height: auto;
	background-color: #e9e9e9;
	border: 1px solid #dcdcdc;
`
const StatElement = styled.div`
	align-content: center;
	width: auto;
	height: 50px;
	border: 1px solid black;
	justify-content: space-between;
`
const StatKey = styled.th`

`
const StatValue = styled.td`
	
`
const StreakWrapper = styled.div`
`
const StreakContainer = styled.div`
	width: 600px;
	height: 200px;
	background-color: #e9e9e9;
	border: 1px solid #dcdcdc;
	box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
	&:hover {
		background-color: #ffffff;
		border: 1px solid #3fe2a6;
		box-shadow: #3fe2a6 0px 2px 8px;
	}
	transition: border ease-in-out .25s, background-color ease-in-out .25s, box-shadow ease-in-out .25s;
`
const Grass = styled.rect`
	width: 20px;
	height: 20px;
	fill: rgb(0, 121, 80);
`

const MyPage = () => {
	return (
		<Background>
			<FinalWrapper>
				<ProfileTitle>개종박님의 정보</ProfileTitle>
				<Main>
					<StatWrapper>
						<StatTitle>통계</StatTitle>
						<StatContainer>
							<StatElement>
								<StatKey>등수</StatKey>
								<StatValue>123</StatValue>
							</StatElement>
						</StatContainer>
					</StatWrapper>
					<StreakWrapper>
						<StreakTitle>스트릭</StreakTitle>
						<StreakContainer>
							<Grass></Grass>
						</StreakContainer>
					</StreakWrapper>
				</Main>
			</FinalWrapper>
		</Background>
	)
}

export default MyPage;