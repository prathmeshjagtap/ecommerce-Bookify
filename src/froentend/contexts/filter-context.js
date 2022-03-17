import { createContext, useContext, useReducer } from "react";
import { filterReducer } from "../reducer";

const filterContext = createContext(null);

const useFilter = () => useContext(filterContext);

const FilterProvider = ({ children }) => {
	const [state, dispatch] = useReducer(filterReducer, {
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
	});

	return (
		<filterContext.Provider value={{ state, dispatch }}>
			{children}
		</filterContext.Provider>
	);
};

export { FilterProvider, useFilter };
