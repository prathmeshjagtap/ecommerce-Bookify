import axios from "axios";
import { toast } from "react-toastify";

const incrementCartItem = async (id, setCart, token, quantity) => {
	try {
		const response = await axios.post(
			`/api/user/cart/${id}`,
			{
				action: {
					type: "increment",
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
			toast.success("Product Incremented by 1", {
				position: "top-right",
				autoClose: 1000,
			});
		}
	} catch (error) {
		console.error(error);
		toast.error("Failed to Increment item ", {
			position: "top-right",
			autoClose: 1000,
		});
	}
};

export { incrementCartItem };
