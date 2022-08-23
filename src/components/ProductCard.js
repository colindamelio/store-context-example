import { FaSocks } from "react-icons/fa";

function ProductCard({ name, price }) {
	return (
		<li>
			<div>
				<FaSocks />
			</div>
			<div className="name">{name}</div>
			<div className="price">{price}</div>
			<button>add to cart</button>
		</li>
	);
}

export default ProductCard;
