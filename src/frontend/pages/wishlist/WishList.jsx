import React from "react";
import { Link } from "react-router-dom";
import { Navbar, WishListCard } from "../../components";
import { useWishlistContext } from "../../contexts";

import "./wishList.css";

function WishList() {
	const { wishList } = useWishlistContext();

	return (
		<div>
			<Navbar />

			<main className="wishlist__container">
				<Link to="/products">Products Page</Link>
				<h1 className="wishlist__name">My Wishlist</h1>
				<div className="wishlist">
					{wishList &&
						wishList.map((product) => (
							<WishListCard key={product.id} product={product} />
						))}
				</div>
			</main>
		</div>
	);
}

export { WishList };
