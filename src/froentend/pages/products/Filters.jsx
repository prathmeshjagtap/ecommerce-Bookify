import React from "react";
import "./products.css";

function Filters() {
	return (
		<div>
			<aside className="aside__left">
				<div className="aside__filter">
					<h1 className="filter__heading">Filter</h1>
					<h3>Clear</h3>
				</div>
				<h1 className="filter__heading">Price</h1>
				<div>
					<div className="price__range">
						<p>50</p>
						<p>250</p>
						<p>500</p>
					</div>
					<input type="range" min="50" max="500" />
				</div>

				<h1 className="filter__heading">Category</h1>
				<ul className="aside__list">
					<li>
						<input type="checkbox" id="newrelease" />
						<label>New Releases</label>
					</li>
					<li>
						<input type="checkbox" id="fiction" />
						<label>Fiction</label>
					</li>
					<li>
						<input type="checkbox" id="Biograhies" />
						<label>Biographies</label>
					</li>
					<li>
						<input type="checkbox" id="childrens" />
						<label>Children Books</label>
					</li>
					<li>
						<input type="checkbox" id="selfhelp" />
						<label>Self Help Books</label>
					</li>
				</ul>
				<ul className="aside__list">
					<h1 className="filter__heading">Rating</h1>
					<li>
						<input type="radio" id="4star" name="ratings" />
						<label>4 Stars & above</label>
					</li>
					<li>
						<input type="radio" id="3star" name="ratings" />
						<label>3 Stars & above</label>
					</li>
					<li>
						<input type="radio" id="2star" name="ratings" />
						<label>2 Stars & above</label>
					</li>
					<li>
						<input type="radio" id="1star" name="ratings" />
						<label>1 Stars & above</label>
					</li>
				</ul>
				<ul className="aside__list">
					<h1 className="filter__heading">Sort By</h1>
					<li>
						<input type="radio" id="lowtoHigh" name="sortby" />
						<label>Price- Low to High</label>
					</li>
					<li>
						<input type="radio" id="hightoLow" name="sortby" />
						<label>Price- High to Low</label>
					</li>
				</ul>
			</aside>
		</div>
	);
}

export { Filters };
