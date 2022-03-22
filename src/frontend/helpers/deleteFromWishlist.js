import axios from "axios";

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
		}
	} catch (error) {
		console.log(error);
	}
	return false;
};

export { deleteFromWishlist };
