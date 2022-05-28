import React from "react";
import { Navbar } from "../../components";
import { useCartContext } from "../../contexts";
import BillCard from "./BillCard";
import ProductCardHorizontal from "./ProductCardHorizontal";
import { useNavigate } from "react-router";
import "./cart.css";

function Cart() {
	const { cart } = useCartContext();
	const navigate = useNavigate();
	return (
		<div>
			<Navbar />
			<h1 className="cart__name">My Cart</h1>
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
					<div className="empty__cart_container">
						<h3 className="empty__Cart">
							Your Cart is Empty , Add items to cart
						</h3>
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

export { Cart };
