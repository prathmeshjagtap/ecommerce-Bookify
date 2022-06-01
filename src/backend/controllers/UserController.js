import { Response } from "miragejs";
import { formatDate, requiresAuth } from "../utils/authUtils";
import { v4 as uuid } from "uuid";
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
	const { address } = JSON.parse(request.requestBody);
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
		const _id = uuid();
		let newAddress = {
			_id,
			...address,
		};
		user.address.push(newAddress);
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
		const {
			address: {
				name,
				mobile,
				area,
				locality,
				pincode,
				city,
				state,
				alternatePhoneNumber,
			},
		} = JSON.parse(request.requestBody);

		let addressList = user.address;
		addressList.forEach((address) => {
			if (address._id === addressId) {
				address.name = name;
				address.mobile = mobile;
				address.area = area;
				address.locality = locality;
				address.pincode = pincode;
				address.city = city;
				address.state = state;
				address.alternatePhoneNumber = alternatePhoneNumber;
			}
		});
		console.log(addressList);
		let userData = { ...user, address: addressList };
		this.db.users.update(
			{ _id: user._id },
			{ ...userData, updatedAt: formatDate() }
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
