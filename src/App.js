import { useState, useEffect } from "react";
import { Routes, Route } from 'react-router-dom';

import { AuthContext } from './contexts/AuthContext';
import TopPageInfo from "./components/TopPageInfo/TopPageInfo";
import Footer from "./components/Footer/Footer";
import Login from "./components/Login/Login";
import NavigationBar from "./components/NavigationBar/NavigationBar";
import BestSellers from "./components/BestSellers/BestSellers";
import MainPicture from "./components/MainPicture/MainPicture";
import Categories from "./components/Categories/Categories";

function App() {
	const [user, setUser] = useState(
		{
			_id: '',
			email: '',
			isVendor: false,
		}
	);

	const login = (authData) => {
		setUser(authData);
	};

	const onLogout = () => {
		// TODO: implement
	};

	return (
		<AuthContext.Provider value={{ user, login }}>

			<div id="main">
				<TopPageInfo />
				<NavigationBar {...user} />

				<MainPicture />
				<Categories />
				<BestSellers />

				<Routes>
					<Route path="/login" element={<Login />} />
				</Routes>

				<Footer />
				<script src="/js/bootstrap.bundle.min.js"></script>
				<script src="/js/templatemo.js"></script>
			</div>
		</AuthContext.Provider>
	);
}

export default App;
