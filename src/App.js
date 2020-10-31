import React, { useEffect } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import "./App.css";
import Checkout from "./components/Checkout/Checkout";

import Header from "./components/Header/Header";
import Home from "./components/Home/Home";
import Page404 from "./components/Page404/Page404";
import Login from "./components/UserManagement/Login/Login";
import { useStateValue } from "./context/StateProvider";
import { auth } from "./firebaseConfig";

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
					<Route path="*" component={Page404} />
				</Switch>
			</div>
		</Router>
	);
}

export default App;
