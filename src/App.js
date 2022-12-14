import { Routes, Route } from "react-router-dom";


import Nav from "./components/Nav";
import Products from "./components/Products";
import Checkout from "./components/Checkout";

function App() {
	return (
		<div className="wrapper">
			<Nav />

			<Routes>
				<Route path="/" element={<Products />} />
				<Route
					path="/checkout"
					element={<Checkout />}
				/>
			</Routes>
		</div>
	);
}

export default App;

