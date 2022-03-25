import React from "react";
import { useNavigate } from "react-router-dom";
import { CardSlider, Navbar, Footer } from "../../components";
import BannerImg from "../../assets/Book lover-pana.svg";
import { useDataContext } from "../../contexts";
import CategoriesNav from "./CategoriesNav";
import SquareCard from "./SquareCard";
import { categories } from "../../constants";
import { newRealeaseProducts, fictionProducts } from "../../utils/";
import "./home.css";

function Home() {
	const { dataState } = useDataContext();
	const { products } = dataState;

	const navigate = useNavigate();
	const newReleaseBooks = newRealeaseProducts(products);
	const fictionBooks = fictionProducts(products);

	return (
		<div>
			<Navbar />
			<CategoriesNav />
			<div className="banner__container">
				<div className="banner__info">
					<h1 className="banner__title">Bookify</h1>
					<p className="banner__heading italics">your</p>
					<h4 className="banner__heading">ONLINE BOOK STORE</h4>
					<p className="banner__subheading italics">
						Read What you love, love what you read
					</p>
					<button
						className="btn btn-primary"
						onClick={() => navigate("/products")}
					>
						Shop Now
					</button>
				</div>
				<div className="bannerImg__container">
					<img className="bannerImg" src={BannerImg} alt="banner__img" />
				</div>
			</div>
			<SquareCard title="Shop By Category" data={categories} />
			<CardSlider title="New Release Books" data={newReleaseBooks} />
			<CardSlider title="Fiction Books" data={fictionBooks} />
			<Footer />
		</div>
	);
}

export { Home };
