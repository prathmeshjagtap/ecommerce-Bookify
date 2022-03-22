import React from "react";
import { Navbar } from "../../components";
import { useCartContext } from "../../contexts";
import BillCard from "./BillCard";
import ProductCardHorizontal from "./ProductCardHorizontal";
import "./cart.css";

function Cart() {
	const { cart } = useCartContext();
	return (
		<div>
			<Navbar />
			<h1 className="cart__name">My Wishlist</h1>
			<main className="cart__conatainer">
				<div className="cart__items">
					{cart &&
						cart.map((product) => (
							<ProductCardHorizontal key={product._id} product={product} />
						))}
				</div>
				{cart.length ? (
					<BillCard />
				) : (
					<h4 className="empty__Cart">
						Your Cart is Empty , Add items to cart
					</h4>
				)}
			</main>
		</div>
	);
}

export { Cart };
