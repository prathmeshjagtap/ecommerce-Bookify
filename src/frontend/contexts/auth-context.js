import { createContext, useContext, useReducer } from "react";
import { authActions } from "../reducer";

const authContext = createContext(null);

const useAuthContext = () => useContext(authContext);

function AuthProvider({ children }) {
	const localstoragetoken = localStorage.getItem("token");

	const authReducer = (state, action) => {
		switch (action.type) {
			case authActions.FIRST_NAME:
				return { ...state, firstName: action.payload };
			case authActions.LAST_NAME:
				return { ...state, lastName: action.payload };
			case authActions.EMAIL:
				return { ...state, email: action.payload };
			case authActions.PASSWORD:
				return { ...state, password: action.payload };
			case authActions.CONFIRM_PASSWORD:
				return { ...state, confirmPassword: action.payload };
			case authActions.TOKEN:
				return { ...state, token: action.payload };
			case authActions.ERROR:
				return { ...state, error: action.payload };
			default:
				return state;
		}
	};
	const [authState, authDispatch] = useReducer(authReducer, {
		firstName: null,
		lastName: null,
		email: null,
		password: null,
		confirmPassword: null,
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
