import { BrowserRouter, Route, Routes } from "react-router-dom";

import NavBar from './components/NavBar/NavBar'
import Mainpage from './components/Mainpage/Mainpage'
const AppRouter = () => {
	return (
		<BrowserRouter>
			<NavBar/>
			<Routes>
				<Route exact path="/" element={<Mainpage/>}/>
       		</Routes>
		</BrowserRouter>
	)
}

export default AppRouter;