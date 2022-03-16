import React, { useState, useEffect } from "react";
import { Navbar, WishListCard } from "../../components";
import "./wishList.css";

const axios = require("axios").default;

function WishList() {
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
			<main className="wishlist__container">
				<h1 className="wishlist__name">My Wishlist</h1>
				<div className="wishlist">
					{products &&
						products.map((product) => (
							<WishListCard key={product.id} product={product} />
						))}
				</div>
			</main>
		</div>
	);
}

export { WishList };
