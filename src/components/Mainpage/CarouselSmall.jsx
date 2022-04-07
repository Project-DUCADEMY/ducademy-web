import React, { useState, useEffect } from "react";

import * as Cal from "./CarouselSmall.style";

// import leftArrowN from "../../assets/image/leftArrow1N.svg"
import leftArrowN from "../../assets/image/mainPage/leftArrow1Y.svg";

// import rightArrowN from "../../assets/image/rightArrow1N.svg"
import rightArrowN from "../../assets/image/mainPage/rightArrow1Y.svg";

const CarouselSmall = () => {
  const [carouselMenus, setCarouselMenus] = useState([
    {
      id: 1,
      color: "green",
    },
    {
      id: 2,
      color: "blue",
    },
    {
      id: 3,
      color: "yellowgreen",
    },
    {
      id: 4,
      color: "tomato",
    },
  ]);

  const [carouselNum, setCarouselNum] = useState(carouselMenus.length);
  const [carouselArray, setCarouselArray] = useState([]);

  // 아래에 특정 인덱스로 이동할 수 있는 버튼
  useEffect(() => {
    let tempArray = [];
    for (let i = 0; i < carouselNum; i++) {
      tempArray.push(i);
    }
    setCarouselArray(tempArray);
  }, []);

  const carouselScale = 1200;
  // const carouselScale = 1920;
  const [translatePosition, setTranslatePosition] = useState(0);
  function goToRight() {
    // 내용을 넘어가지 않도록
    if (
      translatePosition - carouselScale >
      -(carouselMenus.length * carouselScale)
    ) {
      setTranslatePosition(translatePosition - carouselScale);
    }
  }
  function goToLeft() {
    // 바꾸기 전 비교
    if (translatePosition + carouselScale <= 0) {
      setTranslatePosition(translatePosition + carouselScale);
    }
  }

  // 캐러셀 인덱스에 따라 이동
  function moveCarousel(index) {
    setTranslatePosition(index * -carouselScale);
  }
  return (
    <Cal.Carousel>
      <Cal.CarouselWrapper>
        <Cal.CarouselContainer
          containerWidth={1200 * carouselMenus.length}
          translatePosition={translatePosition}
        >
          {carouselMenus.map((menu) => (
            <div
              key={menu.id}
              style={{
                backgroundColor: menu.color,
              }}
            >
              {/* {menu.id} */}
            </div>
          ))}
        </Cal.CarouselContainer>
        <Cal.CarouselLeft onClick={goToLeft}>
          <img alt="왼쪽으로" src={leftArrowN} />
        </Cal.CarouselLeft>
        <Cal.CarouselRight onClick={goToRight}>
          <img alt="오른쪽으로" src={rightArrowN} />
        </Cal.CarouselRight>
      </Cal.CarouselWrapper>

      <Cal.CarouselChoseButtons>
        {carouselArray.map((i, idx) => (
          <Cal.CarouselChoseButton
            key={i}
            onClick={() => moveCarousel(i)}
            paintCurrent={
              translatePosition / carouselScale == -idx ? true : false
            }
          ></Cal.CarouselChoseButton>
        ))}
      </Cal.CarouselChoseButtons>
    </Cal.Carousel>
  );
};

export default CarouselSmall;
