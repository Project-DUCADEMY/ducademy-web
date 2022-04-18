import { useEffect, useState } from 'react'
import styled from 'styled-components'
import TestPaper from './TestPaper'
const Main = styled.div`
    position: relative;
    top: 50px;
    width: 100%;
    display: flex;
    justify-content: center;
`
const TestPaperContainer = styled.div`
    display: flex;
    flex-wrap: wrap;
    gap: 100px;
    position: relative;
    top: 100px;
    width: 80%;
    height: 120vh;
    justify-content: center;

`
const Render = () => {
    const [getClickTestPaper, setClickPaper] = useState(null)
    const Test = [1]
    // useEffect(() => {
    //     console.log(getClickTestPaper)
    // }, [getClickTestPaper])
    return (
        <Main>
            <TestPaperContainer>
                {
                    Test.map((element, idx) => {
                        return <TestPaper
                            key={idx}
                            idx={idx + 1}
                            click={[getClickTestPaper, setClickPaper]}
                        />
                    })
                }
            </TestPaperContainer>
        </Main>
    )
}

export default Render
