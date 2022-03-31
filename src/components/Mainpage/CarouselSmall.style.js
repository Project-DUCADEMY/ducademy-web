import styled from "styled-components"

export const Carousel = styled.div`
    position:relative;
    margin-top:150px;
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
        user-select:none;
        fill:gray;
    }
    cursor:pointer;
    :hover{
        img{
            transform:scale(1.3)
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
        transition:transform 0.1s;
        user-select:none;
        /* transform:rotate(180deg) */
    }
    cursor:pointer;
    :hover{
        img{
            transform:scale(1.3);
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
    background-color:${(props)=>(props.paintCurrent ? "#878787" : "#DDDDDD")};
`