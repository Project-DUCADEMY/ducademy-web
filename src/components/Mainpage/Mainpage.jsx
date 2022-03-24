import * as M from "./Mainpage.style"
import {useState} from "react"


const Mainpage = () => {
	// const temp =["green","blue","red"]
	const [carouselMenus,setCarouselMenus] = useState([
		{
			id:1,
			color:"green"
		},{
			id:2,
			color:"blue"
		},{
			id:3,
			color:"yellowgreen"
		}
	])
	const [location,setLocation] = useState(1);
	const goToRight = () => {

	}
	
	return (
		// <M.MainContainer>
		// 	<div>
		// 	<M.CarouselContainer>
		// 		{
		// 			carouselMenus.map((i,idx)=>(
		// 				<M.Inner backgroundColor={i.color} key={idx}>

		// 				</M.Inner>
		// 			))
		// 		}
		// 	</M.CarouselContainer>
		// 	</div>
			
			
		// 	{/* {
		// 		carouselMenus.map((i,idx)=>(
		// 		))
		// 	} */}
			
		// </M.MainContainer>
		<M.MainContainer>
			
		</M.MainContainer>
	)
}

export default Mainpage;