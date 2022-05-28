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
	if (state.categories.length !== 0) {
		return data.reduce((acc, curr) => {
			if (state.categories.includes(curr.categoryName)) {
				return [...acc, curr];
			} else {
				return acc;
			}
		}, []);
	}
	return data;
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

const newRealeaseProducts = (data) => {
	return data.filter((item) => item.categoryName === "New-Releases");
};
const fictionProducts = (data) => {
	return data.filter((item) => item.categoryName === "Fiction");
};
const similarProducts = (data, productId) => {
	const product = data.filter((item) => item._id === productId);
	return data
		.filter((item) => item.categoryName === product[0]?.categoryName)
		.filter((item) => item._id !== productId);
};

const searchVideo = (state, data) => {
	let { search } = state;
	if (search) {
		search = search.toLowerCase();
		return data.filter(
			(product) =>
				product.title.toLowerCase().includes(search) ||
				product.author.toLowerCase().includes(search)
		);
	}
	return data;
};

export {
	sortbyPriceFunction,
	filterByPrice,
	filterByCategory,
	filterByRatings,
	ComposeFunction,
	newRealeaseProducts,
	fictionProducts,
	searchVideo,
	similarProducts,
};
