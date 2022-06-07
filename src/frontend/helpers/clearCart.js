import axios from "axios";

const clearCart = async (setCart, token) => {
	try {
		const response = await axios.post(
			`/api/user/cart/clearCart`,
			{},
			{
				headers: {
					authorization: token,
				},
			}
		);
		setCart(response.data.cart);
	} catch (error) {
		console.error(error);
	}
};

export { clearCart };
