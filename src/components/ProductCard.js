import { FaSocks } from "react-icons/fa";
import { useContext } from "react";
import CartContext from "../CartContext";

function ProductCard({ name, price }) {
	const { addToCart } = useContext(CartContext);

	return (
		<li>
			<div>
				<FaSocks />
			</div>
			<div className="name">{name}</div>
			<div className="price">{price}</div>
			<button onClick={() => addToCart(name, price)}>add to cart</button>
		</li>
	);
}

export default ProductCard;
