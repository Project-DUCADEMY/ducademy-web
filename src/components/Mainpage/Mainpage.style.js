import styled, { css } from "styled-components";

export const MainContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column; 
  align-items: center;
`;

export const Carousel = styled.div`
    position:relative;
    margin-top:100px;
`

export const CarouselWrapper = styled.div`
  overflow:hidden;
  width:1200px;
  height:618px;

  position:relative;

  border-radius:20px;

`

export const CarouselContainer = styled.div`
  
  width: ${(props)=>(props.containerWidth+"px")};
  height: 618px;
  border-radius: 20px;

  /* transform:translate(-2400px); */
  transform:translate(${(props) => (props.translatePosition+"px")});
  transition:transform 0.7s;
  
  div {
    width: 1200px;
    height: 618px;
    float: left;
  }
 
`;

export const CarouselLeft = styled.div`
    position:absolute;
    width:300px;
    height:100%;
    top:0px;
    display:flex;
    justify-content:center;
    align-items:center;

    img{
        margin-right:100px;
        transition:transform 0.2s;
    }
    cursor:pointer;
    :hover{
        img{
            transform:scale(1.5)
        }
    }

`
export const CarouselRight = styled.div`
    position:absolute;
    width:300px;
    height:100%;
    top:0px;
    right:0px;

    display:flex;
    justify-content:center;
    align-items:center;
    img{
        margin-left:100px;
        transition:transform 0.2s;
    }
    cursor:pointer;
    :hover{
        img{
            transform:scale(1.5);
        }
    }
`

export const CarouselChoseButtons = styled.div`
    margin-right:auto;
    margin-left:auto;

    display:flex;
    justify-content:center;

    margin-top:30px;

    div{
        /* background-color:#DDDDDD; */

        width:12px;
        height:12px;
        margin-right:14px;
        margin-left:14px;
        border-radius:100%;
        cursor:pointer;
    }
`

export const CarouselChoseButton = styled.div`
    width:12px;
    height:12px;
    margin-right:14px;
    margin-left:14px;
    border-radius:100%;
    cursor:pointer;
    background-color:${(props)=>(props.paintCurrent ? "#878787" : "#DDDDDD")}
`