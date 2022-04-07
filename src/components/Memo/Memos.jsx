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
const RecentTitle = styled.div`
	margin-top: 100px;
	font-size: 30px;
	margin-left: 2%;
`
const RecentMemoContainer = styled.div`
	margin-top: 20px;
	width: 100%;
	display: flex;
    justify-content: flex-start;
    align-items: center;
    border-top: 1px solid grey;
    flex-wrap: wrap;

`
const SearchBar = styled.div`
	width: 100%;
	height: 100px;
    border-bottom: 1px solid grey;
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
				<RecentTitle>최근 메모</RecentTitle>
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