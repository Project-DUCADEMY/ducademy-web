import styled from 'styled-components'
import { theme as InfoCardTheme } from './InfoCard'
const Card = styled(InfoCardTheme)`
	min-width: 500px;
	max-width: 800px;
    flex-basis: 650px;
`
const render = () => {
	return (
		<Card></Card>
	)
}
export default render
