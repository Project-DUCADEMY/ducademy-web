import styled from 'styled-components'
const Box = styled.div`
	background-color: #fbfbfb;
	border : 1px solid #dcdcdc;
	box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
	display: flex;
	box-sizing: border-box;
	justify-content: center;
	word-break: break-all;
	flex-wrap: wrap;
    `
const Main = styled(Box)`
    position: absolute;
    width: 50%;
    height: 60%;
    left: 50%;
    top: 50%;
    z-index: 1000;
    overflow: auto;
    outline: 0;
    transform: translate(-50%, -50%);
    /* translate(calc(-50% + 50px), calc(-50% + 50px)); */
    display: ${(props) => (props.visable ? 'block' : 'none')};
`
const Container = styled.div`
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
`
const RGBContainer = styled.div`
    width: 100%;
    height: 10%;
    display: flex;
    justify-content: space-around;
`
const RGBWrapper = styled.div`
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
`
const RGBColor = styled.div`
    width: 20px;
    height: 20px;
    background-color: ${props => props.color};
    border-radius: 50%;
`
const InputTheme = styled.textarea`
    resize: none;
    box-sizing: border-box;
    padding: 12px 10px;
    width: 80%;
    height: 80%;
    font-size: 14px;
    background-color: #ffffff;
    border: 1px solid #ccc;
    outline: none;
    transition: box-shadow ease-in-out .15s, border-color ease-in-out .15s;
    &:focus {
        box-shadow: 0 0 2px #c9c9c9;
        border-color: #bbb;
    }
`

const BoxText = styled.h2`
    text-align: center;
`
const Render = ({visable}) => {
    return(
        <Main visable={visable}>
            <Container>
                <BoxText>메모 등록</BoxText>
                <InputTheme></InputTheme>
                <RGBContainer>
                    <RGBWrapper>
                        <RGBColor color={'red'}></RGBColor>
                    </RGBWrapper>
                    <RGBWrapper>
                        <RGBColor color={'limegreen'}></RGBColor>
                    </RGBWrapper>
                    <RGBWrapper>
                        <RGBColor color={'blue'}></RGBColor>
                    </RGBWrapper>
                </RGBContainer>
            </Container>
        </Main>
    )
}
export default Render;