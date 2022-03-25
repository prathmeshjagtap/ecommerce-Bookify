import React from "react";
import { useFilter } from "../../contexts";
import { useNavigate } from "react-router-dom";
import { categories } from "../../constants";

function CategoriesNav() {
	const { dispatch } = useFilter();
	const navigate = useNavigate();
	return (
		<div>
			<div className="Categories__container">
				{categories.map((category) => (
					<li key={category}>
						<h3
							className="category__name"
							onClick={() => {
								dispatch({
									type: "FILTER_BY_CATEGORY",
									payload: category,
								});

								navigate("/products");
							}}
						>
							{category}
						</h3>
					</li>
				))}
			</div>
		</div>
	);
}

export default CategoriesNav;
