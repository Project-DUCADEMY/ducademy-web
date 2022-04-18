import React, { useState, useEffect } from "react";
import * as P from "./ProblemList.style";
import { useNavigate } from "react-router-dom";

const ProblemList = (
    {newQuestions}
) => {
    function makeDate(time) {
    const tempTime = new Date(time);
    // console.log([
    //   tempTime.getFullYear(),
    //   tempTime.getMonth() + 1,
    //   tempTime.getDate(),
    // ]);
    // return [tempTime.getFullYear(),
    //   tempTime.getMonth()+1 < 10 ? "0"+tempTime.getMonth()+1: tempTime.getMonth()+1,tempTime.getDate()]
    return `
      ${tempTime.getFullYear()} / ${tempTime
      .getMonth()
      .toString()
      .padStart(2, "0")} / ${tempTime.getDate().toString().padStart(2, "0")}
    `;
  }
  const navigate = useNavigate();
  const problemClick = (idx) => {
		navigate(`/problem/${idx}`)
	}
  return (
    <P.NewQWrapper>
      {newQuestions.map((newQ) => (
        <div key={newQ.questionNumber} onClick={() => problemClick(newQ.questionNumber)}>
          <P.NewQListMenu>
            <P.Category>
              <div>{newQ.questionNumber}</div>
            </P.Category>
            <P.NewQTitle>{newQ.title}</P.NewQTitle>
          </P.NewQListMenu>

          <P.NewQListInfo>
            <P.NewQInfoWriter>{1}</P.NewQInfoWriter>
            <P.NewQInfoDate>{makeDate(newQ.day)}</P.NewQInfoDate>
          </P.NewQListInfo>
        </div>
      ))}
    </P.NewQWrapper>
  );
};

export default ProblemList;
