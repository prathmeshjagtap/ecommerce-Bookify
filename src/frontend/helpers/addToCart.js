import axios from "axios";

const addToCart = async (product, setCart, token) => {
	try {
		const response = await axios.post(
			"/api/user/cart",
			{
				product,
			},
			{
				headers: {
					authorization: token,
				},
			}
		);

		if (response.status === 201) {
			setCart(response.data.cart);
		}
	} catch (error) {
		console.error(error);
	}
};

export { addToCart };
