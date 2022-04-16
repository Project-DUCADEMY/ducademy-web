import styled from 'styled-components'
import SearchSpace from './SearchSpace'
import ProblemsTable from './ProblemsTable'

const Background = styled.div`
	width: 100%;
	height: 100vh - 75px;
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: center;
	background-color: white;
	margin-top: 75px;
`
const Main = styled.div	`
	width: 70%;
	margin-top: 30px;
	display: flex;
	flex-direction: column;
    align-content: center;
    align-items: center;
`
const MainWrapper = styled.div	`
	display:flex;
	flex-direction: column;
	align-items: center;
	height: 100%;
`

const Problems = () => {
	return (
			<Main>
				<SearchSpace />
				<ProblemsTable />
			</Main>
	)
}

export default Problems;