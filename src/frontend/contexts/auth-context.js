import { createContext, useContext, useReducer } from "react";
import { authReducer } from "../reducer";

const authContext = createContext(null);

const useAuthContext = () => useContext(authContext);

function AuthProvider({ children }) {
	const localstoragetoken = localStorage.getItem("token");

	const [authState, authDispatch] = useReducer(authReducer, {
		user: {
			firstName: null,
			lastName: null,
			email: null,
			password: null,
			confirmPassword: null,
		},

		error: null,
		token: localstoragetoken ?? null,
	});

	return (
		<authContext.Provider value={{ authState, authDispatch }}>
			{children}
		</authContext.Provider>
	);
}

export { AuthProvider, useAuthContext };
