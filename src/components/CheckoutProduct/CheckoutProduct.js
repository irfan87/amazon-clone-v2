import React from "react";
import StarIcon from "@material-ui/icons/Star";

const CheckoutProduct = ({ id, title, image, price, rating }) => {
	return (
		<div className="checkoutProduct">
			<img src={image} alt={title} className="checkoutProduct__image" />
			<div className="checkoutProduct__info">
				<p className="checkoutPrduct__title">{title}</p>
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
				<button>Remove from basket</button>
			</div>
		</div>
	);
};

export default CheckoutProduct;
