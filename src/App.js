import "./App.css";
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
} from "./frontend/pages";
import { PrivateRoute } from "./frontend/privateRoute/PrivateRoute";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function App() {
	return (
		<div className="App">
			<Routes>
				<Route path="/" element={<Home />} />
				<Route path="/products" element={<Products />} />
				<Route path="/products/:productId" element={<SingleProduct />} />
				<Route
					path="/profile"
					element={
						<PrivateRoute>
							<Profile />
						</PrivateRoute>
					}
				/>
				<Route
					path="/Cart"
					element={
						<PrivateRoute>
							<Cart />
						</PrivateRoute>
					}
				/>
				<Route
					path="/WishList"
					element={
						<PrivateRoute>
							<WishList />
						</PrivateRoute>
					}
				/>
				<Route path="/Login" element={<Login />} />
				<Route path="/Signup" element={<Signup />} />
			</Routes>
			<ToastContainer />
		</div>
	);
}

export default App;
