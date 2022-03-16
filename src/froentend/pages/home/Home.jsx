import React from "react";
import { Link } from "react-router-dom";
function Home() {
	return (
		<div>
			Home
			<Link to="/products">Products</Link>
		</div>
	);
}

export { Home };
