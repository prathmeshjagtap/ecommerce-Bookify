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
			if (action.payload === "childrenBooks")
				return {
					...state,
					filterByCategory: {
						...state.filterByCategory,
						childrenBooks: !state.filterByCategory.childrenBooks,
					},
				};
			if (action.payload === "fiction")
				return {
					...state,
					filterByCategory: {
						...state.filterByCategory,
						fiction: !state.filterByCategory.fiction,
					},
				};
			if (action.payload === "newReleases")
				return {
					...state,
					filterByCategory: {
						...state.filterByCategory,
						newReleases: !state.filterByCategory.newReleases,
					},
				};
			if (action.payload === "selfHelp")
				return {
					...state,
					filterByCategory: {
						...state.filterByCategory,
						selfHelp: !state.filterByCategory.selfHelp,
					},
				};
			if (action.payload === "biographies")
				return {
					...state,
					filterByCategory: {
						...state.filterByCategory,
						biographies: !state.filterByCategory.biographies,
					},
				};

		default:
			return {
				sortByPrice: null,
				priceRange: null,
				filterByCategory: {
					newReleases: false,
					fiction: false,
					biographies: false,
					childrenBooks: false,
					selfHelp: false,
				},
				ratings: null,
			};
	}
};

export { filterReducer };
