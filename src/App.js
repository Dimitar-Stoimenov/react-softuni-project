import { useState, useEffect } from "react";
import { Routes, Route } from 'react-router-dom';

import TopPageInfo from "./components/TopPageInfo";
import Footer from "./components/Footer";
import NavigationBar from "./components/NavigationBar";

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
