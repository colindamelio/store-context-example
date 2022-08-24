import { useContext } from "react";
import CartContext from "../CartContext";

function Checkout() {
	const { itemsInCart } = useContext(CartContext);
	return (
		<>
			<h1>Checkout Page</h1>
			{itemsInCart.map((item) => {
				return (
					<>
						<p>{item.name}</p>
						<p>{item.price}</p>
					</>
				);
			})}
		</>
	);
}

export default Checkout;
