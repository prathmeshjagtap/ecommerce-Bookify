import React from "react";
import { Link } from "react-router-dom";
function Home() {
	return (
		<div>
			<Link to="/products">Click here to See the Preview of Products Page</Link>
		</div>
	);
}

export { Home };
