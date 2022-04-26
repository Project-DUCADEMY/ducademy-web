import styled from 'styled-components'
import { palette } from '../../style/palette'
import { useNavigate } from 'react-router-dom'
const Book = styled.div`
	display: flex;
	width: 280px;
	height: 420px;
	padding: 18px 22px;
	background: ${props => props.background};
	border-radius: 20px 16px 12px 32px;
	box-sizing: border-box;
	flex-direction: column;
    align-items: flex-end;
	transition: box-shadow ease-in-out 0.15s, transform ease-in-out 0.15s;
	position: relative;
	cursor: pointer;	
	&:hover {
		box-shadow: 2px 6px 20px 0px #111111;
		transform: scale(1.03);
	}
`
const TextBox = styled.div`
	display: flex;
	border-radius: 20px;
	height: 8%;
	position: relative;
	text-align: center;
    align-items: center;
`
const Title = styled(TextBox)`
	background-color: ${props => props.back};
	width: 65%;
	margin-right: 20px;
	margin-top: 20px;
`
const Author = styled(TextBox)`
	background-color: ${props => props.back};
	margin-top: 10px;
	width: 65%;
`
const UniqueNumber = styled(TextBox)`
	background-color: ${props => props.back};
	top: 55%;
	width: 40%;
	overflow: auto;
`
const TextWrapper = styled.div`
	position: relative;
	overflow: hidden;
	text-overflow: ellipsis;
	white-space: nowrap;
	left: 10px;
	height: 70%;
	width: calc(100% - 20px);
`
const BookBack = styled.div`
	width: 50px;
	height: 100%;
	position: absolute;
	background: ${props => props.back};
	border-top-left-radius: 20px;
	border-bottom-left-radius: 32px;
	box-shadow: 2px 0px 10px -5px black;
	left: 0px;
	top: 0px;
`
const BookBottom = styled.div`
	margin-top: auto;
	height: 50px;
	width: 270px;
	background: white;
	border-radius: 32px 4px 4px 32px;
	box-shadow: inset 4px 6px 0px 0px #E4E0CE;  
	position: absolute;
	bottom: 18px;
	right: 0px;
	background-image: linear-gradient(to bottom, transparent 6px, #E4E0CE 8px, transparent 8px, transparent 12px, #E4E0CE 12px, transparent 14px, transparent 18px,#E4E0CE 18px, transparent 20px, transparent 24px, #E4E0CE 24px, transparent 26px, transparent 30px, #E4E0CE 30px, transparent 32px, transparent 36px, #E4E0CE 36px, transparent 38px, transparent 42px, #E4E0CE 42px, transparent 44px, transparent 48px, #E4E0CE 48px, transparent 50px);
`
//https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.chess.com%2Fko%2Fterms%2Fchess-ko&psig=AOvVaw1FzJjSj38iX7W6IhSQypAa&ust=1649121349223000&source=images&cd=vfe&ved=0CAsQjRxqFwoTCJjrgPSd-fYCFQAAAAAdAAAAABAD
const Workbook = ({color, owner, title, Redirect}) => {
	const navigate = useNavigate()
	const redirectToProblems = (id) => {
		navigate(`/problems/?workbook=${id}`)
	}

	const back = '#' + (Number('0x' + color.replace('#', '')) - 1118481).toString(16)
	const background = color;
	return (
		<Book back={back} background={background} onClick={() => redirectToProblems(Redirect)}>
			<BookBack back={back}></BookBack>
			<Title back={back}><TextWrapper>{title}</TextWrapper></Title>
			{/* <Author back={back}><TextWrapper></TextWrapper></Author> */}
			<UniqueNumber back={back}><TextWrapper>{owner}</TextWrapper></UniqueNumber>
			<BookBottom></BookBottom>
		</Book>
	)
}
export default Workbook;