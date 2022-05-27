import axios from "axios";
import { toast } from "react-toastify";

const decrementCartItem = async (id, setCart, token) => {
	try {
		const response = await axios.post(
			`/api/user/cart/${id}`,
			{
				action: {
					type: "decrement",
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
			toast.success("Product Decremented by 1", {
				position: "top-right",
				autoClose: 1000,
			});
		}
	} catch (error) {
		console.error(error);
		toast.error("Failed to Decrement item ", {
			position: "top-right",
			autoClose: 1000,
		});
	}
};

export { decrementCartItem };
