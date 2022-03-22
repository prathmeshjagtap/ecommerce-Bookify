import axios from "axios";

const deleteFromCart = async (id, setCart, token) => {
	try {
		const response = await axios.delete(
			`/api/user/cart/${id}`,

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
		console.log(error);
	}
	return false;
};

export { deleteFromCart };
