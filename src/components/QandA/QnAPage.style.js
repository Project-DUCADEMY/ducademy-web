import styled from "styled-components"

export const Wrapper = styled.section`
    background-color:#f4f4f4;
    min-height:100vh;
    width:100%;
    min-width:800px;
    display:flex;
    flex-direction:column;
    align-items:center;
`
export const QuestionWrapper = styled.div`
    width:60%;
    min-width:800px;
    min-height:500px;

    background-color:white;
    margin-top:100px;
    border-radius:20px;
    box-shadow: 4px 4px 15px 0px #0000001a;
    display:flex;
    flex-direction:column;
    padding:70px;
    box-sizing:border-box;

    @media (max-width:1000px){
        padding-right:40px;
        padding-left:40px;
    }

    /* align-items:center; */
    > article{
        > h2{
            margin-top:0px;
            /* padding:0px 85px 0px 85px; */
        }
        > p{
            /* padding:0px 85px 0px 85px; */
            line-height:25px;
            word-spacing:1px;
            letter-spacing:0.3px;
        }
    }
`

export const AnswerWrapper = styled.article`
    /* background-color:bluse; */
    /* height:1000px; */
    width: 60%;
    min-width:800px;
    margin-top:100px;
    margin-bottom:100px;
` 


export const AnswerContainer = styled.div`
    /* background-color:yellowgreen; */
    width:100%;
    margin-bottom:40px;
    float:right;
    >div{
        float:${(props)=>(props.isRight ?
        "right":"left")};
        width:60%;
        /* min-height:300px; */
        background-color:white;
        border-radius:15px;
        box-shadow: 4px 4px 15px 0px #0000001a;
        /* padding:40px 40px 30px 40px; */
        padding:30px;
        box-sizing:border-box;
        display:flex;
    }
`


export const AnswerRecommand = styled.div`
width:40px;
//가로 임시
padding-left:20px;
margin-left:20px;
/* display:flex;
justify-content:center;
align-items:center; */
border-left:solid #f4f4f4 2px;
`

export const AnswerContent = styled.p`
    margin:0px;
    margin-bottom:40px;
`

export const AnswerInfo = styled.header`
    display:flex;
    justify-content:space-between;
    >div{
        font-size:14px;
    }
`
