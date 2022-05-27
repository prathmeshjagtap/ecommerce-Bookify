import axios from "axios";
import { toast } from "react-toastify";
import { toastStyle } from "../components";

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
			toast.error("Product Decremented by 1", toastStyle);
		}
	} catch (error) {
		console.error(error);
		toast.error("Failed to Decrement item ", toastStyle);
	}
};

export { decrementCartItem };
