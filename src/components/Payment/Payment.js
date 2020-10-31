import React from "react";
import { Link } from "react-router-dom";
import { useStateValue } from "../../context/StateProvider";
import CheckoutProduct from "../CheckoutProduct/CheckoutProduct";
import "./Payment.css";

const Payment = () => {
	const [{ basket, user }, dispatch] = useStateValue();

	return (
		<div className="payment">
			<div className="payment__container">
				<h1>
					Checkout (<Link to="/checkout">{basket?.length} items</Link>)
				</h1>
				{/* payment section */}
				<div className="payment__section">
					<div className="payment__title">
						<h3>Delivery Address</h3>
					</div>
					<div className="payment__address">
						<p>{user?.email}</p>
						<p>238, Jalan Guchil Bayam, Lundang</p>
						<p>15200, Kota Bharu, Kelantan, MY</p>
					</div>
				</div>
				{/* revealing the item */}
				<div className="payment__section">
					<div className="payment__title">
						<h3>Review items and delivery</h3>
					</div>
					<div className="payment__items">
						{basket?.map((item) => (
							<CheckoutProduct
								key={item.id}
								id={item.id}
								title={item.title}
								image={item.image}
								price={item.price}
								rating={item.rating}
							/>
						))}
					</div>
				</div>
				{/* payment method */}
				<div className="payment__section">
					<div className="payment__title">
						<h3>Payment Method</h3>
					</div>
					<div className="payment__details">
						{/* this will stripe's magic come frome */}
					</div>
				</div>
			</div>
		</div>
	);
};

export default Payment;
