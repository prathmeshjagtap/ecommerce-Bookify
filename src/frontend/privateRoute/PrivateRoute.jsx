import React from "react";
import { Navigate, useLocation } from "react-router-dom";
import { useAuthContext } from "../contexts";

function PrivateRoute({ children }) {
	const location = useLocation();
	const {
		authState: { token },
	} = useAuthContext();

	return token ? (
		children
	) : (
		<Navigate to="/login" state={{ from: location }} replace />
	);
}

export { PrivateRoute };
