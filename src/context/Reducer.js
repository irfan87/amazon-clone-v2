export const initialState = {
	basket: [],
	user: null,
};

export const getBasketCount = (basket) => {
	return basket?.reduce((amount, item) => item.price + amount, 0);
};

const reducer = (state, action) => {
	switch (action.type) {
		case "ADD_TO_BASKET":
			return {
				...state,
				basket: [...state.basket, action.item],
			};
		case "REMOVE_FROM_BASKET":
			let newBasket = [...state.basket];

			const findBasketID = state.basket.findIndex(
				(basketItem) => basketItem.id === action.id
			);

			if (findBasketID >= 0) {
				newBasket.splice(findBasketID, 1);
			} else {
				console.warn(
					`Can not remove the item #${action.id} because it is not in your basket`
				);
			}

			return {
				...state,
				basket: newBasket,
			};
		case "SET_USER":
			return {
				...state,
				user: action.user,
			};
		default:
			return state;
	}
};

export default reducer;
