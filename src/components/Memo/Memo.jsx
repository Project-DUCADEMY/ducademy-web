import styled from 'styled-components'
const Memo = styled.div`
  width: 18%;
  height: 220px;
  position:relative;
  background:#fff44f;
  overflow:hidden;
  margin:30px auto;
  padding:20px;
  border-radius:0 0 0 30px/45px;
  box-shadow:
    inset 0 -40px 40px rgba(0,0,0,0.2),
    0 5px 6px 5px rgba(0,0,0,0.2);
  font-family: 'Permanent Marker', cursive;
  font-size:19px;
  -webkit-mask-image: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAIAAACQd1PeAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAA5JREFUeNpiYGBgAAgwAAAEAAGbA+oJAAAAAElFTkSuQmCC);
  color:#130d6b;
   &:before {
      content:"";
      display:block;
      position:absolute;
      width:20px;
      height:25px;
      background:#ffa;
      box-shadow:
       3px -2px 10px rgba(0,0,0,0.2),
       inset 15px -15px 15px rgba(0,0,0,0.3);
      left:0;
      bottom:0;
      z-index:2;
      transform:skewX(25deg);
   }
   .post-it:after {
      content:"";
      display:block;
      position:absolute;
      width:75%;
      height:20px; 
      border-top:3px solid #130d6b;
      border-radius: 50% ;
      bottom:0px;
      left:10%;
   }
`

const render = () => {
   return (
      <Memo></Memo>
   )
}

export default render;
