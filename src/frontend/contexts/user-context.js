import { createContext, useContext, useReducer, useState } from "react";
import { userReducer } from "../reducer";

const userContext = createContext(null);

const useUserContext = () => useContext(userContext);

function UserProvider({ children }) {
	const [userState, userDispatch] = useReducer(userReducer, {
		currentuser: null,
		address: [],
	});
	const [deliveryAddress, setDeliveryAddress] = useState("");
	return (
		<userContext.Provider
			value={{ userState, userDispatch, deliveryAddress, setDeliveryAddress }}
		>
			{children}
		</userContext.Provider>
	);
}

export { UserProvider, useUserContext };
