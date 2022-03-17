import React from "react";
import { SignupForm } from "./SignupForm";
import { Navbar } from "../../components";

function Signup() {
	return (
		<div>
			<Navbar />
			<SignupForm />
		</div>
	);
}

export { Signup };
