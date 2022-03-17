const sortbyPriceFunction = (state, data) => {
	if (state.sortByPrice && state.sortByPrice === "LOW_TO_HIGH") {
		return [...data].sort((firstItem, secondItem) => {
			return firstItem.price - secondItem.price;
		});
	} else if (state.sortByPrice && state.sortByPrice === "HIGH_TO_LOW") {
		return [...data].sort((firstItem, secondItem) => {
			return secondItem.price - firstItem.price;
		});
	}
	return data;
};

const filterByPrice = (state, data) => {
	if (state.priceRange) {
		return data.filter((item) => Number(item.price) < Number(state.priceRange));
	}
	return data;
};

const filterByCategory = (state, data) => {
	let filterByCategoryData = [];
	let flag = false;
	for (const category in state.filterByCategory) {
		if (state.filterByCategory[category]) {
			flag = true;
			filterByCategoryData = [
				...filterByCategoryData,
				...data.filter((item) => item.categoryName === category),
			];
		}
	}

	return flag ? filterByCategoryData : data;
};

const filterByRatings = (state, data) => {
	if (state.ratings) {
		return data.filter((item) => Number(item.rating) >= Number(state.ratings));
	}
	return data;
};

const ComposeFunction =
	(...args) =>
	(state, data) =>
		args.reduce((acc, current) => current(state, acc), data);

export {
	sortbyPriceFunction,
	filterByPrice,
	filterByCategory,
	filterByRatings,
	ComposeFunction,
};
