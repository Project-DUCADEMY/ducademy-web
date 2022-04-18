import styled from "styled-components"

export const Carousel = styled.div`
    position:relative;
`

export const CarouselWrapper = styled.div`
    overflow:hidden;
    width:100vw;
    height:97vh;
    position:relative;
`

export const CarouselContainer = styled.div`
    width:${(props)=>(props.containerWidth+"vw")};
    transform:translate(${(props) => (props.translatePosition+"vw")});
    height:100vh;
    transition:transform 0.7s;
`

export const carouselMenu = styled.div`
    width:${(props) => (props.carouselScale+"vw")};
    height:100vh;
    float:left;
    filter:brightness(70%);

`

export const CarouselMove = styled.div`
    position:absolute;
    width: 300px;
    height: 50%;
    /* top:0px; */
    top:25%;
    right:${(props)=>(props.Right)};
    display:flex;
    justify-content:center;
    align-items:center;
    cursor:pointer;
    img{
        transition:transform 0.2s;
        user-select:none;
        fill:white;
        
    }
    /* :hover{
        img{
            transform:scale(1.3);
        }
    } */
`

export const CarouselDown = styled.div`
    position:absolute;
    width:200px;
    height:200px;
    bottom:0px;
    left:45vw;
    display:flex;
    flex-direction:column;
    justify-content:space-around;
    align-items:center;
    cursor:pointer;
`
