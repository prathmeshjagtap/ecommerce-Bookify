import React from "react";
import { Link } from "react-router-dom";
import "../login/LoginForm";

function SignupForm() {
	return (
		<div>
			<main className="signup__container">
				<div className="signup__div">
					<form action="./home.html" className="form">
						<h2 className="form__name">Signup</h2>
						<div className="input__box">
							<label>Email address </label>
							<input id="Email" className="input" required />
							<p className="input__message">Wrong Email</p>
						</div>
						<div className="input__box">
							<label>Username </label>
							<input id="Username" className="input" required />
						</div>
						<div className="input__box">
							<label>Password</label>
							<input id="Password" className="input" required />
							<p className="input__message">Wrong Password</p>
						</div>
						<div className="input__box">
							<label>Confirm Password </label>
							<input id="ConfirmPassword" className="input" required />
							<p className="input__message">Password does not match</p>
						</div>
						<div className="input__box input__TandC">
							<div>
								<input type="checkbox" />
								<label>I accept all Terms and Conditions</label>
							</div>
						</div>
						<button type="submit" className="btn btn-primary form-btn">
							Create New Account
						</button>
						<Link to="/Login" className="btn-secondary">
							Already have an Account
						</Link>
					</form>
				</div>
			</main>
		</div>
	);
}

export { SignupForm };
