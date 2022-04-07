import { filterAction } from "./filterActions";

const filterReducer = (state, action) => {
	switch (action.type) {
		case filterAction.SORT_BY_PRICE:
			return { ...state, sortByPrice: action.payload };
		case filterAction.PRICE_RANGE:
			return { ...state, priceRange: action.payload };
		case filterAction.FILTER_BY_RATINGS:
			return { ...state, ratings: action.payload };
		case filterAction.FILTER_BY_CATEGORY:
			return {
				...state,
				categories: state.categories.includes(action.payload)
					? state.categories.filter((value) => value !== action.payload)
					: [...state.categories, action.payload],
			};
		case filterAction.SEARCH_QUERY:
			return { ...state, search: action.payload };
		default:
			return {
				sortByPrice: null,
				priceRange: null,
				categories: [],
				ratings: null,
			};
	}
};

export { filterReducer };
