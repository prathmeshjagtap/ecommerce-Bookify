import axios from "axios";
import { toast } from "react-toastify";
import { toastStyle } from "../components";
const addToWishlist = async (product, setWishList, token) => {
	try {
		const response = await axios.post(
			"/api/user/wishlist",
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
			setWishList(response.data.wishlist);
			toast.success("Product Added To WishList", toastStyle);
		}
	} catch (error) {
		if (error.response.status === 500) {
			toast.error("Please Login", toastStyle);
		} else {
			toast.error("Failed to add item to WishList", toastStyle);
		}
	}
};

export { addToWishlist };
