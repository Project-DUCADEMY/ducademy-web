import styled from 'styled-components'
import { theme as InfoCardTheme } from './InfoCard'
const Card = styled.div`
	background-color: #fbfbfb;
	border : 1px solid #dcdcdc;
	box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
  	display: flex;
  	flex-direction: column;			
  	align-content: center;
  	align-items: center;
  	justify-content: space-evenly;
  	position: relative;
    flex-shrink: 1;
    flex-grow: 1;
	min-width : 1000px;
	max-width : 2000px;
    flex-basis: 200px;
`

// const Card = styled(InfoCardTheme)`
// 	min-width: 500px;
// 	max-width: 850px;
//     flex-basis: 650px;
// `

const render = () => {
	return (
		<Card></Card>
	)
}
// export default render
export default Card
