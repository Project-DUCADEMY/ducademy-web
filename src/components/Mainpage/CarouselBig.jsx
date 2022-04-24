import React, { useState, useEffect } from "react";
import { RecoilState } from "recoil";

import * as Cal from "./CarouselBig.style";

import leftArrow from "../../assets/image/mainPage/carousel/leftArrow.svg";
import rightArrow from "../../assets/image/mainPage/carousel/rightArrow.svg";
import hoverLeftArrow from "../../assets/image/mainPage/carousel/hoverLeftArrow.svg";
import hoverRightArrow from "../../assets/image/mainPage/carousel/hoverRightArrow.svg";
import mouseDown from "../../assets/image/mainPage/carousel/mouseDown.svg";
import hoverMouseDown from "../../assets/image/mainPage/carousel/hoverMouseDown.svg";

import exam from "../../assets/image/mainPage/main/exam.svg";
import group from "../../assets/image/mainPage/main/group.svg";
import note from "../../assets/image/mainPage/main/note.svg";
import question from "../../assets/image/mainPage/main/question.svg";
import quiz from "../../assets/image/mainPage/main/quiz.svg";
import quizzes from "../../assets/image/mainPage/main/quizzes.svg";

import { Link } from "react-router-dom";

const CarouselBig = () => {
  const [carouselMenus, setCarouselMenus] = useState([
    {
      id: 1,
      color: "green",
      link: "problems",
      comment: "원하는 분야, 수준의 문제를 풀어보세요",
      img: quiz,
    },
    {
      id: 2,
      color: "blue",
      link: "workbook",
      comment: "문제집을 풀어보세요",
      img: quizzes,
    },
    {
      id: 3,
      color: "yellowgreen",
      link: "note",
      comment: "문제에 대해 나만의 노트를 만들어보세요",
      img: note,
    },
    {
      id: 4,
      color: "tomato",
      link: "exam",
      comment: "제한시간안에 문제를 풀어보세요",
      img: exam,
    },
    {
      id: 4,
      color: "yellowgreen",
      link: "QandA",
      comment: "모르는 문제를 물어보세요",
      img: question,
    },
    {
      id: 4,
      color: "tomato",
      link: "group",
      comment: "그룹을 만들어 함께 공부하세요",
      img: group,
    },
  ]);

  // // 카르셀 버튼 인덱스
  // const [carouselArray,setCarouselArray] = useState([])
  // // 아래에 특정 인덱스로 이동할 수 있는 버튼
  // useEffect(()=>{
  //     let tempArray = []
  // 	for (let i =0;i<carouselMenus.length;i++){
  //         tempArray.push(i)
  // 	}
  // 	setCarouselArray(tempArray)
  // },[])

  // carousel의 단위는 vw
  const [carouselScale, setCarouselScale] = useState(100);

  // position의 단위는 vw
  const [translatePosition, setTranslatePosition] = useState(0);

  function goToLeft() {
    // 바꾸기 전 비교
    if (0 >= translatePosition + carouselScale) {
      // translatePosition(translatePosition + carouselScale)
      setTranslatePosition(translatePosition + carouselScale);
      if (translatePosition <= 0) {
        setLeftArrowHover(false);
      }
    }
  }

  function goToRight() {
    // 내용을 넘어가지 않도록
    if (
      -(carouselMenus.length * carouselScale) <
      translatePosition - carouselScale
    ) {
      // translatePosition(translatePosition - carouselScale)
      setTranslatePosition(translatePosition - carouselScale);
      if (translatePosition / 100 >= -(carouselMenus.length - 1)) {
        setRightArrowHover(false);
      }
    }
  }
  function goToDown() {
    window.scrollTo({
      top: window.outerHeight,
      behavior: "smooth",
    });
  }

  // 캐러셀 인덱스에 따라 이동
  function moveCarousel(index) {
    setTranslatePosition(index * -carouselScale);
  }

  const [leftArrowHover, setLeftArrowHover] = useState(false);
  const [rightArrowHover, setRightArrowHover] = useState(false);
  const [downArrowHover, setDownArrowHover] = useState(false);

  return (
    <Cal.Carousel>
      <Cal.CarouselWrapper>
        <Cal.CarouselContainer
          containerWidth={100 * carouselMenus.length}
          translatePosition={translatePosition}
        >
          {carouselMenus.map((menu) => (
            <Cal.carouselMenu
              key={menu.id}
              //   style={{ backgroundColor: menu.color }}
              carouselScale={carouselScale}
            >
              {/* <h2>{menu.comment}</h2>
              <img src={menu.img} /> */}
              {/* <Link to={menu.link}>
                <Cal.CarouselMenuContent> */}
              <div>
                <h2>{menu.comment}</h2>
                <img src={menu.img} />
              </div>
              {/* </Cal.CarouselMenuContent>
              </Link> */}
            </Cal.carouselMenu>
          ))}
        </Cal.CarouselContainer>
        {translatePosition < 0 && (
          <Cal.CarouselMove
            onClick={goToLeft}
            Right={false}
            onMouseEnter={() => setLeftArrowHover(true)}
            onMouseLeave={() => setLeftArrowHover(false)}
          >
            <img
              alt="왼쪽으로"
              src={leftArrowHover ? hoverLeftArrow : leftArrow}
            />
          </Cal.CarouselMove>
        )}

        {translatePosition / 100 > -(carouselMenus.length - 1) && (
          <Cal.CarouselMove
            onClick={goToRight}
            Right={0}
            onMouseEnter={() => setRightArrowHover(true)}
            onMouseLeave={() => setRightArrowHover(false)}
          >
            <img
              alt="오른쪽으로"
              src={rightArrowHover ? hoverRightArrow : rightArrow}
            />
          </Cal.CarouselMove>
        )}
        <Cal.CarouselDown
          onClick={goToDown}
          onMouseEnter={() => setDownArrowHover(true)}
          onMouseLeave={() => setDownArrowHover(false)}
        >
          <img
            alt="아래쪽으로"
            src={downArrowHover ? hoverMouseDown : mouseDown}
          />
        </Cal.CarouselDown>
      </Cal.CarouselWrapper>
    </Cal.Carousel>
  );
};

export default CarouselBig;
