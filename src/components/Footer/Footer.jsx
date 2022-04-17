import styled from 'styled-components'
import {ReactComponent as Icon} from '../../assets/image/DUCAMI.svg'
const Main = styled.footer`
    display: flex;
    box-sizing: border-box;
    justify-content: space-between;
    align-items: center;
    width: 100%;
    height: 100px;
    color: #c8c8c8;
    background-color: #222222;
    padding: 18px 22px;
    margin-top: 25%;
    border-top: 5px solid black;
    font-size: 15px;
`
const TextBox = styled.div`
    display: flex;
    flex-direction: column;

`
const Text = styled.span`
    font-size: 15px;
`

const Logo = styled(Icon)`
    height: 50%;
    width: 30%;
    fill: red;
`
const Footer = () => {
    return (
        <Main>
            <TextBox>
                <Text>
                    대구소프트웨어마이스터고등학교 DUCAMI
                </Text>
                <Text>
                    대표자명 : 김건호
                </Text>
            </TextBox>
                <Logo></Logo>
        </Main>
    )
}

export default Footer