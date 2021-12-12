import { useState, useEffect } from "react";
import { Routes, Route } from 'react-router-dom';

import TopPageInfo from "./components/TopPageInfo/TopPageInfo";
import Footer from "./components/Footer/Footer";
import NavigationBar from "./components/NavigationBar/NavigationBar";
import HighestRatedProducts from "./components/HighestRatedProducts/HighestRatedProducts";

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
			<HighestRatedProducts />

			<Routes>

			</Routes>

			<Footer />
			<script src="/js/jquery-1.11.0.min.js"></script>
			<script src="/js/jquery-migrate-1.2.1.min.js"></script>
			<script src="/js/bootstrap.bundle.min.js"></script>
			<script src="/js/templatemo.js"></script>
			<script src="/js/custom.js"></script>
		</div>
	);
}

export default App;
