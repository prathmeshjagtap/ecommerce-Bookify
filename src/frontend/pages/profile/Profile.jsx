import React from "react";
import { Navbar } from "../../components";
import { Link, Outlet } from "react-router-dom";
import "./profile.css";
function Profile() {
	return (
		<div>
			<Navbar />
			<div className="user__details__container">
				<Link to="/profile">
					<div className="user__action__box">
						<i className="fas fa-user user__action_icon"></i>
						<span>
							<h3>Profile</h3>
							<h5>Details</h5>
						</span>
					</div>
				</Link>
				<Link to="/profile/address">
					<div className="user__action__box">
						<i className="fas fa-map-marker-alt user__action_icon"></i>
						<span>
							<h3>Address</h3>
							<h5>All Address</h5>
						</span>
					</div>
				</Link>
			</div>
			<div>
				<Outlet />
			</div>
		</div>
	);
}

export { Profile };
