import { useState } from "react";
import styled from "styled-components";
import React, { useEffect } from "react";
import * as P from "../Public.style";
import * as MP from "./Problem";

const Problem = () => {
  const [rightproblem, setrightproblem] = useState([
    {
      RightProblemNum: "1000",
    },
    {
      RightProblemNum: "1001",
    },
    {
      RightProblemNum: "1002",
    },
    {
      RightProblemNum: "10002",
    },
    {
      RightProblemNum: "1003",
    },
    {
      RightProblemNum: "4000",
    },
    {
      RightProblemNum: "2043",
    },
    {
      RightProblemNum: "2050",
    },
    {
      RightProblemNum: "3456",
    },
    {
      RightProblemNum: "3567",
    },
    {
      RightProblemNum: "3865",
    },
    {
      RightProblemNum: "4900",
    },
    {
      RightProblemNum: "5000",
    },
  ]);

  const [wrongproblem, setwrongproblem] = useState([
    {
      WrongProblemNum: "10120",
    },
    {
      WrongProblemNum: "14241",
    },
    {
      WrongProblemNum: "10340",
    },
    {
      WrongProblemNum: "123",
    },
    {
      WrongProblemNum: "432",
    },
    {
      WrongProblemNum: "2043",
    },
    {
      WrongProblemNum: "2346",
    },
    {
      WrongProblemNum: "3456",
    },
    {
      WrongProblemNum: "3567",
    },
    {
      WrongProblemNum: "7664",
    },
    {
      WrongProblemNum: "965",
    },
    {
      WrongProblemNum: "76497",
    },
    {
      WrongProblemNum: "76497",
    },
    {
      WrongProblemNum: "76497",
    },
    {
      WrongProblemNum: "432",
    },
    {
      WrongProblemNum: "2043",
    },
    {
      WrongProblemNum: "2346",
    },
    {
      WrongProblemNum: "3456",
    },
    {
      WrongProblemNum: "3567",
    },
    {
      WrongProblemNum: "7664",
    },
    {
      WrongProblemNum: "965",
    },
    {
      WrongProblemNum: "76497",
    },
    {
      WrongProblemNum: "76497",
    },
    {
      WrongProblemNum: "76497",
    },
    {
      WrongProblemNum: "432",
    },
    {
      WrongProblemNum: "2043",
    },
    {
      WrongProblemNum: "2346",
    },
    {
      WrongProblemNum: "3456",
    },
    {
      WrongProblemNum: "3567",
    },
    {
      WrongProblemNum: "7664",
    },
    {
      WrongProblemNum: "965",
    },
    {
      WrongProblemNum: "76497",
    },
    {
      WrongProblemNum: "76497",
    },
    {
      WrongProblemNum: "76497",
    },
    {
      WrongProblemNum: "432",
    },
    {
      WrongProblemNum: "2043",
    },
    {
      WrongProblemNum: "2346",
    },
    {
      WrongProblemNum: "3456",
    },
    {
      WrongProblemNum: "3567",
    },
    {
      WrongProblemNum: "7664",
    },
    {
      WrongProblemNum: "965",
    },
    {
      WrongProblemNum: "76497",
    },
    {
      WrongProblemNum: "76497",
    },
    {
      WrongProblemNum: "76497",
    },
    {
      WrongProblemNum: "432",
    },
    {
      WrongProblemNum: "2043",
    },
    {
      WrongProblemNum: "2346",
    },
    {
      WrongProblemNum: "3456",
    },
    {
      WrongProblemNum: "3567",
    },
    {
      WrongProblemNum: "7664",
    },
    {
      WrongProblemNum: "965",
    },
    {
      WrongProblemNum: "76497",
    },
    {
      WrongProblemNum: "76497",
    },
    {
      WrongProblemNum: "76497",
    },
    {
      WrongProblemNum: "432",
    },
    {
      WrongProblemNum: "2043",
    },
    {
      WrongProblemNum: "2346",
    },
    {
      WrongProblemNum: "3456",
    },
    {
      WrongProblemNum: "3567",
    },
    {
      WrongProblemNum: "7664",
    },
    {
      WrongProblemNum: "965",
    },
    {
      WrongProblemNum: "76497",
    },
    {
      WrongProblemNum: "76497",
    },
    {
      WrongProblemNum: "76497",
    },
    {
      WrongProblemNum: "432",
    },
    {
      WrongProblemNum: "2043",
    },
    {
      WrongProblemNum: "2346",
    },
    {
      WrongProblemNum: "3456",
    },
    {
      WrongProblemNum: "3567",
    },
    {
      WrongProblemNum: "7664",
    },
    {
      WrongProblemNum: "965",
    },
    {
      WrongProblemNum: "76497",
    },
    {
      WrongProblemNum: "76497",
    },
    {
      WrongProblemNum: "76497",
    },
    {
      WrongProblemNum: "432",
    },
    {
      WrongProblemNum: "2043",
    },
    {
      WrongProblemNum: "2346",
    },
    {
      WrongProblemNum: "3456",
    },
    {
      WrongProblemNum: "3567",
    },
    {
      WrongProblemNum: "7664",
    },
    {
      WrongProblemNum: "965",
    },
    {
      WrongProblemNum: "76497",
    },
    {
      WrongProblemNum: "76497",
    },
    {
      WrongProblemNum: "76497",
    },
    {
      WrongProblemNum: "432",
    },
    {
      WrongProblemNum: "2043",
    },
    {
      WrongProblemNum: "2346",
    },
    {
      WrongProblemNum: "3456",
    },
    {
      WrongProblemNum: "3567",
    },
    {
      WrongProblemNum: "7664",
    },
    {
      WrongProblemNum: "965",
    },
    {
      WrongProblemNum: "76497",
    },
    {
      WrongProblemNum: "76497",
    },
    {
      WrongProblemNum: "76497",
    },
    {
      WrongProblemNum: "432",
    },
    {
      WrongProblemNum: "2043",
    },
    {
      WrongProblemNum: "2346",
    },
    {
      WrongProblemNum: "3456",
    },
    {
      WrongProblemNum: "3567",
    },
    {
      WrongProblemNum: "7664",
    },
    {
      WrongProblemNum: "965",
    },
    {
      WrongProblemNum: "76497",
    },
    {
      WrongProblemNum: "76497",
    },
    {
      WrongProblemNum: "76497",
    },
    {
      WrongProblemNum: "432",
    },
    {
      WrongProblemNum: "2043",
    },
    {
      WrongProblemNum: "2346",
    },
    {
      WrongProblemNum: "3456",
    },
    {
      WrongProblemNum: "3567",
    },
    {
      WrongProblemNum: "7664",
    },
    {
      WrongProblemNum: "965",
    },
    {
      WrongProblemNum: "76497",
    },
    {
      WrongProblemNum: "76497",
    },
    {
      WrongProblemNum: "76497",
    },
    {
      WrongProblemNum: "432",
    },
    {
      WrongProblemNum: "2043",
    },
    {
      WrongProblemNum: "2346",
    },
    {
      WrongProblemNum: "3456",
    },
    {
      WrongProblemNum: "3567",
    },
    {
      WrongProblemNum: "7664",
    },
    {
      WrongProblemNum: "965",
    },
    {
      WrongProblemNum: "76497",
    },
    {
      WrongProblemNum: "76497",
    },
    {
      WrongProblemNum: "76497",
    },
    {
      WrongProblemNum: "432",
    },
    {
      WrongProblemNum: "2043",
    },
    {
      WrongProblemNum: "2346",
    },
    {
      WrongProblemNum: "3456",
    },
    {
      WrongProblemNum: "3567",
    },
    {
      WrongProblemNum: "7664",
    },
    {
      WrongProblemNum: "965",
    },
    {
      WrongProblemNum: "76497",
    },
    {
      WrongProblemNum: "76497",
    },
    {
      WrongProblemNum: "76497",
    },
    {
      WrongProblemNum: "432",
    },
    {
      WrongProblemNum: "2043",
    },
    {
      WrongProblemNum: "2346",
    },
    {
      WrongProblemNum: "3456",
    },
    {
      WrongProblemNum: "3567",
    },
    {
      WrongProblemNum: "7664",
    },
    {
      WrongProblemNum: "965",
    },
    {
      WrongProblemNum: "76497",
    },
    {
      WrongProblemNum: "76497",
    },
    {
      WrongProblemNum: "76497",
    },
    {
      WrongProblemNum: "432",
    },
    {
      WrongProblemNum: "2043",
    },
    {
      WrongProblemNum: "2346",
    },
    {
      WrongProblemNum: "3456",
    },
    {
      WrongProblemNum: "3567",
    },
    {
      WrongProblemNum: "7664",
    },
    {
      WrongProblemNum: "965",
    },
    {
      WrongProblemNum: "76497",
    },
    {
      WrongProblemNum: "76497",
    },
    {
      WrongProblemNum: "76497",
    },
    {
      WrongProblemNum: "432",
    },
    {
      WrongProblemNum: "2043",
    },
    {
      WrongProblemNum: "2346",
    },
    {
      WrongProblemNum: "3456",
    },
    {
      WrongProblemNum: "3567",
    },
    {
      WrongProblemNum: "7664",
    },
    {
      WrongProblemNum: "965",
    },
    {
      WrongProblemNum: "76497",
    },
    {
      WrongProblemNum: "76497",
    },
    {
      WrongProblemNum: "76497",
    },
    {
      WrongProblemNum: "3456",
    },
    {
      WrongProblemNum: "3567",
    },
    {
      WrongProblemNum: "7664",
    },
    {
      WrongProblemNum: "965",
    },
    {
      WrongProblemNum: "76497",
    },
    {
      WrongProblemNum: "76497",
    },
    {
      WrongProblemNum: "76497",
    },
    {
      WrongProblemNum: "432",
    },
    {
      WrongProblemNum: "2043",
    },
    {
      WrongProblemNum: "2346",
    },
    {
      WrongProblemNum: "3456",
    },
    {
      WrongProblemNum: "3567",
    },
    {
      WrongProblemNum: "7664",
    },
    {
      WrongProblemNum: "965",
    },
    {
      WrongProblemNum: "76497",
    },
    {
      WrongProblemNum: "76497",
    },
    {
      WrongProblemNum: "76497",
    },
    {
      WrongProblemNum: "432",
    },
    {
      WrongProblemNum: "2043",
    },
    {
      WrongProblemNum: "2346",
    },
    {
      WrongProblemNum: "3456",
    },
    {
      WrongProblemNum: "3567",
    },
    {
      WrongProblemNum: "3456",
    },
    {
      WrongProblemNum: "3567",
    },
    {
      WrongProblemNum: "7664",
    },
    {
      WrongProblemNum: "965",
    },
    {
      WrongProblemNum: "76497",
    },
    {
      WrongProblemNum: "76497",
    },
    {
      WrongProblemNum: "76497",
    },
    {
      WrongProblemNum: "432",
    },
    {
      WrongProblemNum: "2043",
    },
    {
      WrongProblemNum: "2346",
    },
    {
      WrongProblemNum: "3456",
    },
    {
      WrongProblemNum: "3567",
    },
    {
      WrongProblemNum: "7664",
    },
    {
      WrongProblemNum: "965",
    },
    {
      WrongProblemNum: "76497",
    },
    {
      WrongProblemNum: "76497",
    },
    {
      WrongProblemNum: "76497",
    },
    {
      WrongProblemNum: "432",
    },
    {
      WrongProblemNum: "2043",
    },
    {
      WrongProblemNum: "2346",
    },
    {
      WrongProblemNum: "3456",
    },
    {
      WrongProblemNum: "3567",
    },
    {
      WrongProblemNum: "3456",
    },
    {
      WrongProblemNum: "3567",
    },
    {
      WrongProblemNum: "7664",
    },
    {
      WrongProblemNum: "965",
    },
    {
      WrongProblemNum: "76497",
    },
    {
      WrongProblemNum: "76497",
    },
    {
      WrongProblemNum: "76497",
    },
    {
      WrongProblemNum: "432",
    },
    {
      WrongProblemNum: "2043",
    },
    {
      WrongProblemNum: "2346",
    },
    {
      WrongProblemNum: "3456",
    },
    {
      WrongProblemNum: "3567",
    },
    {
      WrongProblemNum: "7664",
    },
    {
      WrongProblemNum: "965",
    },
    {
      WrongProblemNum: "76497",
    },
    {
      WrongProblemNum: "76497",
    },
    {
      WrongProblemNum: "76497",
    },
    {
      WrongProblemNum: "432",
    },
    {
      WrongProblemNum: "2043",
    },
    {
      WrongProblemNum: "2346",
    },
    {
      WrongProblemNum: "3456",
    },
    {
      WrongProblemNum: "3567",
    },
    {
      WrongProblemNum: "3456",
    },
    {
      WrongProblemNum: "3567",
    },
    {
      WrongProblemNum: "7664",
    },
    {
      WrongProblemNum: "965",
    },
    {
      WrongProblemNum: "76497",
    },
    {
      WrongProblemNum: "76497",
    },
    {
      WrongProblemNum: "76497",
    },
    {
      WrongProblemNum: "432",
    },
    {
      WrongProblemNum: "2043",
    },
    {
      WrongProblemNum: "2346",
    },
    {
      WrongProblemNum: "3456",
    },
    {
      WrongProblemNum: "3567",
    },
    {
      WrongProblemNum: "7664",
    },
    {
      WrongProblemNum: "965",
    },
    {
      WrongProblemNum: "76497",
    },
    {
      WrongProblemNum: "76497",
    },
    {
      WrongProblemNum: "76497",
    },
    {
      WrongProblemNum: "432",
    },
    {
      WrongProblemNum: "2043",
    },
    {
      WrongProblemNum: "2346",
    },
    {
      WrongProblemNum: "3456",
    },
    {
      WrongProblemNum: "3567",
    },
  ]);

  const [makeproblem, setmakeproblem] = useState([
    {
      MakeProblemNum: "1000",
    },
    {
      MakeProblemNum: "1001",
    },
    {
      MakeProblemNum: "10002",
    },
    {
      MakeProblemNum: "1003",
    },
    {
      MakeProblemNum: "4000",
    },
    {
      MakeProblemNum: "2043",
    },
    {
      MakeProblemNum: "2050",
    },
    {
      MakeProblemNum: "3456",
    },
    {
      MakeProblemNum: "3567",
    },
    {
      MakeProblemNum: "3865",
    },
    {
      MakeProblemNum: "4900",
    },
    {
      MakeProblemNum: "5000",
    },
  ]);

  useEffect(() => {
    // 무작위 번호로 들어오는 RightProblemNum을 기준으로 오름차순으로 정렬
    setrightproblem(
      rightproblem.sort(function (a, b) {
        return a.RightProblemNum - b.RightProblemNum;
      })
    );

    // 무작위 번호로 들어오는 WrongProblemNum을 기준으로 오름차순으로 정렬
    setwrongproblem(
      wrongproblem.sort(function (a, b) {
        return a.WrongProblemNum - b.WrongProblemNum;
      })
    );

    setmakeproblem(
      makeproblem.sort(function (a, b) {
        return a.MakeProblemNum - b.MakeProblemNum;
      })
    );
  }, []);

  const MakeRightProblem = rightproblem.map((rightproblem) => (
    <MP.RP href={`problem/${rightproblem.RightProblemNum}`}>{rightproblem.RightProblemNum}</MP.RP>
  ));

  const MakeWrongProblem = wrongproblem.map((wrongproblem) => (
    <MP.WP href={`problem/${wrongproblem.WrongProblemNum}`}>{wrongproblem.WrongProblemNum}</MP.WP>
  ));

  const MakeMakeProblem = makeproblem.map((makeproblem) => (
    <MP.MP href={`problem/${makeproblem.MakeProblemNum}`}>{makeproblem.MakeProblemNum}</MP.MP>
  ));

  return (
    <div>
      <P.Title>문제</P.Title>
      <P.Hr />

      <MP.Container>
        <P.SubName style={{ height: "450px" }}>맞은 문제</P.SubName>

        <MP.ProblemList>{MakeRightProblem}</MP.ProblemList>
      </MP.Container>

      <MP.Container>
        <P.SubName style={{ height: "450px" }}>틀린 문제</P.SubName>

        <MP.ProblemList>{MakeWrongProblem}</MP.ProblemList>
      </MP.Container>

      <MP.Container>
        <P.SubName style={{ height: "450px" }}>내가 만든 문제</P.SubName>

        <MP.ProblemList>{MakeMakeProblem}</MP.ProblemList>
      </MP.Container>
    </div>
  );
};

export default Problem;
