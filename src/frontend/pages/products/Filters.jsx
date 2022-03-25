import React from "react";
import "./products.css";
import { useFilter } from "../../contexts";
import { filterAction } from "../../reducer";

function Filters() {
	const { state, dispatch } = useFilter();

	const { sortByPrice, priceRange, ratings, categories } = state;

	const categoryArray = [
		"Children-Books",
		"Fiction",
		"New-Releases",
		"Self-Help",
		"Biographies",
	];

	const ratingsValue = [4, 3, 2, 1];

	return (
		<div>
			<aside className="aside__left">
				<div className="aside__filter">
					<h1 className="filter__heading">Filter</h1>
					<h3 onClick={() => dispatch({ type: "Clear" })}>Clear</h3>
				</div>
				<h1 className="filter__heading">Price</h1>
				<div>
					<div className="price__range">
						<p>100</p>
						<p>500</p>
						<p>1000</p>
					</div>
					<input
						value={priceRange || 100}
						type="range"
						min="100"
						max="1000"
						onChange={(e) =>
							dispatch({
								type: filterAction.PRICE_RANGE,
								payload: e.target.value,
							})
						}
					/>
				</div>

				<h1 className="filter__heading">Category</h1>
				<ul className="aside__list">
					{categoryArray.map((category) => (
						<li key={category}>
							<input
								checked={categories && categories.includes(category)}
								type="checkbox"
								value={category}
								onChange={() =>
									dispatch({
										type: filterAction.FILTER_BY_CATEGORY,
										payload: category,
									})
								}
							/>
							<label htmlFor={category}>{category}</label>
						</li>
					))}
				</ul>
				<ul className="aside__list">
					<h1 className="filter__heading">Rating</h1>
					{ratingsValue.map((rating) => (
						<li key={rating}>
							<input
								type="radio"
								checked={ratings === rating}
								id={rating + "star"}
								name="ratings"
								onChange={() =>
									dispatch({
										type: filterAction.FILTER_BY_RATINGS,
										payload: rating,
									})
								}
							/>
							<label htmlFor={rating}>{rating} Stars & above</label>
						</li>
					))}
				</ul>
				<ul className="aside__list">
					<h1 className="filter__heading">Sort By</h1>
					<li>
						<input
							type="radio"
							id="lowtoHigh"
							name="sortby"
							checked={sortByPrice === "LOW_TO_HIGH"}
							onChange={() =>
								dispatch({
									type: filterAction.SORT_BY_PRICE,
									payload: "LOW_TO_HIGH",
								})
							}
						/>
						<label htmlFor="lowtoHigh">Price- Low to High</label>
					</li>
					<li>
						<input
							type="radio"
							id="hightoLow"
							name="sortby"
							checked={sortByPrice === "HIGH_TO_LOW"}
							onChange={() =>
								dispatch({
									type: filterAction.SORT_BY_PRICE,
									payload: "HIGH_TO_LOW",
								})
							}
						/>
						<label htmlFor="hightoLow">Price- High to Low</label>
					</li>
				</ul>
			</aside>
		</div>
	);
}

export { Filters };
