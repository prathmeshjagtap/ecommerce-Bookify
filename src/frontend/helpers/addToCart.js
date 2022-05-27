import axios from "axios";
import { toast } from "react-toastify";
import { toastStyle } from "../components";
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
			toast.success("Product Added To Cart", toastStyle);
		}
	} catch (error) {
		if (error.response.status === 500) {
			toast.error("Please Login", toastStyle);
		} else {
			toast.error("Failed to add item to Cart", toastStyle);
		}
	}
};

export { addToCart };
