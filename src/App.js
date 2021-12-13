import { useState, useEffect } from "react";
import { Routes, Route } from 'react-router-dom';

import TopPageInfo from "./components/TopPageInfo/TopPageInfo";
import Footer from "./components/Footer/Footer";
import NavigationBar from "./components/NavigationBar/NavigationBar";
import BestSellers from "./components/BestSellers/BestSellers";
import MainPicture from "./components/MainPicture/MainPicture";
import Categories from "./components/Categories/Categories";

function App() {
	const [userInfo, setUserInfo] = useState({ username: '', isAuthenticated: false, isVendor: false });

	useEffect(() => {
		let user = null; /*authService.getUser();*/

		setUserInfo({
			user,
			isAuthenticated: Boolean(user),
			isVendor: Boolean(user?.isVendor)
		})
	}, []);


	return (
		<div id="main">
			<TopPageInfo />
			<NavigationBar {...userInfo} />

			<MainPicture />
			<Categories />
			<BestSellers />

			<Routes>

			</Routes>

			<Footer />
			<script src="/js/bootstrap.bundle.min.js"></script>
			<script src="/js/templatemo.js"></script>
			<script src="/js/custom.js"></script>
		</div>
	);
}

export default App;
