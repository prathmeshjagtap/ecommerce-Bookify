import { createContext, useContext, useReducer } from "react";
import { userReducer } from "../reducer";

const userContext = createContext(null);

const useUserContext = () => useContext(userContext);

function UserProvider({ children }) {
	const [userState, userDispatch] = useReducer(userReducer, {
		currentuser: null,
		address: [],
	});

	return (
		<userContext.Provider value={{ userState, userDispatch }}>
			{children}
		</userContext.Provider>
	);
}

export { UserProvider, useUserContext };
