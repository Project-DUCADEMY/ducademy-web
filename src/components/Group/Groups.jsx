import styled from 'styled-components'
import GroupsTable from './GroupsTable'
import SearchSpace from './SearchSpace'
import PlusButton from '../common/PlusButton'

const Main = styled.div`
	width: 70%;
	display: flex;
	flex-direction: column;
    align-content: center;
    align-items: center;
    margin-top: 30px;
`
const MainWrapper = styled.div	`
	display: flex;
	flex-direction: column;
	align-items: center;
    margin-top: 75px;
`

const Groups = () => {
    return (
        <Main>
            <PlusButton url="/그룹추가"/>
            <SearchSpace />
            <GroupsTable />
        </Main>
    )
}

export default Groups
