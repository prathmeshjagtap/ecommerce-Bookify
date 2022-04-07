import React from "react";
import { Navbar, ProductCard } from "../../components";
import { Filters } from "./Filters";
import { useFilter, useDataContext } from "../../contexts";
import {
	ComposeFunction,
	sortbyPriceFunction,
	filterByPrice,
	filterByRatings,
	filterByCategory,
	searchVideo,
} from "../../utils/filters";
import "./products.css";

function Products() {
	const { state } = useFilter();
	const { dataState } = useDataContext();

	const products = ComposeFunction(
		sortbyPriceFunction,
		filterByPrice,
		filterByRatings,
		filterByCategory,
		searchVideo
	)(state, dataState.products);

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
