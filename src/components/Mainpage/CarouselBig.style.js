import styled from "styled-components";

export const Carousel = styled.div`
  position: relative;
`;

export const CarouselWrapper = styled.div`
  overflow: hidden;
  width: 100vw;
  height: 97vh;
  position: relative;
`;

export const CarouselContainer = styled.div`
  width: ${(props) => props.containerWidth + "vw"};
  transform: translate(${(props) => props.translatePosition + "vw"});
  height: 100vh;
  transition: transform 0.7s;
`;

export const carouselMenu = styled.div`
  width: ${(props) => props.carouselScale + "vw"};
  height: 100vh;
  float: left;
  /* filter:brightness(70%); */

  display: flex;
  justify-content: center;
  align-items: center;

  div {
    /* background-color:blue; */
    width: 60%;
    height: 60%;
    margin-bottom: 100px;

    display: flex;
    justify-content: center;
    align-items: center;
    border-radius:15px;
    box-shadow: 4px 4px 15px 0px #0000001a;
    cursor:pointer;
    img {
      /* width: 60%; */
      height: 60%;
      user-select: none;
      margin-left:50px;
    }
    h2{
        margin-right:50px;
    }
    :hover{
        color:white;
        background-color:#3fe2a6;
    }
  }
`;


export const CarouselMenuContent = styled.div``


export const CarouselMove = styled.div`
  position: absolute;
  width: 300px;
  height: 50%;
  /* top:0px; */
  top: 25%;
  right: ${(props) => props.Right};
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  img {
    transition: transform 0.2s;
    user-select: none;
    fill: white;
    user-select: none;
  }
`;

export const CarouselDown = styled.div`
  position: absolute;
  width: 200px;
  height: 200px;
  bottom: 0px;
  left: 45vw;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
  cursor: pointer;
  user-select: none;
`;
