import styled from 'styled-components'
import { ReactComponent as Icon } from '../../assets/image/DUCAMI.svg'
const Main = styled.footer`
    display: flex;
    box-sizing: border-box;
    justify-content: space-between;
    align-items: center;
    width: 100%;
    height: 100px;
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
    color: #c8c8c8;
    font-size: 15px;
`
const LinkText = styled.a`
    font-size: 15px;
    color: #c8c8c8;
    text-decoration: underline;
`

const Logo = styled(Icon)`
    height: 50%;
    width: 30%;

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
                <Text>
                    주소 : 대구광역시 달성군 구지면 창리로11길 93 기숙사동 1층
                </Text>
                <Text>
                    Github : <LinkText href='https://github.com/Project-DUCADEMY'>https://github.com/Project-DUCADEMY</LinkText>
                </Text>
            </TextBox>
            <Logo></Logo>
        </Main>
    )
}

export default Footer