import React, { useState, useEffect } from "react";
import { Navbar, ProductCard } from "../../components";
import { Filters } from "./Filters";
import "./products.css";

const axios = require("axios").default;

function Products() {
	const [products, setProducts] = useState([]);

	useEffect(() => {
		(async () => {
			try {
				const response = await axios.get("/api/products");
				if (response.status === 200) {
					setProducts([...response.data.products]);
				}
			} catch (error) {
				console.log(error);
			}
		})();
	}, []);
	return (
		<div>
			<Navbar />
			<div className="container">
				<Filters />
				<main className="main">
					<h1 className="Product__categoery__name">
						Showing All {products && products.length} Products
					</h1>
					<div className="products">
						{products &&
							products.map((product) => (
								<ProductCard key={product.id} product={product} />
							))}
					</div>
				</main>
			</div>
		</div>
	);
}

export { Products };
