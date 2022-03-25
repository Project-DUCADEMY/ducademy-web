import styled from 'styled-components'
import AppRouter from './AppRouter';
const AppStyle = styled.div`
	display:flex;
	flex-direction: column;
	align-items: center;
`
const App = () => {
	return (
		<AppStyle>
			<AppRouter/>
		</AppStyle>
	)
}
export default App