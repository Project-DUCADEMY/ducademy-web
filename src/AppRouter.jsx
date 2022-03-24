import { BrowserRouter, Route, Routes, Switch } from "react-router-dom";

import NavBar from './components/NavBar/NavBar'
import Mainpage from './components/Mainpage/Mainpage'
import NotFound from './NotFound'
const AppRouter = () => {
	return (
		<BrowserRouter>
			<NavBar/>
			<Routes>
				<Route exact path="/" element={<Mainpage/>}/>
				<Route path="*" element={<NotFound/>}/>
       		</Routes>
		</BrowserRouter>
	)
}

export default AppRouter;