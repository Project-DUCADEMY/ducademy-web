import styled from 'styled-components'

export const InfoTitle = styled.h2`
    /* display : block; */
`

export const Photo = styled.div`
    width : 190px;
    height : 100px;
    display: flex;
    align-items: center;
    /* justify-content: center; */
    
`

export const Img = styled.img`
    width: 100px;
    height: 100px;
    object-fit: cover;
    margin-top: 10px;
    border-radius: 40%;
`

export const Hr = styled.div`
    width : 100%;
    height : 3px;
    background-color : black;
`

export const InfoEditContainer = styled.div`
    width:100%;
    height:50%;
    display:flex;
    
`
export const PhotoChangeContainer = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    width : 600px;
    height : 100px;

`
export const Button = styled.button`
    width : 100px;
    height : 32px;
    /* display : inline; */
    text-align : center;
    color : black;
    background-color : #fff;
    border-color : gray;
    :hover{
        border-color : black;
    }
`

export const Label = styled.label`
    display: inline-block;
    padding: 20px 20px;
    color: black;
    background-color: white;
    height: 20px;
    border-color: black;
    border : 1.5px solid lightgray;
    font-size : 21px;
    align-items: center;
    justify-content: center;
    :hover{
        border-color : black;
    }
`

export const InputFile = styled.input`
    position: absolute;
    width: 0;
    height: 0;
    padding: 0;
    overflow: hidden;
    border: 0;
`