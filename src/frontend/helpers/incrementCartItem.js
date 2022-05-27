import axios from "axios";
import { toast } from "react-toastify";
import { toastStyle } from "../components";

const incrementCartItem = async (id, setCart, token) => {
	try {
		const response = await axios.post(
			`/api/user/cart/${id}`,
			{
				action: {
					type: "increment",
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
			toast.success("Product Incremented by 1", toastStyle);
		}
	} catch (error) {
		console.error(error);
		toast.error("Failed to Increment item ", toastStyle);
	}
};

export { incrementCartItem };
