import styled from 'styled-components'
import SearchSpace from './SearchSpace'

import LeftFunctionBar from './LeftFunctionBar'
import RightFunctionBar from './RightFunctionBar'
import WhiteBoard from './WhiteBoard'



import axios from 'axios'
import { useEffect, useState } from 'react'

const Main = styled.div	`
	margin-top: 75px;
	width: 70%;
	height: 100%;
	display: flex;
	flex-direction: column;
    align-content: center;
    align-items: center;
`
const MainWrapper = styled.div	`
	display:flex;
	flex-direction: column;
	align-items: center;
	height: 100vh;
`


const FunctionWrapper = styled.div`
	display: flex;
	margin-top: 50px;
	width: 110%;
	height: 90%;
	align-items: flex-end;
	justify-content: space-evenly;
`
const PenWrapper = styled.div`
	width: 100px;
`

const Memos = () => {
	const [getDragOver, setDragOver] = useState('')


	return (
		<MainWrapper>
			<Main>
				<FunctionWrapper>
					<LeftFunctionBar DragOver={[getDragOver, setDragOver]}/>
					<WhiteBoard getDragOver={getDragOver}/>					
					<RightFunctionBar/>
				</FunctionWrapper>
			</Main>
			
		</MainWrapper>
	)
}

export default Memos;