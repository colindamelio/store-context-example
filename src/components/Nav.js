import { Link } from "react-router-dom";
import { TiShoppingCart } from "react-icons/ti";
import { useContext } from "react";
import CartContext from "../CartContext";

function Nav() {
	const { itemsInCart } = useContext(CartContext);

	return (
		<nav>
			<Link to="/">
				<h1>My Store</h1>
			</Link>
			<Link to="/checkout">
				<TiShoppingCart />
				<span>{itemsInCart.length}</span>
			</Link>
		</nav>
	);
}

export default Nav;
