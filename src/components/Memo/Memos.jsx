import styled from 'styled-components'

import LeftFunctionBar from './LeftFunctionBar'
import RightFunctionBar from './RightFunctionBar'
import WhiteBoard from './WhiteBoard'

import axios from 'axios'
import { useEffect, useState } from 'react'

import PlusButton from "../common/PlusButton";


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
	width: 110%;
	height: 80%;
	align-items: flex-end;
	justify-content: space-evenly;
`


const Memos = () => {
	const [getDragOver, setDragOver] = useState('')


	return (
		<MainWrapper>
			<PlusButton url="/메모추가"/>
			<Main>
				<FunctionWrapper>
					<LeftFunctionBar DragOver={[getDragOver, setDragOver]}/>
					<WhiteBoard getDragOver={getDragOver}/>					
				</FunctionWrapper>
			</Main>
			
		</MainWrapper>
	)
}

export default Memos;