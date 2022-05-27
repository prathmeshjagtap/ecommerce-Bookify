import axios from "axios";
import { toast } from "react-toastify";
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
			toast.success("Product Deleted from Cart", {
				position: "top-right",
				autoClose: 1000,
			});
		}
	} catch (error) {
		console.log(error);
		toast.error("Failed to Delete item from Cart ", {
			position: "top-right",
			autoClose: 1000,
		});
	}
	return false;
};

export { deleteFromCart };
