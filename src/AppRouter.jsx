import { BrowserRouter, Route, Routes } from "react-router-dom";
import styled from "styled-components";

import NavBar from "./components/NavBar/NavBar";
// import Footer from './components/Footer/Footer'

import Mainpage from "./components/Mainpage/Mainpage";
import MyPage from "./components/MyPage/MyPage";
import Problems from "./components/Problems/Problems";
import Problem from "./components/Problems/Problem";
import QnA from "./components/QandA/QandA";
import Workbooks from "./components/Workbooks/Workbooks";
import Groups from "./components/Group/Groups";
import Memos from "./components/Memo/Memos.jsx";

import Loginpage from "./components/Authentication/Loginpage";
import Joinpage from "./components/Authentication/JoinPage";

import NotFound from "./NotFound";
import Register from "./components/RegisterProblem/RegisterProblem";

import userData from "./store/userData";
import { useRecoilState } from "recoil";
import { useEffect } from "react";
import axios from "axios";

const AppRouter = () => {
  const [getUserData, setUserData] = useRecoilState(userData);
  useEffect(() => {
    axios
      .post("/user/userinfo")
      .then((response) => setUserData(response.data))
      .catch((error) => setUserData(null));
    //   .catch((error) => setUserData(1));
  }, []);

  return (
    <BrowserRouter>
      <NavBar />
      <Routes>
        <Route exact path="/" element={<Mainpage />} />

        <Route exact path="/problems" element={<Problems />} />
        <Route exact path="/problem/:number" element={<Problem />} />
        <Route exact path="/workbook" element={<Workbooks />} />
        <Route exact path="/QandA" element={<QnA />} />
        <Route exact path="/Group" element={<Groups />} />
        <Route exact path="/memo" element={<Memos />} />
        {getUserData === null ? (
          <>
            <Route exact path="/login" element={<Loginpage />} />
            <Route exact path="/join" element={<Joinpage />} />
          </>
        ) : (
          <>
            <Route exact path="/mypage" element={<MyPage />} />
            <Route exact path="/resister" element={<Register />} />
          </>
        )}
        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  );
};
export default AppRouter;
