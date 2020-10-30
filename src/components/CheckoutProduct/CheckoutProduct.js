import React from "react";
import StarIcon from "@material-ui/icons/Star";

import "./CheckoutProduct.css";
import { useStateValue } from "../../context/StateProvider";

const CheckoutProduct = ({ id, title, image, price, rating }) => {
	const [{ basket }, dispatch] = useStateValue();

	const removeFromBasket = () => {
		dispatch({
			type: "REMOVE_FROM_BASKET",
			id,
		});
	};

	return (
		<div className="checkoutProduct">
			<img src={image} alt={title} className="checkoutProduct__image" />
			<div className="checkoutProduct__info">
				<p className="checkoutProduct__title">{title}</p>
				<p className="checkoutProduct__price">
					<small>RM</small>
					<strong>{price}</strong>
				</p>
				<div className="checkoutProduct__rating">
					{Array(rating)
						.fill()
						.map((_) => (
							<p>
								<StarIcon />
							</p>
						))}
				</div>
				<button onClick={removeFromBasket}>Remove from basket</button>
			</div>
		</div>
	);
};

export default CheckoutProduct;
