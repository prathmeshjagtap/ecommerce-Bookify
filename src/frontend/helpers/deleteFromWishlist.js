import axios from "axios";
import { toast } from "react-toastify";
import { toastStyle } from "../components";
const deleteFromWishlist = async (id, setWishList, token) => {
	try {
		const response = await axios.delete(
			`/api/user/wishlist/${id}`,

			{
				headers: {
					authorization: token,
				},
			}
		);

		if (response.status === 200) {
			setWishList(response.data.wishlist);
			toast.error("Product Deleted from wishlist", toastStyle);
		}
	} catch (error) {
		console.log(error);
		toast.error("Failed to Delete item from wishlist ", toastStyle);
	}
	return false;
};

export { deleteFromWishlist };
