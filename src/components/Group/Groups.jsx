import styled from 'styled-components'
import GroupsTable from './GroupsTable'
import SearchSpace from './SearchSpace'


const Main = styled.div	`
	margin-top: 75px;
	width: 70%;
	display: flex;
	flex-direction: column;
    align-content: center;
    align-items: center;
`
const MainWrapper = styled.div	`
	display: flex;
	flex-direction: column;
	align-items: center;
	height: 100%;
`

const Groups = () => {
    return (
        <MainWrapper>
            <Main>
                <SearchSpace />
                <GroupsTable />
            </Main>
        </MainWrapper>
    )
}

export default Groups
