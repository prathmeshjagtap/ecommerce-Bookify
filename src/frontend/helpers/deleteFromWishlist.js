import axios from "axios";
import { toast } from "react-toastify";
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
			toast.success("Product Deleted from wishlist", {
				position: "top-right",
				autoClose: 1000,
			});
		}
	} catch (error) {
		console.log(error);
		toast.error("Failed to Delete item from wishlist ", {
			position: "top-right",
			autoClose: 1000,
		});
	}
	return false;
};

export { deleteFromWishlist };
