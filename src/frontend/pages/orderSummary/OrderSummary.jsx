import React from "react";
import { useCartContext } from "../../contexts";
import { Navbar } from "../../components";
import BillCard from "../cart/BillCard";
import ProductCardHorizontal from "../cart/ProductCardHorizontal";
import "../cart/cart.css";

function OrderSummary() {
	const { cart } = useCartContext();
	return (
		<div>
			<Navbar />
			<h1 className="cart__name">Order Summnary</h1>
			<main className="cart__conatainer">
				<div className="cart__items">
					{cart &&
						cart.map((product) => (
							<ProductCardHorizontal key={product._id} product={product} />
						))}
				</div>
				{cart?.length && <BillCard />}
			</main>
		</div>
	);
}

export { OrderSummary };
