import "./App.css";
import { Routes, Route } from "react-router-dom";
import {
	Products,
	WishList,
	Cart,
	Home,
	Login,
	Signup,
} from "./frontend/pages";
import { PrivateRoute } from "./frontend/privateRoute/PrivateRoute";

function App() {
	return (
		<div className="App">
			<Routes>
				<Route path="/" element={<Home />} />
				<Route path="/products" element={<Products />} />
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
		</div>
	);
}

export default App;
