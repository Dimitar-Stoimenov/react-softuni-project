import { useState, useEffect } from "react";
import { Routes, Route } from 'react-router-dom';

import { AuthContext } from './contexts/AuthContext';
import useLocalStorage from "./hooks/useLocalStorage";
import TopPageInfo from "./components/TopPageInfo/TopPageInfo";
import Footer from "./components/Footer/Footer";
import Login from "./components/Login/Login";
import Logout from "./components/Logout/Logout";
import Register from "./components/Register/Register";
import NavigationBar from "./components/NavigationBar/NavigationBar";
import BestSellers from "./components/BestSellers/BestSellers";
import MainPicture from "./components/MainPicture/MainPicture";
import Categories from "./components/Categories/Categories";

const initialAuthState = {
	_id: '',
	email: '',
	accessToken: '',
};

function App() {
	const [user, setUser] = useLocalStorage('user', initialAuthState);

	const login = (authData) => {
		setUser(authData);
	};

	const logout = () => {
		setUser(initialAuthState);
	};

	return (
		<AuthContext.Provider value={{ user, login, logout }}>

			<div id="main">
				<TopPageInfo />
				<NavigationBar />

				<Routes>
					<Route path="/"
						element={
							<>
								<MainPicture />
								<BestSellers />
							</>
						}
					/>
					<Route path="/catalog" element={<Categories />} />
					<Route path="/login" element={<Login />} />
					<Route path="/logout" element={<Logout />} />
					<Route path="/register" element={<Register />} />
				</Routes>

				<Footer />
				<script src="/js/bootstrap.bundle.min.js"></script>
				<script src="/js/templatemo.js"></script>
			</div>
		</AuthContext.Provider>
	);
}

export default App;
