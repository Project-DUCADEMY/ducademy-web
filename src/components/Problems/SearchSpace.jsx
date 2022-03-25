import styled from 'styled-components'
import { useState } from 'react'
import '../../fonts/Nanum_Gothic_Coding.css'
const Main = styled.div`
	display: flex;
	justify-content: center;
    align-items: center;
`
const OpctionsWrapper = styled.div`
	display: flex;
	align-items: center;
	justify-content: space-around;
	width: 350px;
	height: 50px;
`
const SearchBarWarpper = styled.div`

`
const SearchBar = styled.input`
  	outline: none;
  	border: 0; 
  	box-shadow: 0 0 0 2px #C4C4C4;
	width: 150px;
	height: 20px;
`
const SubmitButton = styled.div`
	height: 26px;
	width: 26px;
	background-color: #00BFA5;
	margin-left: 1px;
	cursor: pointer
`
const Opction = styled.div`
	width: 80px;
	height: 50px;
	text-align: center;
	line-height: 50px;
	border-radius: 1px;
	font-size: 14px;
    font-family: 'Nanum Gothic Coding';
    cursor: pointer;
    :hover{
    	background-color: #DCEDC8;
    }
`
const opctions = [
	'추천',
	'전체',
	'오답',
	'단계'
]
const SearchSpace = () => {
	const [getOnOver, setOnOver] = useState(false)
	return (
		<Main>
			<OpctionsWrapper>
			{
				opctions.map((element, idx) => {
					return <Opction key={idx}>{element}</Opction>
				})
			}
			</OpctionsWrapper>
			<SearchBar/>
			<SubmitButton/>
		</Main>
	)
}
export default SearchSpace