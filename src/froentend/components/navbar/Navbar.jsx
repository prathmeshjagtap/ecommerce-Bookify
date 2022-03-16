import React from "react";
import "./navbar.css";
import Logo from "../../assets/Logo.svg";
import { Link } from "react-router-dom";

function Navbar() {
	return (
		<div>
			<nav className="navigation__component">
				<div className="nav">
					<a className="toggles">
						<i className="fas fa-bars"></i>
					</a>
					<Link className="nav__logo" to="/">
						<img className="nav__logo-image" alt="website logo" src={Logo} />
					</Link>
					<div className="nav__search">
						<input className="input" placeholder="Search For items" />
						<i className="fa fa-search search__icon"></i>
					</div>

					<ul className="nav__right">
						<Link to="/Login">
							<button className="btn btn-primary">Login</button>
						</Link>

						<Link to="/WishList" className="badge__container">
							<i className="far fa-heart Navigation__icon "></i>
							<div className="badge_count">10</div>
						</Link>
						<Link to="/Cart" className="badge__container">
							<i className="fas fa-shopping-cart Navigation__icon "></i>
							<div className="badge_count">0</div>
						</Link>
					</ul>
				</div>
				<div className="search__mobile">
					<input className="input" placeholder="Search For items" />
					<i className="fa fa-search search__icon"></i>
				</div>
			</nav>
		</div>
	);
}

export { Navbar };
