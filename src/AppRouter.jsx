import { BrowserRouter, Route, Routes, Switch, useLocation } from "react-router-dom";

import NavBar from './components/NavBar/NavBar'
import Mainpage from './components/Mainpage/Mainpage'
import MyPage from './components/MyPage/MyPage'

import Loginpage from './components/Authentication/Loginpage'

import NotFound from './NotFound'
const AppRouter = () => {
	return (
		<BrowserRouter>
			<NavBar/>
			<Routes>
				<Route exact path="/" element={<Mainpage/>}/>
				<Route exact path="/mypage" element={<MyPage/>}/>
				<Route exact path="/login" element={<Loginpage/>}/>
				<Route path="*" element={<NotFound/>}/>
       		</Routes>
		</BrowserRouter>
	)
}
export default AppRouter;