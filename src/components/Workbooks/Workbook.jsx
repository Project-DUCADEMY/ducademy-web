import styled from 'styled-components'
const Background = styled.div`
	width: 100%;
	height: (100vh - 52px);
	display: flex;
	align-items: center;
	justify-content: center;
	background-color: white;
	margin-top: 52px;
`
const BookShelf = styled.div`
	display: flex;
	flex-direction: row;
	flex-wrap: wrap;
	box-sizing: border-box;
	padding: 18px 22px;
	width: 700px;
	border: 1px solid black;
`
const Book = styled.div`
	width: 280px;
	box-sizing: border-box;
	padding: 18px 22px;
	height: 420px;
	background: #F33139;
	border-radius: 20px 16px 12px 32px;
	background-image: linear-gradient(to right,#D11F2F 48px, #ba0716 50px, transparent 50px);  
	display: flex;
    flex-direction: column;
    align-items: flex-end;
	transition: box-shadow ease-in-out 0.15s, transform ease-in-out 0.15s;
	&:hover {
		box-shadow: 2px 6px 20px 0px #FEA600;
		transform: scale(1.05);
	}
	&:after {
		content: "";
		margin-top: auto;
		margin-left: auto;
		height: 50px;
		width: 270px;
		background: white;
		border-radius: 32px 4px 4px 32px;
		box-shadow: inset 4px 6px 0px 0px #E4E0CE;  
		background-image: linear-gradient(to bottom, transparent 6px, #E4E0CE 8px, transparent 8px, transparent 12px, #E4E0CE 12px, transparent 14px, transparent 18px,#E4E0CE 18px, transparent 20px, transparent 24px, #E4E0CE 24px, transparent 26px, transparent 30px, #E4E0CE 30px, transparent 32px, transparent 36px, #E4E0CE 36px, transparent 38px, transparent 42px, #E4E0CE 42px, transparent 44px, transparent 48px, #E4E0CE 48px, transparent 50px);
	}
`
const TextBox = styled.div`
	background-color: #D11F2F;
	border-radius: 20px;
	height: 8%;
	text-align: center;
	position: relative;
	display: flex;
    align-items: center;
    align-content: center;
`
const Title = styled(TextBox)`
	width: 65%;
`
const Author = styled(TextBox)`
	width: 65%;
`
const UniqueNumber = styled(TextBox)`
	width: 20%;
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
//https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.chess.com%2Fko%2Fterms%2Fchess-ko&psig=AOvVaw1FzJjSj38iX7W6IhSQypAa&ust=1649121349223000&source=images&cd=vfe&ved=0CAsQjRxqFwoTCJjrgPSd-fYCFQAAAAAdAAAAABAD
const Workbook = () => {
	return (
		<Book>
			<Title><TextWrapper>중1 수학 예상 기출 문제집</TextWrapper></Title>
			<Author><TextWrapper>1tchlvzskf</TextWrapper></Author>
			<UniqueNumber><TextWrapper>100</TextWrapper></UniqueNumber>
		</Book>
	)
}
export default Workbook;