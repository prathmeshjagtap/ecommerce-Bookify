import { useContext, createContext, useState, useEffect } from "react";
import { useAuthContext } from "./auth-context";
import axios from "axios";

const cartContext = createContext(null);

const useCartContext = () => useContext(cartContext);

function CartProvider({ children }) {
	const [cart, setCart] = useState([]);
	const { authState } = useAuthContext();
	const { token } = authState;
	useEffect(() => {
		if (token) {
			(async () => {
				try {
					const response = await axios.get("/api/user/cart", {
						headers: {
							authorization: token,
						},
					});

					if (response.status === 200) {
						setCart(response.data.cart);
					}
				} catch (error) {
					console.log(error);
				}
			})();
		} else {
			setCart([]);
		}
	}, [token]);

	return (
		<cartContext.Provider value={{ cart, setCart }}>
			{children}
		</cartContext.Provider>
	);
}

export { CartProvider, useCartContext };
