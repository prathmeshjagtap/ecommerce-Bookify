import { createContext, useContext, useState, useEffect } from "react";
import axios from "axios";
import { useAuthContext } from "./auth-context";

const wishlistContext = createContext(null);

function WishListProvider({ children }) {
	const [wishList, setWishList] = useState([]);

	const { authState } = useAuthContext();
	const { token } = authState;
	useEffect(() => {
		(async () => {
			try {
				const response = await axios.get("/api/user/wishlist", {
					headers: {
						authorization: token,
					},
				});

				if (response.status === 200) {
					setWishList(response.data.wishlist);
				}
			} catch (error) {
				console.log(error);
			}
		})();
	}, []);

	return (
		<wishlistContext.Provider value={{ wishList, setWishList }}>
			{children}
		</wishlistContext.Provider>
	);
}

const useWishlistContext = () => useContext(wishlistContext);

export { WishListProvider, useWishlistContext };
