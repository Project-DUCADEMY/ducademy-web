import styled from "styled-components"

export const Carousel = styled.div`
    position:relative;
`

export const CarouselWrapper = styled.div`
    overflow:hidden;
    width:100vw;
    height:100vh;
    /* background-color:blue; */
    position:relative;
`

export const CarouselContainer = styled.div`
    width:${(props)=>(props.containerWidth+"vw")};
    height:100vh;


`