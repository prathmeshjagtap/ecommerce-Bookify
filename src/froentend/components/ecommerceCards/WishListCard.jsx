import React from "react";
import "./ecommerceCard.css";

function WishListCard({ product }) {
	return (
		<div className="card__ecommerce">
			<div className="card__dismiss">
				<i className="far fa-times-circle fa-2x"></i>
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
			<button className="card__button-ecom">Add to cart</button>
		</div>
	);
}

export { WishListCard };
