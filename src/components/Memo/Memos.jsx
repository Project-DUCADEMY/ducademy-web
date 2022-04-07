import styled from 'styled-components'
import Memo from './Memo'
const Memos = styled.div`
	margin-top: 52px;
	display: flex;
	width: 100%;
    justify-content: center;
`
const MainContainer = styled.div`
	width: 80%;
	height: 500px;
	display: flex;
    justify-content: center;
	background-color: red;
`
const RecentMemoContainer = styled.div`
	margin-top: 20px;
	width: 100%;
	height: 300px;
	background-color: green;
`
const Render = () => {
	return (
		<Memos>
			<MainContainer>
				<RecentMemoContainer>
					<Memo/>
				</RecentMemoContainer>
			</MainContainer>
		</Memos>
	)
}
export default Render;