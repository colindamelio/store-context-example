import { Link } from "react-router-dom";
import { TiShoppingCart } from "react-icons/ti";

function Nav() {
	return (
		<nav>
			<Link to="/">
				<h1>My Store</h1>
			</Link>
			<Link to="/checkout">
				<TiShoppingCart />
			</Link>
		</nav>
	);
}

export default Nav;
