import React from "react";

import { useFilter } from "../../contexts";
import { useNavigate } from "react-router-dom";

function SquareCard({ title, data }) {
	const { dispatch } = useFilter();
	const navigate = useNavigate();

	return (
		<div className="square__card">
			<h2 className="card__title">{title}</h2>
			<div className="Square__card__container">
				{data.map((item) => (
					<div
						key={item}
						className="Square__card"
						onClick={() => {
							dispatch({
								type: "FILTER_BY_CATEGORY",
								payload: item,
							});

							navigate("/products");
						}}
					>
						<p className="square__card__name">{item}</p>
					</div>
				))}
			</div>
		</div>
	);
}

export default SquareCard;
