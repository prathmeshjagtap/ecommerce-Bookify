import axios from "axios";
import { toast } from "react-toastify";
import { toastStyle } from "../components";
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
			toast.error("Product Deleted from Cart", toastStyle);
		}
	} catch (error) {
		console.log(error);
		toast.error("Failed to Delete item from Cart ", toastStyle);
	}
	return false;
};

export { deleteFromCart };
