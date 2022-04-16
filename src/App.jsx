import styled from 'styled-components'
import AppRouter from './AppRouter';
const AppStyle = styled.div`
	margin-top: 75px;
	// display:flex;
	// flex-direction: column;
	// align-items: center;
	height: 100%;
`
const Background = styled.div`
	width: 100%;
	height: 100vh - 75px;
	margin-top: 75px;
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: center;
	background-color: white;
`
const App = () => {
	return (
		<Background>
			<AppRouter/>
		</Background>
	)
}
export default App