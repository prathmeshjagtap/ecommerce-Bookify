import React, { useState } from "react";
import "./navbar.css";
import Logo from "../../assets/Logo.svg";
import { Link } from "react-router-dom";
import {
	useAuthContext,
	useCartContext,
	useFilter,
	useWishlistContext,
} from "../../contexts";
import { authActions, filterAction } from "../../reducer";
import { useNavigate, useLocation } from "react-router-dom";

function Navbar() {
	const { authState, authDispatch } = useAuthContext();
	const { dispatch } = useFilter();
	const { token } = authState;
	const { wishList } = useWishlistContext();
	const { cart } = useCartContext();
	const [searchInput, setSearchInput] = useState("");
	const navigate = useNavigate();
	const location = useLocation();

	const logoutHandler = (e) => {
		e.preventDefault();
		localStorage.removeItem("token");
		authDispatch({
			type: authActions.TOKEN,
			payload: null,
		});
		navigate("/");
	};

	return (
		<nav className="navigation__component">
			<div className="nav">
				<a className="toggles">
					<i className="fas fa-bars"></i>
				</a>
				<Link className="nav__logo" to="/">
					<img className="nav__logo-image" alt="website logo" src={Logo} />
				</Link>

				<div
					className={
						location?.pathname !== "/" ? "nav__search" : "visibility__hidden"
					}
				>
					<input
						className="input"
						placeholder="Search For items"
						onChange={(e) => setSearchInput(e.target.value)}
					/>
					<i
						className="fa fa-search search__icon"
						onClick={() => {
							dispatch({
								type: filterAction.SEARCH_QUERY,
								payload: searchInput,
							});
						}}
					></i>
				</div>

				<ul className="nav__right">
					{token ? (
						<button className="btn btn-primary" onClick={logoutHandler}>
							Logout
						</button>
					) : (
						<Link to="/Login">
							<button className="btn btn-primary">Login</button>
						</Link>
					)}

					<Link to="/WishList" className="badge__container">
						<i className="far fa-heart Navigation__icon "></i>
						<div className="badge_count">{token ? wishList.length : 0}</div>
					</Link>
					<Link to="/Cart" className="badge__container">
						<i className="fas fa-shopping-cart Navigation__icon "></i>
						<div className="badge_count">{token ? cart.length : 0}</div>
					</Link>
				</ul>
			</div>
			<div
				className={
					location?.pathname !== "/" ? "search__mobile" : "display__none"
				}
			>
				<input
					className="input"
					placeholder="Search For items"
					onChange={(e) => setSearchInput(e.target.value)}
				/>
				<i
					className="fa fa-search search__icon"
					onClick={() => {
						dispatch({
							type: filterAction.SEARCH_QUERY,
							payload: searchInput,
						});
					}}
				></i>
			</div>
		</nav>
	);
}

export { Navbar };
