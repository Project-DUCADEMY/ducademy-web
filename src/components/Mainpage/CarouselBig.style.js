import styled from "styled-components"

export const Carousel = styled.div`
    position:relative;
`

export const CarouselWrapper = styled.div`
    overflow:hidden;
    width:100vw;
    height:100vh;
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
`

export const CarouselMove = styled.div`
    position:absolute;
    width: 300px;
    height: 100%;
    top:0px;
    right:${(props)=>(props.Right)};
    display:flex;
    justify-content:center;
    align-items:center;
    cursor:pointer;
    img{
        transition:transform 0.2s;
        user-select:none;
        fill:gray;
    }
    :hover{
        img{
            transform:scale(1.3);
        }
    }
`
