import React from "react";
import { Link } from "react-router-dom";
import "./forms.css";

function Loginform() {
	return (
		<div>
			<main className="signup__container">
				<div className="signup__div">
					<form className="form">
						<h2 className="form__name">Login</h2>
						<div className="input__box">
							<label>Email address </label>
							<input id="Email" className="input" />
							<p className="input__message">Wrong Email</p>
						</div>
						<div className="input__box">
							<label>Password</label>
							<input id="Password" className="input" />
							<p className="input__message">Wrong Password</p>
						</div>

						<div className="input__box input__TandC">
							<div>
								<input type="checkbox" />
								<label>Remember me</label>
							</div>
							<Link to="/"> Forgot Password </Link>
						</div>
						<button type="submit" className="btn btn-primary form-btn">
							Login
						</button>
						<Link to="/Signup" className="btn-secondary">
							Create New Account
						</Link>
					</form>
				</div>
			</main>
		</div>
	);
}

export { Loginform };
