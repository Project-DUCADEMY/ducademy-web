import * as M from "./Mainpage.style"
import {useState,useEffect} from "react"

const Mainpage = () => {
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
		},{
			id:4,
			color:"yellowgreen"
		}
	])

	const [carouselNum,setCarouselNum] = useState(carouselMenus.length)
	const [carouselArray,setCarouselArray] = useState([])

	// 아래에 특정 인덱스로 이동할 수 있는 버튼
	useEffect(()=>{
		let tempArray = []
		for (let i =0;i<carouselNum;i++){
			tempArray.push(i)
		}
		setCarouselArray(tempArray)
	},[])

	const carouselScale = 1200;
	const [translatePosition,setTranslatePosition] = useState(0);
	function goToRight(){
		// 내용을 넘어가지 않도록
		if ((translatePosition-carouselScale) > -(carouselMenus.length * carouselScale)){
			setTranslatePosition(translatePosition-carouselScale)
		}

	}
	function goToLeft(){
		// 바꾸기 전 비교
		if ((translatePosition + carouselScale) <= 0){

			setTranslatePosition(translatePosition + carouselScale)
		}

	}

	// 캐러셀 인덱스에 따라 이동
	function moveCarousel(index){
		setTranslatePosition(index * (-carouselScale))
	}

	// 현재 위치에 따른 캐러셀인덱스 버튼의 색변화
	
	return (
		
		<M.MainContainer>
			<M.Carousel>

			<M.CarouselWrapper>
			<M.CarouselContainer 
			containerWidth={1200*(carouselMenus.length)}
			translatePosition={translatePosition}>
				{
					carouselMenus.map((menu) => (
						<div key={menu.id} style={{
							backgroundColor:menu.color
						}}>
							{menu.id}
						</div>
					))
				}
				
			</M.CarouselContainer>
			<M.CarouselLeft onClick={goToLeft}>
				<img alt="왼쪽으로" src="Mainpage/leftArrow.svg"/>
			</M.CarouselLeft>
			<M.CarouselRight onClick={goToRight}>
				<img alt="오른쪽으로" src="Mainpage/rightArrow.svg"/>
			</M.CarouselRight>
			</M.CarouselWrapper>

			<M.CarouselChoseButtons>
				{
					carouselArray.map((i,idx) => (
						<M.CarouselChoseButton 
						key={i}
						onClick={() => moveCarousel(i)}
						paintCurrent={translatePosition/carouselScale == -idx ? true : false}></M.CarouselChoseButton>
					))
				}
			</M.CarouselChoseButtons>

			</M.Carousel>

		</M.MainContainer>

		
	)
}

export default Mainpage;