import React, { useEffect, useState } from "react";
import { useStateValue } from "../../context/StateProvider";
import { db } from "../../firebaseConfig";
import OrderList from "../OrderList/OrderList";

import "./Orders.css";

const Orders = () => {
	const [orders, setOrders] = useState([]);
	const [{ user }, dispatch] = useStateValue();

	// this will run once.. remember that!
	useEffect(() => {
		if (user) {
			db.collection("users")
				.doc(user?.uid)
				.collection("orders")
				.orderBy("created", "desc")
				.onSnapshot((snapshot) => {
					return setOrders(
						snapshot.docs.map((doc) => ({
							id: doc.id,
							data: doc.data(),
						}))
					);
				});
		} else {
			setOrders([]);
		}
	}, [user]);

	return (
		<div className="orders">
			<h1>Your Orders</h1>
			<div className="orders__order">
				{user && orders?.map((order) => <OrderList order={order} />)}
			</div>
		</div>
	);
};

export default Orders;
