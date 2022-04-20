import styled from "styled-components"

export const Main = styled.div`
	width: 950px;
	background-color: grey;
	height: 700px;
	display: flex;
   	flex-direction: column;
    align-content: center;
    align-items: center;
    justify-content: space-evenly;
`
export const TextEditorWrapper = styled.div`
	border: 2px solid gray;
	padding: 2px;
	width:900px;
	height: 600px;
	background-color: white; 
`
export const InputTheme = styled.input`
	outline: none;
	border: 0; 
	box-shadow: 0 0 0 2px #C4C4C4;
	height: 25px;
	font-size: 14px;
`
export const TitleInput = styled(InputTheme)`
	width: 580px;
`
export const CategoryInput = styled(InputTheme)`
	width: 280px;
`
export const InputContainer = styled.div`
	display: flex;
	justify-content: space-between;
	width: 900px;
`
export const IntroduceContent = styled.div`
  position: relative;
  border: 0.0625rem solid #d7e2eb;
  border-radius: 0.75rem;
  overflow: hidden;
  padding: 1.5rem;
  width: 50%;
  margin: 0 auto;
  margin-bottom: 4rem;
`;