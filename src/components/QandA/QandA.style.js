import styled from "styled-components"

export const Container = styled.div`
    /* width:100vw; */

    display:flex;
    height:100vh;
    flex-direction:column;
    align-items:center;

    
    /* height:3000px; */
    /* overflow-y:hidden; */
`
export const temp = styled.div`
    width:100%;
    height:120px;
    background-color:white;
`
export const Wrapper = styled.div`
    width:85vw;
    /* height:100%; */
    background-color:white;
    display:flex;
    flex-direction:column;
`

export const MyQContainer = styled.div`
    width:100%;
    height:310px;
    overflow-x:scroll;
    /* margin-top:100px; */

    ::-webkit-scrollbar{
        width:15px;
    }
    ::-webkit-scrollbar-thumb{
        height: 17%;
        background: #C4C4C4;
        border-radius: 15px;
    }
    ::-webkit-scrollbar-track{
        background: #f4f4f4;
        border-radius: 15px;
    }

`
export const MyQWrapper = styled.div`
    margin:auto;
    background-color:white;
    width:fit-content;
    display:flex;
    align-items:center;
`

export const tempMyQ = styled.div`
    height:250px;
    width:20px;
`

export const MyQ = styled.article`
    width:350px;
    height:250px;
    box-shadow: 4px 4px 15px 0px #0000001A;
    margin-top:7px;
    margin-right:40px;
    border-radius:20px;
    padding:30px;
    padding-top:5px;
    padding-bottom:10px;
    box-sizing:border-box;
    position:relative;
    section{
        text-overflow:ellipsis;
        overflow:hidden;
        height:180px;
        p{
        color:darkgray;
        line-height:24px;
        
        }
    }
    
`



export const PlusCard = styled.div`
    width:350px;
    height:250px;
    background-color:#3fe2a6;
    border-radius:20px;
    display:flex;
    justify-content:center;
    align-items:center;
    cursor:pointer;
    color:white;
    box-shadow: 4px 4px 15px 0px #0000001A;

    p{
        width:170px;
        word-break:keep-all;
        line-height:28px;
        letter-spacing:1px;
        font-weight:bold;
    }
    img{
        width:140px;
    }
`

export const MyQFoot = styled.div`
    position:absolute;
    bottom:2px;
    left:0px;
    border-radius:0px 0px 20px 20px;
    width:100%;
    box-sizing:border-box;
    display:flex;
    justify-content:space-between;
    align-items:center;
    padding:20px;
`

export const Category = styled.div`
    display:flex;
    align-items:center;
    div{
        box-shadow: 4px 4px 15px 0px #0000001A;
        border-radius:20px;
        margin-left:10px;
        padding:20px;
        padding-top:6px;
        padding-bottom:6px;
        font-size:13px;
        cursor:pointer;
        :hover{
            color:white;
            background-color:#3fe2a6;
        }
    }
`

export const MyQFootMenu = styled.div`
    width:100px;
    height:30px;
    background-color:blue;
    display:flex;
    justify-content:flex-end;
    align-items:center;
`

export const NewQContainer = styled.div`
    width:100%;
    margin-top:100px;
`

export const NewQMenu = styled.div`
    width:100%;
    /* height:70px; */
    /* background-color:blue; */
    /* margin-top:100px; */
    display:flex;
    align-items:center;
    div{
        height:50px;
        width:130px;
        display:flex;
        justify-content:center;
        align-items:center;
        border-radius: 15px 15px 0px 0px;
        box-shadow: 4px 0px 15px 0px #0000001A;
        /* box-shadow: 4px 4px 15px 0px #0000001A; */
        cursor:pointer;
        margin-right:10px;
        font-weight:bold;
    }
`

export const NewQWrapper = styled.div`
    display:flex;
    flex-direction:column;
    width:100%;
    /* height:50px; */
    /* background-color:#3fe2a6; */
    border-radius:0px 15px 15px 15px;
    box-shadow: 4px 4px 15px 0px #0000001A;
    div{
        padding-left:25px;
        height:60px;
        display:flex;
        align-items:center;
    }
    div:hover{

    }
`