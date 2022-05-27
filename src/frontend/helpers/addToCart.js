import axios from "axios";
import { toast } from "react-toastify";
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
			toast.success("Product Added To Cart", {
				position: "top-right",
				autoClose: 1000,
			});
		}
	} catch (error) {
		if (error.response.status === 500) {
			toast.error("Please Login", {
				position: "top-right",
				autoClose: 1000,
			});
		} else {
			toast.error("Failed to add item to Cart", {
				position: "top-right",
				autoClose: 1000,
			});
		}
	}
};

export { addToCart };
