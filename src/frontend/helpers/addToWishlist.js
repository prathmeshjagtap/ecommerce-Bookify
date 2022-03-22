import axios from "axios";

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
		}
	} catch (error) {
		console.error(error);
	}
};

export { addToWishlist };
