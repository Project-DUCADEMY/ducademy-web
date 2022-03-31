import React,{useState,useEffect} from 'react';

import * as Cal from "./CarouselBig.style"

import leftArrowN from "../../assets/image/mainPage/leftArrow1Y.svg"
import rightArrowN from "../../assets/image/mainPage/rightArrow1Y.svg"

const CarouselBig = () => {


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
			color:"tomato"
		}
	])

    // ------------위는 바꾼것 것들 아래는 안바꾼것

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
	// const carouselScale = 1920;
	const [translatePosition,setTranslatePosition] = useState(0);
	function goToRight(){
		// 내용을 넘어가지 않도록
		if ((translatePosition-carouselScale) > -(carouselMenus.length * carouselScale)){
			    
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



    return (
        <Cal.Carousel>
            <Cal.CarouselWrapper>
                <Cal.CarouselContainer
                    containerWidth={100*(carouselMenus.length)}
                    translatePosition={translatePosition}
                >

                </Cal.CarouselContainer>
            </Cal.CarouselWrapper>
        </Cal.Carousel>
    );
};

export default CarouselBig;