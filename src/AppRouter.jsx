import { BrowserRouter, Route, Routes, Switch, useLocation } from "react-router-dom";

import NavBar from './components/NavBar/NavBar'
import Mainpage from './components/Mainpage/Mainpage'
import MyPage from './components/MyPage/MyPage'
import Problems from './components/Problems/Problems'

import Loginpage from './components/Authentication/LoginPage'
import Joinpage from './components/Authentication/JoinPage'

import NotFound from './NotFound'

import userData from './store/userData'
import { useRecoilValue } from 'recoil'
const AppRouter = () => {
	const getUserData = useRecoilValue(userData)
	return (
		<BrowserRouter>
			<NavBar/>
			<Routes>
				<Route exact path="/" element={<Mainpage/>}/>
				<Route exact path="/mypage" element={<MyPage/>}/>
				<Route exact path="/problems" element={<Problems/>}/>
				{
					getUserData === null ? (<>
						<Route exact path="/login" element={<Loginpage/>}/>
						<Route exact path="/join" element={<Joinpage/>}/>
					</>):(<></>)
				}
				<Route path="*" element={<NotFound/>}/>
       		</Routes>
		</BrowserRouter>
	)
}
export default AppRouter;