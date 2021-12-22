import { useState, useEffect } from "react";
import { Routes, Route } from 'react-router-dom';

import { AuthContext } from './contexts/AuthContext';
import { CartContext } from "./contexts/CartContext";
import useLocalStorage from "./hooks/useLocalStorage";
import TopPageInfo from "./components/TopPageInfo/TopPageInfo";
import Footer from "./components/Footer/Footer";
import Catalog from "./components/Catalog/Catalog";
import Details from "./components/Details/Details";
import Create from "./components/Create/Create";
import Checkout from "./components/Checkout/Checkout";
import CheckoutSuccessful from "./components/Checkout/CheckoutCard/CheckoutSucessful";
import Edit from "./components/Edit/Edit";
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

const intialCartState = {
	itemCount: 0,
	cartItems: [],
	totalPrice: 0,
}

function App() {
	const [user, setUser] = useLocalStorage('user', initialAuthState);
	const [cart, setCart] = useLocalStorage('cart', intialCartState);

	const login = (authData) => {
		let { accessToken, email, _id, isVendor } = authData;

		setCart(intialCartState);
		setUser({ accessToken, email, _id, isVendor });
	};

	const logout = () => {
		setCart(intialCartState);
		setUser(initialAuthState);
	};

	const addToCart = (item) => {
		let updated = {
			itemCount: cart.itemCount + 1,
			cartItems: cart.cartItems,
			totalPrice: cart.totalPrice + item.price,
		};
		updated.cartItems.push(item);

		setCart(updated);
	};

	const removeFromCart = (item) => {
		let updated = {
			itemCount: cart.itemCount - 1,
			cartItems: cart.cartItems,
			totalPrice: cart.totalPrice - item.price,
		};

		let index = updated.cartItems.indexOf(item);
		if (index > -1) {
			updated.cartItems.splice(index, 1);
		}

		setCart(updated);
	};

	return (
		<AuthContext.Provider value={{ user, login, logout }}>
			<CartContext.Provider value={{ cart, addToCart, removeFromCart }}>

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
						<Route path="/catalog/:itemId/edit" element={<Edit />} />
						<Route path="/create" element={<Create />} />
						<Route path="/my-products" element={<MyProducts />} />
						<Route path="/checkout" element={<Checkout />} />
						<Route path="/order-complete" element={<CheckoutSuccessful />} />
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

			</CartContext.Provider>
		</AuthContext.Provider>
	);
}

export default App;
