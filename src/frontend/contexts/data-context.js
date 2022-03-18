import { createContext, useContext, useEffect, useReducer } from "react";
import { dataReducer } from "../reducer";

import { getCategories, getProducts } from "../utils";

const dataContext = createContext(null);

const useDataContext = () => useContext(dataContext);

function DataProvider({ children }) {
	const [dataState, dataDispatch] = useReducer(dataReducer, {
		products: [],
		categories: [],
		error: "",
		loading: false,
	});

	useEffect(() => {
		getProducts(dataDispatch);
		getCategories(dataDispatch);
	}, []);

	return (
		<dataContext.Provider value={{ dataState }}>
			{children}
		</dataContext.Provider>
	);
}

export { DataProvider, useDataContext };
