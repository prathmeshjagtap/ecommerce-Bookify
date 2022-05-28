import React from "react";
import { Navigate, useLocation, Outlet } from "react-router-dom";
import { useAuthContext } from "../contexts";

function PrivateRoute() {
	const location = useLocation();
	const {
		authState: { token },
	} = useAuthContext();

	return token ? (
		<Outlet />
	) : (
		<Navigate to="/login" state={{ from: location }} replace />
	);
}

export { PrivateRoute };
