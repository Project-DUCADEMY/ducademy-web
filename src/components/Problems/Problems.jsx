import styled from 'styled-components'
import SearchSpace from './SearchSpace'
import ProblemsTable from './ProblemsTable'
const Main = styled.div	`
	margin-top: 75px;
	width: 70%;
	display: flex;
	flex-direction: column;
    align-content: center;
    align-items: center;

`

const Problems = () => {
	return (
		<Main>
			<SearchSpace/>
			<ProblemsTable/>
		</Main>
	)
}

export default Problems;