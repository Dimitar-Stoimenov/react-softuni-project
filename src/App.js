import { useState, useEffect } from "react";
import { Routes, Route } from 'react-router-dom';

import { AuthContext } from './contexts/AuthContext';
import useLocalStorage from "./hooks/useLocalStorage";
import TopPageInfo from "./components/TopPageInfo/TopPageInfo";
import Footer from "./components/Footer/Footer";
import Catalog from "./components/Catalog/Catalog";
import Details from "./components/Details/Details";
import Create from "./components/Create/Create";
import Login from "./components/Login/Login";
import Logout from "./components/Logout/Logout";
import Register from "./components/Register/Register";
import NavigationBar from "./components/NavigationBar/NavigationBar";
import MostPopularProducts from "./components/MostPopularProducts/MostPopularProducts";
import MainPicture from "./components/MainPicture/MainPicture";
import MyProducts from "./components/MyProducts/MyProducts";
import Categories from "./components/Categories/Categories";
import Contact from "./components/Contact/Contact";
import MessageReceived from "./components/Contact/MessageReceived/MessageReceived";

const initialAuthState = {
	_id: '',
	email: '',
	accessToken: '',
};

function App() {
	const [user, setUser] = useLocalStorage('user', initialAuthState);

	const login = (authData) => {
		let { accessToken, email, _id, isVendor } = authData;

		setUser({ accessToken, email, _id, isVendor });
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
								<Categories />
								<MostPopularProducts />
							</>
						}
					/>
					<Route path="/catalog" element={<Catalog />} />
					<Route path="/catalog/:itemId" element={<Details />} />
					<Route path="/create" element={<Create />} />
					<Route path="/my-products" element={<MyProducts />} />
					<Route path="/contact" element={<Contact />} />
					<Route path="/contact/message-received" element={<MessageReceived />} />
					<Route path="/register" element={<Register />} />
					<Route path="/login" element={<Login />} />
					<Route path="/logout" element={<Logout />} />
					<Route path="/forbidden" element={<p>You do not have permission to access this page!</p>} />
				</Routes>

				<Footer />
				<script src="/js/bootstrap.bundle.min.js"></script>
				<script src="/js/templatemo.js"></script>
			</div>
		</AuthContext.Provider>
	);
}

export default App;
