import React from "react";
import StarIcon from "@material-ui/icons/Star";

import "./Product.css";
import { useStateValue } from "../../context/StateProvider";

const Product = ({ id, title, image, price, rating }) => {
	const [{ basket }, dispatch] = useStateValue();

	const addToBasket = () => {
		// dispatch the item into the data layer
		dispatch({
			type: "ADD_TO_BASKET",
			item: {
				id,
				title,
				image,
				price,
				rating,
			},
		});
	};

	return (
		<div className="product">
			<div className="product__info">
				<p>{title}</p>
				<p className="product__price">
					<small>RM</small>
					<strong>{price}</strong>
				</p>
				<div className="product__rating">
					{Array(rating)
						.fill()
						.map((_, i) => (
							<p key={i}>
								<StarIcon />
							</p>
						))}
				</div>
			</div>
			<img src={image} alt="" />
			<button onClick={addToBasket}>Add to basket</button>
		</div>
	);
};

export default Product;
