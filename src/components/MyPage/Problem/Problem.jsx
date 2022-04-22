import { useState } from "react";
import styled from "styled-components";
import React, { useEffect } from "react";
import * as P from "../Public.style";
import * as MP from "./Problem";

const Problem = () => {
  const [rightproblem, setrightproblem] = useState([
    {
      problemNum: "1000",
    },
    {
      problemNum: "1001",
    },
    {
      problemNum: "10002",
    },
    {
      problemNum: "1003",
    },
    {
      problemNum: "4000",
    },
    {
      problemNum: "2043",
    },
    {
      problemNum: "2050",
    },
    {
      problemNum: "3456",
    },
    {
      problemNum: "3567",
    },
    {
      problemNum: "3865",
    },
    {
      problemNum: "4900",
    },
    {
      problemNum: "5000",
    },
  ]);

  useEffect(() => {
    // 무작위 번호로 들어오는 problemNum을 기준으로 오름차순으로 정렬
    setrightproblem(
      rightproblem.sort(function (a, b) {
        return a.problemNum - b.problemNum;
      })
    );
  }, []);

  function makeRightProblem() {
    rightproblem.map();
  }

  return (
    <div>
      <P.Title>문제</P.Title>
      <P.Hr />

      <P.Container>
        <P.SubName style={{ height: "450px" }}>맞은 문제</P.SubName>

        <MP.ProblemListContainer>
          <MP.ProblemList></MP.ProblemList>
        </MP.ProblemListContainer>
      </P.Container>

      {/* <P.Container style={{ marginTop: "100px" }}> */}
      <P.Container>
        <P.SubName style={{ height: "450px" }}>맞은 문제</P.SubName>

        <MP.ProblemListContainer>
          <MP.ProblemList></MP.ProblemList>
        </MP.ProblemListContainer>
      </P.Container>
    </div>
  );
};

export default Problem;
