import { Response } from "miragejs";
import { formatDate, requiresAuth } from "../utils/authUtils";

/**
 * All the routes related to user are present here.
 * */

/*
 * This handler handles get a user from userId in the db.
 * send GET Request at /api/users/:userId
 *
 */

export const getUserHandler = function (schema, request) {
	const currentuser = request.params.userId;
	try {
		const user = schema.users.findBy({ _id: currentuser }).attrs;
		return new Response(200, {}, { user });
	} catch (error) {
		return new Response(
			500,
			{},
			{
				error,
			}
		);
	}
};

/**
 * This handler handles updating user details.
 * send POST Request at /api/users/edit
 * body contains { userData }
 * */

export const editUserHandler = function (schema, request) {
	let user = requiresAuth.call(this, request);
	try {
		if (!user) {
			return new Response(
				404,
				{},
				{
					errors: [
						"The username you entered is not Registered. Not Found error",
					],
				}
			);
		}
		const { userData } = JSON.parse(request.requestBody);
		user = { ...user, ...userData, updatedAt: formatDate() };
		this.db.users.update({ _id: user._id }, user);
		return new Response(201, {}, { user });
	} catch (error) {
		return new Response(
			500,
			{},
			{
				error,
			}
		);
	}
};

/**
 * This handler gets all the user bookmarks from the db.
 * send GET Request at /api/users/bookmark/
 * */

export const getAddressHandler = function (schema, request) {
	const user = requiresAuth.call(this, request);
	try {
		if (!user) {
			return new Response(
				404,
				{},
				{
					errors: [
						"The username you entered is not Registered. Not Found error",
					],
				}
			);
		}
		return new Response(200, {}, { address: user.address });
	} catch (error) {
		return new Response(
			500,
			{},
			{
				error,
			}
		);
	}
};
/**
 * This handler handles adding a post to user's bookmarks in the db.
 * send POST Request at /api/users/bookmark/:postId/
 * */

export const addAddressHandler = function (schema, request) {
	const { address } = request.params;

	const user = requiresAuth.call(this, request);
	try {
		if (!user) {
			return new Response(
				404,
				{},
				{
					errors: [
						"The username you entered is not Registered. Not Found error",
					],
				}
			);
		}
		user.address.push(address);
		this.db.users.update(
			{ _id: user._id },
			{ ...user, updatedAt: formatDate() }
		);
		return new Response(200, {}, { address: user.address });
	} catch (error) {
		return new Response(
			500,
			{},
			{
				error,
			}
		);
	}
};

/**
 * This handler handles adding a post to user's bookmarks in the db.
 * send POST Request at /api/users/remove-bookmark/:postId/
 * */

export const removeAddressHandler = function (schema, request) {
	const { addressId } = request.params;
	let user = requiresAuth.call(this, request);
	try {
		if (!user) {
			return new Response(
				404,
				{},
				{
					errors: [
						"The username you entered is not Registered. Not Found error",
					],
				}
			);
		}

		const filteredAddress = user.address.filter(
			(currAddress) => currAddress._id !== addressId
		);
		user = { ...user, address: filteredAddress };
		this.db.users.update(
			{ _id: user._id },
			{ ...user, updatedAt: formatDate() }
		);
		return new Response(200, {}, { address: user.address });
	} catch (error) {
		return new Response(
			500,
			{},
			{
				error,
			}
		);
	}
};

export const editAddressHandler = function (schema, request) {
	const user = requiresAuth.call(this, request);
	try {
		if (!user) {
			return new Response(
				404,
				{},
				{
					errors: [
						"The username you entered is not Registered. Not Found error",
					],
				}
			);
		}
		const addressId = request.params.addressId;
		const { address } = JSON.parse(request.requestBody);
		const editAddress = user.address.filter(
			(currAddress) => currAddress._id === addressId
		);

		let newEdittedAddress = { ...editAddress, ...address };
		const newAddressArray = user.addressfilter(
			(currAddress) => currAddress._id !== addressId
		);
		user = { ...user, address: [...newAddressArray, newEdittedAddress] };
		this.db.users.update(
			{ _id: user._id },
			{ ...user, updatedAt: formatDate() }
		);
		return new Response(200, {}, { address: user.address });
	} catch (error) {
		return new Response(
			500,
			{},
			{
				error,
			}
		);
	}
};
