import React, { useEffect } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import { loadStripe } from "@stripe/stripe-js";
import { Elements } from "@stripe/react-stripe-js";

import "./App.css";
import Checkout from "./components/Checkout/Checkout";

import Header from "./components/Header/Header";
import Home from "./components/Home/Home";
import Page404 from "./components/Page404/Page404";
import Payment from "./components/Payment/Payment";
import Login from "./components/UserManagement/Login/Login";
import Orders from "./components/Orders/Orders";
import { useStateValue } from "./context/StateProvider";
import { auth } from "./firebaseConfig";

const promise = loadStripe(
	"pk_test_51HiJi9DzqTLbj10wcP5QDmVIEI1mmrwa8wC0N0gZleKvU8HmGs24tIkc9xABv62Dw8Vvaqr4m5uWNwXIMT0FWXf600FBq1AXc9"
);

function App() {
	const [{ user }, dispatch] = useStateValue();

	useEffect(() => {
		auth.onAuthStateChanged((authUser) => {
			if (authUser) {
				// when the user logged in, the user information will display
				dispatch({
					type: "SET_USER",
					user: authUser,
				});
			} else {
				// if the user logged out
				dispatch({
					type: "SET_USER",
					user: null,
				});
			}
		});
	}, []);

	return (
		<Router>
			<div className="app">
				<Switch>
					<Route path="/" exact>
						<Header />
						<Home />
					</Route>
					<Route path="/checkout">
						<Header />
						<Checkout />
					</Route>
					<Route path="/login">
						<Login />
					</Route>
					<Route path="/payment">
						<Header />
						<Elements stripe={promise}>
							<Payment />
						</Elements>
					</Route>
					<Route path="/orders">
						<Header />
						<Orders />
					</Route>
					<Route path="*" component={Page404} />
				</Switch>
			</div>
		</Router>
	);
}

export default App;
