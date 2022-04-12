import styled from 'styled-components'
import SearchSpace from './SearchSpace'

const Background = styled.div`
	width: 100%;
	height: 100vh - 52px;
	display: flex;
	align-items: center;
	justify-content: center;
	background-color: white;
	margin-top: 52px;
`
const MainWrapper = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
`
const Main = styled.div`
    box-sizing: border-box;
    padding: 18px 22px;
    border: 1px solid black;
    width: 70%;
    height: 1000px;
`

const Groups = () => {
    return (
        <Background>
            <MainWrapper>
                <h1>그룹</h1>
                <Main>
                    <SearchSpace />
                </Main>
            </MainWrapper>
        </Background>
    )
}

export default Groups
