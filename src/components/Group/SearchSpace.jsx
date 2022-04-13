import styled from 'styled-components'
import { useState } from 'react'
import '../../assets/fonts/Nanum_Gothic_Coding.css'
const Main = styled.div`
	width: 100%;
	display: flex;
    align-items: center;
    justify-content: space-between;
    margin-bottom: 20px;
`
const OpctionsWrapper = styled.div`
	display: flex;
	align-items: center;
	justify-content: space-around;
	width: 350px;
	height: 50px;
`
const SearchBarWarpper = styled.div`
	display: flex;
    flex-direction: row;
    align-items: center;
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
	cursor: pointer;
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
    background-color: ${({clicked}) => clicked ? '#DCEDC8' : ''};
    :hover{
    	background-color: #DCEDC8;
    }
`
const opctions = [
	'전체',
	'내 그룹',
	'그룹 창설',
]
const SearchSpace = () => {
	const [getOnOver, setOnOver] = useState(false)
	const [getCurrentOpction, setCurrentOpction] = useState('전체')

	return (
		<Main>
			<OpctionsWrapper>
			{
				opctions.map((element, idx) => {
					return <Opction 
						key={idx} 
						clicked={getCurrentOpction === element}
						onClick={() => {setCurrentOpction(element)}}>
						{element}</Opction>
				})
			}
			</OpctionsWrapper>
			<SearchBarWarpper>
				<SearchBar/>
				<SubmitButton/>
			</SearchBarWarpper>
		</Main>
	)
}
export default SearchSpace