import styled from 'styled-components'
import SearchSpace from './SearchSpace'
import ProblemsTable from './ProblemsTable'


import axios from 'axios'
import { useEffect } from 'react'
const Main = styled.div	`
	margin-top: 75px;
	width: 70%;
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
		<MainWrapper>
			<Main>
				<SearchSpace/>
				<ProblemsTable/>
			</Main>
		</MainWrapper>
	)
}

export default Problems;