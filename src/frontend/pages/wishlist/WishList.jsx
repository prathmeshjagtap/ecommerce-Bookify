import React from "react";
import { useNavigate } from "react-router-dom";
import { Navbar, WishListCard } from "../../components";
import { useWishlistContext } from "../../contexts";

import "./wishList.css";

function WishList() {
	const { wishList } = useWishlistContext();
	const navigate = useNavigate();
	return (
		<div>
			<Navbar />

			<main className="wishlist__container">
				<h1 className="wishlist__name">My Wishlist</h1>
				{wishList?.length > 0 ? (
					<div className="wishlist">
						{wishList.map((product) => (
							<WishListCard key={product.id} product={product} />
						))}
					</div>
				) : (
					<div className="empty__wishlist_container">
						<h1>You Dont have items in the Wishlist</h1>
						<button
							className="btn btn-primary "
							onClick={() => navigate("/products")}
						>
							Start Shopping
						</button>
					</div>
				)}
			</main>
		</div>
	);
}

export { WishList };
