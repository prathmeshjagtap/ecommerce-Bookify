import React from "react";
import "./ecommerceCard.css";
import {
	useAuthContext,
	useCartContext,
	useWishlistContext,
} from "../../contexts";
import {
	deleteFromWishlist,
	addToCart,
	incrementCartItem,
} from "../../helpers";
import { Link } from "react-router-dom";

function WishListCard({ product }) {
	const { authState } = useAuthContext();
	const { token } = authState;
	const { setWishList } = useWishlistContext();
	const { cart, setCart } = useCartContext();

	return (
		<div className="card__ecommerce">
			<div className="card__dismiss">
				<i
					className="far fa-times-circle fa-2x"
					onClick={() => deleteFromWishlist(product._id, setWishList, token)}
				></i>
			</div>
			<Link to={`/products/${product._id}`}>
				<img className="card__image" src={product.image} alt={product.title} />
			</Link>
			<div className="card__titles">
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
				<div className="static__rating">
					<p>{product.rating}</p>
					<i className="fas fa-star rating__icon"></i>
				</div>
			</div>

			<button
				className="card__button-ecom"
				onClick={() => {
					cart.find((cartItem) => cartItem._id == product._id)
						? incrementCartItem(product._id, setCart, token, null)
						: addToCart(product, setCart, token);
				}}
			>
				Add to cart
			</button>
		</div>
	);
}

export { WishListCard };
