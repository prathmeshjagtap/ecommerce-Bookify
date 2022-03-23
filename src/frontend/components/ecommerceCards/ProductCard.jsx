import React from "react";
import "./ecommerceCard.css";
import {
	useWishlistContext,
	useAuthContext,
	useCartContext,
} from "../../contexts";
import { addToWishlist, deleteFromWishlist, addToCart } from "../../helpers";
import { useNavigate } from "react-router-dom";

function ProductCard({ product }) {
	const { wishList, setWishList } = useWishlistContext();
	const { authState } = useAuthContext();
	const { token } = authState;
	const { cart, setCart } = useCartContext();
	const navigate = useNavigate();

	return (
		<div className="card__ecommerce">
			<div className="card__badge">
				{wishList.find((wishlistItem) => wishlistItem._id === product._id) ? (
					<i
						className="fas fa-heart fa-2x"
						onClick={() => deleteFromWishlist(product._id, setWishList, token)}
					></i>
				) : (
					<i
						className="far fa-heart fa-2x"
						onClick={() => {
							token
								? addToWishlist(product, setWishList, token)
								: navigate("/login");
						}}
					></i>
				)}
			</div>
			<img className="card__image" src={product.image} alt={product.title} />
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
			{cart.find((cartItem) => cartItem._id === product._id) ? (
				<button className="card__button-ecom" onClick={() => navigate("/cart")}>
					Go to Cart
				</button>
			) : (
				<button
					className="card__button-ecom"
					onClick={() => {
						token ? addToCart(product, setCart, token) : navigate("/login");
					}}
				>
					Add to cart
				</button>
			)}
		</div>
	);
}

export { ProductCard };
