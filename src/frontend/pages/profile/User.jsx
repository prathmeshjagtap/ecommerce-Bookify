import React from "react";
import { useAuthContext } from "../../contexts/auth-context";

function User() {
	const { authState } = useAuthContext();
	const { token, user } = authState;
	console.log(token, user);
	return <div></div>;
}

export { User };
