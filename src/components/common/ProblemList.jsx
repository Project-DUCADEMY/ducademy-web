import React, { useState, useEffect } from "react";
import * as P from "./ProblemList.style";

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
  return (
    <P.NewQWrapper>
      {newQuestions.map((newQ) => (
        <div key={newQ.id}>
          <P.NewQListMenu>
            <P.Category>
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
