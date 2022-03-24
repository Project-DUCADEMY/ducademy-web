import styled,{css} from 'styled-components'

export const MainContainer = styled.div`
width:100%;
display:flex;
flex-direction:column;
align-items:center;
`
export const CarouselContainer = styled.div`
/* width:3600px; */
width:3600px;
/* width:fit-content; */
height:618px;
margin-top:60px;
border-radius:20px;

transition:translate 0.5s;

overflow-y:hidden;
`

export const Inner = styled.div`
width:1200px;
height:618px;
background-color:${(props) => (props.backgroundColor)};
float:left;
`



