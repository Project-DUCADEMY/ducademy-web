import React, { useState, useEffect } from "react";
import * as P from "./ProblemList.style";
import { Link, useNavigate } from "react-router-dom";

const ProblemList = ({ 
  newQuestions,
  hover,
  setHover,
  setSelectedSubject,
  goToAnswer
 }) => {

  function makeDate(time) {
    const tempTime = new Date(time);
    return `
      ${tempTime.getFullYear()} / ${tempTime
      .getMonth()
      .toString()
      .padStart(2, "0")} / ${tempTime.getDate().toString().padStart(2, "0")}
    `;
  }
  const nevigate = useNavigate()
  function clickQnA(objectId,category){
    if (hover){
      setSelectedSubject(category)
      goToAnswer()
    } else{
      nevigate(`/QandA/${objectId}`);
    }
  }
  return (
    <P.NewQWrapper>
      {newQuestions.map((newQ) => (
        <div key={newQ.id} onClick={() => clickQnA(newQ.objectId,newQ.category)}>
          <P.NewQListMenu>
            <P.Category 
            onMouseOver={() => setHover(true)}
            onMouseOut={() => setHover(false)}
            >
              <div>{newQ.category}</div>
            </P.Category>
            <P.NewQTitle>{newQ.title}</P.NewQTitle>
          </P.NewQListMenu>

          <P.NewQListInfo>
            <P.NewQInfoWriter>{newQ.writer}</P.NewQInfoWriter>
            <P.NewQInfoDate>{makeDate(newQ.time)}</P.NewQInfoDate>
          </P.NewQListInfo>
        </div>
      ))}
    </P.NewQWrapper>
  );
};

export default ProblemList;
