import axios from "axios";
import { dataActions } from "../reducer";

const getCategories = async () => {
	try {
		const response = await axios.get("/api/categories");
		if (response.status === 200) {
			return [...response.data.categories];
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

export { getCategories, getProducts };
