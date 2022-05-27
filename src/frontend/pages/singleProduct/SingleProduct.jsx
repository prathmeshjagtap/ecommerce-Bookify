import React, { useState, useEffect } from "react";
import { CardSlider, Navbar } from "../../components";
import { useParams, useNavigate } from "react-router-dom";
import { getSingleProduct, similarProducts } from "../../utils";
import "./singleProduct.css";
import {
	useCartContext,
	useAuthContext,
	useWishlistContext,
	useDataContext,
} from "../../contexts";
import { addToWishlist, addToCart } from "../../helpers";

function SingleProduct() {
	const { productId } = useParams();
	const navigate = useNavigate();
	const [singleProduct, setSingleProduct] = useState(null);
	const {
		authState: { token },
	} = useAuthContext();
	const { cart, setCart } = useCartContext();
	const { wishList, setWishList } = useWishlistContext();
	const {
		dataState: { products },
	} = useDataContext();
	const similarProductsData = similarProducts(products, productId);

	useEffect(() => {
		(async () => {
			try {
				const product = await getSingleProduct(productId);
				setSingleProduct(product);
			} catch (error) {
				console.log(error);
			}
		})();
	}, [productId]);

	return (
		<div>
			<Navbar />
			<div className="singleProduct__card">
				<div className="single_product_card">
					<img
						src={singleProduct?.image}
						className="single_product_card_image"
						alt={singleProduct?.title}
					/>
					<div className="card__horizonatal__info single_product_card__info">
						<div className="card__titles__horizontal">
							<div className="flex">
								<h2>{singleProduct?.title}</h2>
								<p>(English, Paperback) </p>
							</div>
							<p>{singleProduct?.author}</p>
						</div>
						<div className="rating">
							<h4>{singleProduct?.rating}</h4>
							<i className="fas fa-star rating__icon"></i>
							<p>158 Ratings & 15 Reviews</p>
						</div>
						<div className="product__description">
							{`${singleProduct?.title} is one of the bestsellers in the ${singleProduct?.categoryName} category. Buy it now and increase your knowelege`}
						</div>
						<div className="card__price">
							<div className="current__price">
								<i className="fas fa-rupee-sign fa-1x"></i>
								<span>{singleProduct?.price}</span>
							</div>
							<div className="previous__value">
								<i className="fas fa-rupee-sign fa-1x"></i>
								<span>{singleProduct?.previousPrice}</span>
							</div>
						</div>

						<div className="singleProduct__card__buttons">
							{cart.find((cartItem) => cartItem._id === singleProduct?._id) ? (
								<button
									className="btn btn-primary btn__horizontal"
									onClick={() => navigate("/cart")}
								>
									Go to Cart
								</button>
							) : (
								<button
									className="btn btn-primary btn__horizontal"
									onClick={() => {
										token
											? addToCart(singleProduct, setCart, token)
											: navigate("/login");
									}}
								>
									Add to cart
								</button>
							)}

							{wishList.find(
								(wishlistItem) => wishlistItem._id === singleProduct?._id
							) ? (
								<button
									className="btn btn-outline-dark btn__horizontal"
									onClick={(e) => {
										e.stopPropagation();
										navigate("/wishList");
									}}
								>
									Go to Wishlist
								</button>
							) : (
								<button
									className="btn btn-outline-dark btn__horizontal"
									onClick={() => {
										token
											? addToWishlist(singleProduct, setWishList, token)
											: navigate("/login");
									}}
								>
									Add to wishlist
								</button>
							)}
						</div>
					</div>
				</div>
			</div>
			{similarProductsData?.length > 0 && (
				<CardSlider title="Similar Products" data={similarProductsData} />
			)}
		</div>
	);
}

export { SingleProduct };
