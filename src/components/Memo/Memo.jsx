
import styled, { css } from 'styled-components'
const Memo = styled.div`

   height: ${({Size}) => Size}px;
   min-width: ${({Size}) => Size}px;
   max-width: ${({Size}) => Size}px;
   transform: rotate(${({Tilt}) => Tilt}deg);
   position:relative;
   right: 20px;
   bottom: 20px;
   background:#fff44f;
   overflow:hidden;
      inset 0 -40px 40px rgba(0,0,0,0.2),
      0 5px 6px 5px rgba(0,0,0,0.2);
   font-family: 'Permanent Marker', cursive;
   font-size:19px;
   color:#130d6b;
   transition: all 0.4s;
   padding:20px;
   border-radius:0 0 0 30px/45px;
   ${({Clicked}) => {
      return Clicked ? 
      css`
         box-sizing: border-box;
         position: absolute;
         left: 50%;
         top: 50%;
         z-index: 1000;
         overflow: auto;
         outline: 0;
         transform: rotate(0deg) scale(3) translate(calc(-50% + 50px), calc(-50% + 50px));
      `:
      css`
      :hover{
         cursor: pointer;
         transform: rotate(0deg) scale(1.2);
      }  
      `
   }}
   
`
const EmptyMemo = styled(Memo)`

`
const MemoWrapper = styled.div`
   height: ${({Size}) => Size}px;
   min-width: ${({Size}) => Size}px;
   max-width: ${({Size}) => Size}px;
   margin: 10px auto;
   padding: 20px;

`
const Flutter = styled.div`
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
`
const UnderLine = styled.div`
   content:"";
   display:block;
   position:absolute;
   width:75%;
   height:20px; 
   border-top:3px solid #130d6b;
   border-radius: 40% ;
   top:50px;
   left:10%;
`
const Pin = styled.div`

`
const render = (props) => {
   if(props.Idx === props.Modal) {
      console.log(props.Idx)
   }
   return (
   <MemoWrapper Size={props.Size}>
   <Memo 
      Size={props.Size}
      Tilt={props.Tilt}
      onClick={() => {props.Modal[1](props.Idx); console.log(props.Idx)}}
      Clicked={props.Idx === props.Modal[0]}
   >
      {
         props.message
      }
      <Flutter/>
      <UnderLine/>
   </Memo>
   </MemoWrapper>)
}


export default render;
