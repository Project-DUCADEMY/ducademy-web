import styled from 'styled-components'
const MyInfoBox = styled.div`
  	background-color: #fbfbfb;
	border : 1px solid #dcdcdc;
	box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
  	display: flex;
  	flex-direction: column;
  	display: flex;			
  	align-content: center;
  	align-items: center;
  	justify-content: space-evenly;
  	position: relative;
	height: 300px;
	min-width: 200px;
	max-width: 350px;
    flex-basis: 300px;
    flex-shrink: 1;
    flex-grow: 1;
`
const render = () => {
	return (
		<MyInfoBox></MyInfoBox>
	)
}
export default render
export { MyInfoBox as theme }