import { dataActions } from "./dataActionsConstant";

const dataReducer = (state, action) => {
	switch (action.type) {
		case dataActions.GET_PRODUCTS:
			return { ...state, products: action.payload, loading: true };
		case dataActions.GET_CATEGORIES:
			return { ...state, categories: action.payload, loading: true };
		case dataActions.ERROR:
			return { ...state, error: action.payload };
		default:
			return state;
	}
};

export { dataReducer };
