import { useEffect, useState } from "react";
import ReactDOM from "react-dom";
import styled, { css } from "styled-components";

const Memo = styled.div`
   width: 90%;
   height: 90%;

   transform: rotate(${({ Tilt }) => Tilt}deg);
   position:relative;
   right: 15px;
   background:#fff44f;
   overflow:hidden;
      inset 0 -40px 40px rgba(0,0,0,0.2),
      0 5px 6px 5px rgba(0,0,0,0.2);
   font-family: 'Permanent Marker', cursive;
   font-size:19px;
   color:#130d6b;
   transition: transform 0.4s;
   padding:20px;
   border-radius:0 0 0 30px/45px;
   opacity: ${({ Dragged }) => (Dragged ? 0 : 1)};
   box-shadow: 4px 4px 15px 0px rgba(0, 0, 0, 0.4);
   ${({ Clicked }) => {
     return Clicked
       ? css`
           box-sizing: border-box;
           position: absolute;
           width: 18vh;
           height: 18vh;
           left: 50%;
           top: 50%;
           z-index: 1000;
           overflow: auto;
           outline: 0;
           transform: rotate(0deg) scale(3)
             translate(calc(-50% + 50px), calc(-50% + 50px));
         `
       : css`
           :hover {
             cursor: pointer;
             transform: rotate(0deg) scale(1.2);
           }
         `;
   }}

   &:before{
      content:"";
      display:block;
      position:absolute;
      width:20px;
      height:25px;
      background:#ffa;
      box-shadow:
         3px -2px 10px rgba(0,0,0,0.1),
         inset 15px -15px 15px rgba(0,0,0,0.3);
      left:0;
      bottom:0;
      z-index:2;
      transform:skewX(25deg);
   }
   &:after{
      content:"";
      display:block;
      position:absolute;
      width:75%;
      height:20px; 
      border-top:3px solid #130d6b;
      border-radius: 40% ;
      top:50px;
      left:10%;
   }
   
`;

const MemoWrapper = styled.div`
  width: 175px;
  height: 175px;
  margin: 10px auto;
  padding: 20px;
`;
const DragPostit = styled(Memo)`
  height: 100px;
  min-width: 100px;
  max-width: 100px;
  opacity: 1;
  transform: scale(0.5);
`;

const Render = (props) => {
  const DragStartHandler = (event) => {
    props.Drag[1](props.Idx);
    const image = <DragPostit />;
    const ghost = document.getElementById("ghost");
    ghost.style.transform = "translate(-10000px, -10000px)";
    event.dataTransfer.setDragImage(ghost, 100, 100);
    ReactDOM.render(image, ghost);
  };
  const DragEndHandler = () => {
    props.Drag[1](null);
    ReactDOM.unmountComponentAtNode(document.getElementById("ghost"));
  };

  return (
    <MemoWrapper>
      <Memo
        Tilt={props.Tilt}
        onClick={() => {
          props.Modal[1](props.Idx);
        }}
        Clicked={props.Idx === props.Modal[0]}
        Dragged={props.Idx === props.Drag[0]}
        DragOver={props.DragOver}
        draggable={true}
        onDragStart={DragStartHandler}
        onDragEnd={DragEndHandler}
      >
        {props.message}
      </Memo>
    </MemoWrapper>
  );
};

export default Render;
