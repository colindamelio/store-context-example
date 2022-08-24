import { createContext, useState } from "react";

const CartContext = createContext();

export function CartProvider({ children }) {
	const [itemsInCart, setItemsInCart] = useState([]);

	const addToCart = (name, price) => {
		const newState = [...itemsInCart];

		newState.push({
			name,
			price,
		});

		setItemsInCart(newState);
	};

	return (
		<CartContext.Provider value={{ itemsInCart, addToCart }}>
			{children}
		</CartContext.Provider>
	);
}

export default CartContext;
