import React from "react";
import { Link } from "react-router-dom";
import { Navbar } from "../../components";
function Home() {
	return (
		<div>
			<Navbar />
			<div style={{ marginTop: "8rem", textAlign: "center" }}>
				<Link to="/products">Products Page</Link>
			</div>
		</div>
	);
}

export { Home };
