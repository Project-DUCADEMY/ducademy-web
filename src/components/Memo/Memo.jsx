import styled from 'styled-components'
const Memo = styled.div`

   height: ${({Size}) => Size}px;
   min-width: ${({Size}) => Size}px;
   max-width: ${({Size}) => Size}px;
   transform: rotate(${({Tilt}) => Tilt}deg);
   position:relative;
   background:#fff44f;
   overflow:hidden;
   margin:10px auto;
      inset 0 -40px 40px rgba(0,0,0,0.2),
      0 5px 6px 5px rgba(0,0,0,0.2);
   font-family: 'Permanent Marker', cursive;
   font-size:19px;
   -webkit-mask-image: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAIAAACQd1PeAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAA5JREFUeNpiYGBgAAgwAAAEAAGbA+oJAAAAAElFTkSuQmCC);
   color:#130d6b;
   transition: all 0.3s;
   cursor: pointer;
   :hover{
      transform: rotate(0deg);
      height: ${({Size}) => Size * 1.2}px;
      min-width: ${({Size}) => Size * 1.2}px;
      max-width: ${({Size}) => Size * 1.2}px;
   }  
   padding:20px;
   border-radius:0 0 0 30px/45px;

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
   return (
   <Memo 
      Size={props.Size}
      Tilt={props.Tilt}
   >
   <Flutter/>
      <Pin/>
      {
         props.message
      }
   <UnderLine/>
   </Memo>)
}


export default render;
