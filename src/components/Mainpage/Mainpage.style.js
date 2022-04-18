import { Link } from "react-router-dom";
import styled, { css } from "styled-components";

export const MainContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column; 
  align-items: center;

  overflow-x:hidden;
`;


export const Content = styled.div`
    /* background-color:#3fe2a6; */
    
    margin-top:250px;
    width:1200px;
    display:flex;
    flex-direction:column;
    /* justify-content:center; */
    /* align-items:center; */
`

export const explains =styled(Link)`
    padding:40px;
    padding-top:60px;
    padding-bottom:60px;
    /* margin-top:10px; */
    margin-bottom:40px;
    text-decoration:none;
    color:black;
    /* background-color:#DDDDDD; */
    display:flex;
    justify-content:space-between;
    align-items:center;
    border-radius:30px;

    :hover{
        /* background-color:#DDDDDD; */
        background-color:#3fe2a6;
        color:white;
    }
    :active{
        color:black;
    }
    :visited{

        text-decoration:none;
    }
    img{
        /* width:30%; */
        height:200px;
    }
    div{
        p{
            /* font-weight:200px; */
            font-size:20px;
        }
    }
`
export const Temp = styled.div`
    height:200px;
    width:100%;
`



