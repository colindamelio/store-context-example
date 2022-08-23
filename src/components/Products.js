import products from "../data/products";
import ProductCard from "./ProductCard";

function Products() {
	return (
		<ul className="products">
			{products.map((product, idx) => {
				return (
					<ProductCard key={idx} name={product.name} price={product.price} />
				);
			})}
		</ul>
	);
}

export default Products;
