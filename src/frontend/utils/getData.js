import axios from "axios";
import { dataActions } from "../reducer";

const getCategories = async (dispatch) => {
	try {
		const response = await axios.get("/api/categories");
		if (response.status === 200) {
			dispatch({
				type: dataActions.GET_CATEGORIES,
				payload: response.data.categories,
			});
		}
	} catch (error) {
		dispatch({
			type: dataActions.ERROR,
			payload: error,
		});
	}
};

const getProducts = async (dispatch) => {
	try {
		const response = await axios.get("/api/products");
		if (response.status === 200) {
			dispatch({
				type: dataActions.GET_PRODUCTS,
				payload: response.data.products,
			});
		}
	} catch (error) {
		dispatch({
			type: dataActions.ERROR,
			payload: error,
		});
	}
};

const getSingleProduct = async (productId) => {
	try {
		const response = await axios.get(`/api/products/${productId}`);
		return response.data.product;
	} catch (error) {
		console.error(error);
	}
};

export { getCategories, getProducts, getSingleProduct };
