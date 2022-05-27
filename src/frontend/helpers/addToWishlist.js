import axios from "axios";
import { toast } from "react-toastify";
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
			toast.success("Product Added To WishList", {
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
			toast.error("Failed to add item to WishList", {
				position: "top-right",
				autoClose: 1000,
			});
		}
	}
};

export { addToWishlist };
