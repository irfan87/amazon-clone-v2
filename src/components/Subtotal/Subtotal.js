import React from "react";
import CurrencyFormat from "react-currency-format";
import { useHistory } from "react-router-dom";
import { getBasketCount } from "../../context/Reducer";
import { useStateValue } from "../../context/StateProvider";

import "./Subtotal.css";

const Subtotal = () => {
	const history = useHistory();

	const [{ basket }] = useStateValue();

	return (
		<div className="subtotal">
			<CurrencyFormat
				decimalScale={2}
				value={getBasketCount(basket)}
				displayType={"text"}
				thousandSeparator={true}
				prefix={"RM"}
				renderText={(value) => {
					return (
						<>
							<p>
								Subtotal ({basket.length} items): <strong>{value}</strong>
							</p>
							<small className="subtotal__gift">
								<input type="checkbox" /> This order contains a gift
							</small>
						</>
					);
				}}
			/>
			<button onClick={(e) => history.push("/payment")}>
				Proceed to checkout
			</button>
		</div>
	);
};

export default Subtotal;
