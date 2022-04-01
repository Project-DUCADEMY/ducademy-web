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

    
    // 카르셀 버튼 인덱스
	const [carouselArray,setCarouselArray] = useState([])
    // 아래에 특정 인덱스로 이동할 수 있는 버튼
	useEffect(()=>{
        let tempArray = []
		for (let i =0;i<carouselMenus.length;i++){
            tempArray.push(i)
		}
		setCarouselArray(tempArray)
	},[])

    // carousel의 단위는 vw
    const [carouselScale,setCarouselScale] = useState(100)
    
    // position의 단위는 vw
	const [translatePosition,setTranslatePosition] = useState(0);

	function goToRight(){
        // 내용을 넘어가지 않도록
        if (-(carouselMenus.length * carouselScale) < translatePosition - carouselScale){
            // translatePosition(translatePosition - carouselScale)
            setTranslatePosition(translatePosition - carouselScale)
        }
	}
	function goToLeft(){
        // 바꾸기 전 비교
        if(0 >= translatePosition + carouselScale){
            // translatePosition(translatePosition + carouselScale)
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
                    {
                        carouselMenus.map((menu) => (
                            <Cal.carouselMenu
                            key={menu.id}
                            style={{backgroundColor:menu.color}}
                            carouselScale={carouselScale}
                            ></Cal.carouselMenu>
                        ))
                    }
                </Cal.CarouselContainer>
                <Cal.CarouselMove 
                onClick={goToLeft}
                Right={false}
                >
                    <img 
                    alt="왼쪽으로" 
                    src={leftArrowN}
                    />
                </Cal.CarouselMove>
                <Cal.CarouselMove 
                onClick={goToRight}
                Right={0}
                >
                    <img 
                    alt="오른쪽으로" 
                    src={rightArrowN} />
                </Cal.CarouselMove>
            </Cal.CarouselWrapper>
        </Cal.Carousel>
    );
};

export default CarouselBig;