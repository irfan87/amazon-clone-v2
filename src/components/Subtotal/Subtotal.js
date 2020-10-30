import React from "react";
import CurrencyFormat from "react-currency-format";

import "./Subtotal.css";

const Subtotal = () => {
	return (
		<div className="subtotal">
			<CurrencyFormat
				decimalScale={2}
				value={0}
				displayType={"text"}
				thousandSeparator={true}
				prefix={"RM"}
				renderText={(value) => {
					return (
						<>
							<p>
								Subtotal (0 items): <strong>0</strong>
							</p>
							<small className="subtotal__gift">
								<input type="checkbox" /> This order contains a gift
							</small>
						</>
					);
				}}
			/>
			<button>Proceed to checkout</button>
		</div>
	);
};

export default Subtotal;
