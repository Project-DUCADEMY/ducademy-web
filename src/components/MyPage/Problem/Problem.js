import styled from "styled-components";

export const ProblemList = styled.div`
  background-color: white;
  border-radius: 20px;
  box-shadow: 4px 4px 15px 0px #0000001a;
  display: flex;
  flex-wrap: wrap;
  overflow-y: scroll;
  row-gap: 20px;
  width: 80%;
  height: 450px;
  /* align-items: center; */
  /* justify-content: center; */

  ::-webkit-scrollbar {
    width: 7px;
  }
  ::-webkit-scrollbar-thumb {
    height: auto;
    background: #c4c4c4;
    border-radius: 15px;
  }
  ::-webkit-scrollbar-track {
    background: #f4f4f4;
    border-radius: 15px;
  }
`;

//맞은 문제
export const RP = styled.a`
  /* background-color: white; */
  color: #009874;
  font-weight: bold;
  text-decoration: none;
  margin-left: 15px;
  margin-top: 7.5px;
  font-size: 15px;
  height: 20px;
  text-align: center;

  :hover {
    text-decoration: underline;
  }
`;

//틀린문제
export const WP = styled.a`
  /* background-color: white; */
  color: #dd4124;
  font-weight: bold;
  text-decoration: none;
  margin-left: 15px;
  margin-top: 7.5px;
  font-size: 15px;
  height: 20px;
  text-align: center;

  :hover {
    text-decoration: underline;
  }
`;

//만든 문제
export const MP = styled.a`
  color: black;
  font-weight: bold;
  text-decoration: none;
  margin-left: 15px;
  margin-top: 7.5px;
  font-size: 15px;
  height: 20px;
  text-align: center;

  :hover {
    text-decoration: underline;
  }
`;

export const Container = styled.div`
  width: 100%;
  display: flex;
  margin-top: 50px;
`;
