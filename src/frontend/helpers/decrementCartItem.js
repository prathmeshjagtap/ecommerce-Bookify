import axios from "axios";

const decrementCartItem = async (id, setCart, token, quantity) => {
	try {
		const response = await axios.post(
			`/api/user/cart/${id}`,
			{
				action: {
					type: "decrement",
				},
				quantity: {
					value: quantity,
				},
			},

			{
				headers: {
					authorization: token,
				},
			}
		);

		if (response.status === 200) {
			setCart(response.data.cart);
		}
	} catch (error) {
		console.error(error);
	}
};

export { decrementCartItem };
