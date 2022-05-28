import React from "react";
import { Routes, Route } from "react-router-dom";
import {
	Products,
	WishList,
	Cart,
	Home,
	Login,
	Signup,
	SingleProduct,
	Profile,
	Address,
	User,
} from "../pages";
import { PrivateRoute } from "./PrivateRoute";
function AllRoutes() {
	return (
		<div>
			<Routes>
				<Route path="/" element={<Home />} />
				<Route path="/products" element={<Products />} />
				<Route path="/products/:productId" element={<SingleProduct />} />
				<Route path="/Login" element={<Login />} />
				<Route path="/Signup" element={<Signup />} />
				<Route element={<PrivateRoute />}>
					<Route path="/profile" element={<Profile />}>
						<Route path="/profile" element={<User />} />
						<Route path="/profile/address" element={<Address />} />
					</Route>
					<Route path="/Cart" element={<Cart />} />
					<Route path="/WishList" element={<WishList />} />
				</Route>
			</Routes>
		</div>
	);
}

export { AllRoutes };
