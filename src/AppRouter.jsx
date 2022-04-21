import { BrowserRouter, Route, Routes } from "react-router-dom";
import Redirect from "./components/common/Redirect";

import NavBar from "./components/NavBar/NavBar";
import Footer from "./components/Footer/Footer";

import Mainpage from "./components/Mainpage/Mainpage";
import MyPage from "./components/MyPage/MyPage";
import Problems from "./components/Problems/Problems";
import Problem from "./components/Problems/Problem";
import Exam from "./components/Exam/Exam";
import QnA from "./components/QandA/QandA";
import QnAPage from "./components/QandA/QnAPage";
import Workbooks from "./components/Workbooks/Workbooks";
import Groups from "./components/Group/Groups";
import Memos from "./components/Memo/Memos.jsx";

import Loginpage from "./components/Authentication/Loginpage";
import Joinpage from "./components/Authentication/JoinPage";

import NotFound from "./NotFound";
import Register from "./components/Register/RegisterProblem";
import RegisterWorkbook from './components/Register/RegisterWorkbook'
import RegisterQuestion from './components/Register/RegisterQuestion';
import ScrollToTop from './components/common/ScrollToTop'

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
  }, []);

  return (
    <BrowserRouter>
      <ScrollToTop/>
      <NavBar />
      <Routes>

        {getUserData === null ? (
          <>
            <Route path="/login" element={<Loginpage />} />
            <Route path="/join" element={<Joinpage />} />
            {/* <Route path="*" element={<Redirect to={"/login"}/>}/> */}
          </>
        ) : (
          <>
            <Route path="/" element={<Mainpage />} />
            <Route path="/problems" element={<Problems />} />
            <Route path="/problem/:number" element={<Problem />} />
            <Route path="/workbook" element={<Workbooks />} />
            <Route path="/exam" element={<Exam />} />
            <Route path="/QandA" element={<QnA />} />
            <Route path="/QandA/:number" element={<QnAPage/>}/>
            <Route path="/Group" element={<Groups />} />
            <Route path="/memo" element={<Memos />} />
            <Route path="/mypage" element={<MyPage />} />
            <Route path="/register" element={<Register />} />
            <Route path="/registerWorkbook" element={<RegisterWorkbook/>} />
            <Route path="/registerQuestion" element={<RegisterQuestion/>} />
          </>
        )}
        <Route path="*" element={<NotFound />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
};
export default AppRouter;
