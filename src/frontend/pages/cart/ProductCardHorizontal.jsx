import React from "react";
import {
	useWishlistContext,
	useAuthContext,
	useCartContext,
} from "../../contexts";
import {
	addToWishlist,
	deleteFromCart,
	deleteFromWishlist,
	incrementCartItem,
	decrementCartItem,
} from "../../helpers";
import "./cart.css";

function ProductCardHorizontal({ product }) {
	const { wishList, setWishList } = useWishlistContext();
	const { authState } = useAuthContext();
	const { token } = authState;
	const { setCart } = useCartContext();

	return (
		<div className="card__horizontal">
			<img className="card__image" src={product.image} />
			<div className="card__horizonatal__info">
				<div className="card__titles__horizontal">
					<h2>{product.title}</h2>
					<p>{product.author}</p>
				</div>
				<div className="card__price">
					<div className="current__price">
						<i className="fas fa-rupee-sign fa-1x"></i>
						<span>{product.price}</span>
					</div>
					<div className="previous__price">
						<i className="fas fa-rupee-sign fa-1x"></i>
						<span>{product.previousPrice}</span>
					</div>
				</div>
				<div className="quantity">
					<button
						className="quantity__minus"
						onClick={() => {
							if (product.qty <= 1) {
								deleteFromCart(product._id, setCart, token);
							} else {
								decrementCartItem(product._id, setCart, token);
							}
						}}
					>
						-
					</button>
					<span className="quantity__value">{product.qty}</span>

					<button
						className="quantity__plus"
						onClick={() => incrementCartItem(product._id, setCart, token)}
					>
						+
					</button>
				</div>
				<button
					className="btn btn-primary btn__horizontal"
					onClick={() => {
						deleteFromCart(product._id, setCart, token);
					}}
				>
					Remove from cart
				</button>
				{wishList.find((wishlistItem) => wishlistItem._id === product._id) ? (
					<button
						className="btn btn-outline-dark btn__horizontal"
						onClick={() => deleteFromWishlist(product._id, setWishList, token)}
					>
						Remove From wishlist
					</button>
				) : (
					<button
						className="btn btn-outline-dark btn__horizontal"
						onClick={() => {
							addToWishlist(product, setWishList, token);
							deleteFromCart(product._id, setCart, token);
						}}
					>
						Move to wishlist
					</button>
				)}
			</div>
		</div>
	);
}

export default ProductCardHorizontal;
