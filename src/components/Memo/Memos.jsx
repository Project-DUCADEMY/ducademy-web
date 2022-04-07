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
	display: flex;
    justify-content: center;
    flex-direction: column;	
`
const RecentMemoContainer = styled.div`
	margin-top: 20px;
	width: 100%;
	height: 300px;
	display: flex;
    justify-content: flex-start;
    align-items: center;
`
const SearchBar = styled.div`
	width: 100%;
	height: 100px;
`
const PostitContainer = styled.div`
	display: flex;
    flex-wrap: wrap;	
	width: 100%;
	height: 1000px;
`
const Render = () => {
	return (
		<Memos>
			<MainContainer>
				<RecentMemoContainer>
					<Memo/>
					<Memo/>
					<Memo/>
					<Memo/>
				</RecentMemoContainer>
				<SearchBar/>
				<PostitContainer>
					<Memo/>
					<Memo/>
					<Memo/>
					<Memo/>
					<Memo/>
					<Memo/>
					<Memo/>
					<Memo/>
					<Memo/>
					<Memo/>
					<Memo/>
					<Memo/>
				</PostitContainer>
			</MainContainer>
		</Memos>
	)
}
export default Render;