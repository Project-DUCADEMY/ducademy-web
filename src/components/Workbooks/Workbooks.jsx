import styled from 'styled-components'

import Workbook from './Workbook'
const Main = styled.div`
	position: relative;
	top: 400px;
	left: 200px;
	width: 0px;
`
const Workbooks = () => {
	return (
		<Main>
			<Workbook/>
		</Main>
	)
}

export default Workbooks;