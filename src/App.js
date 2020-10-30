import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import "./App.css";
import Checkout from "./components/Checkout/Checkout";

import Header from "./components/Header/Header";
import Home from "./components/Home/Home";
import Page404 from "./components/Page404/Page404";

function App() {
	return (
		<Router>
			<div className="app">
				<Header />
				<Switch>
					<Route path="/" exact>
						<Home />
					</Route>
					<Route path="/checkout">
						<Checkout />
					</Route>
					<Route path="*" component={Page404} />
				</Switch>
			</div>
		</Router>
	);
}

export default App;
