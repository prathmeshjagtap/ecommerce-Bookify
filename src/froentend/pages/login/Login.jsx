import React from "react";
import { Loginform } from "./LoginForm";
import { Navbar } from "../../components";

function Login() {
	return (
		<div>
			<Navbar />
			<Loginform />
		</div>
	);
}

export { Login };
