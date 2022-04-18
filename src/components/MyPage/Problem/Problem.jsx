import { useState } from "react";
import styled from "styled-components";
import React, { useEffect } from "react";
import * as P from "../Public.style";
import * as MP from "./Problem";

const MyProblem = () => {
  return (
    <div>
      <P.Title>문제</P.Title>
      <P.Hr />
      <P.Container>
        <P.SubName style={{ height: "450px" }}>내 문제</P.SubName>

        <MP.ProblemListContainer></MP.ProblemListContainer>
      </P.Container>
    </div>
  );
};

export default MyProblem;
