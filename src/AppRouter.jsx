import { BrowserRouter, Route, Routes } from "react-router-dom";

import NavBar from './components/NavBar/NavBar'
import Mainpage from './components/Mainpage/Mainpage'
import MyPage from './components/MyPage/MyPage'
import Problems from './components/Problems/Problems'
import Workbooks from './components/Workbooks/Workbooks'
import Memos from './components/Memo/Memos.jsx'

import Loginpage from './components/Authentication/Loginpage'
import Joinpage from './components/Authentication/JoinPage'

import NotFound from './NotFound'
import Register from './components/RegisterProblem/RegisterProblem'

import userData from './store/userData'
import { useRecoilState } from 'recoil'
import { useEffect } from 'react'
import axios from 'axios'

const AppRouter = () => {
	const [getUserData, setUserData] = useRecoilState(userData)
	useEffect(() => {
    	axios.post('/user/userinfo')
    	.then(response => setUserData(response.data))
    	.catch(error => setUserData(null))
	}, [])

	return (
		<BrowserRouter>
			<NavBar/>
			<Routes>
				<Route exact path="/" element={<Mainpage/>}/>
				
				<Route exact path="/problems" element={<Problems/>}/>
				<Route exact path="/workbook" element={<Workbooks/>}/>
				<Route exact path="/resister" element={<Register/>}/>
				<Route exact path="/memo" element={<Memos/>}/>
				{
					getUserData === null ? (
					<>
						<Route exact path="/login" element={<Loginpage/>}/>
						<Route exact path="/join" element={<Joinpage/>}/>
					</>):(
					<>
						<Route exact path="/mypage" element={<MyPage/>}/>
					</>)
				}
				<Route path="*" element={<NotFound/>}/>
       		</Routes>
		</BrowserRouter>
	)
}
export default AppRouter;