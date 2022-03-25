import React from "react";
import { ProductCard } from "../ecommerceCards/ProductCard";
import "./cardSlider.css";

function CardSlider({ title, data }) {
	return (
		<div className="card__slider">
			<h2 className="card__title">{title}</h2>
			<div className="card__slider_items">
				{data.map((item) => {
					return <ProductCard key={item._id} product={item} />;
				})}
			</div>
		</div>
	);
}

export { CardSlider };
