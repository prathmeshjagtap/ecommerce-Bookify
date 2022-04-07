import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./forms.css";
import { useAuthContext } from "../../contexts";
import { authActions } from "../../reducer";
import axios from "axios";
import { useNavigate, useLocation } from "react-router-dom";

function Loginform() {
	const { authState, authDispatch } = useAuthContext();
	const [isPasswordVisibile, setIsPasswordVisibile] = useState(false);
	let navigate = useNavigate();
	let location = useLocation();
	let from = location.state?.from?.pathname || "/";
	const { user, error } = authState;
	const { email, password } = user;

	const loginHandler = async (e, email, password) => {
		e.preventDefault();
		try {
			const response = await axios.post(`/api/auth/login`, {
				email,
				password,
			});

			localStorage.setItem("token", response.data.encodedToken);
			authDispatch({
				type: authActions.TOKEN,
				payload: response.data.encodedToken,
			});
			navigate(from, { replace: true });
		} catch (err) {
			authDispatch({
				type: authActions.ERROR,
				payload: "Wrong Email or Password , SignUp if you dont have account",
			});
			console.log(err);
		}
	};

	setTimeout(() => {
		if (error)
			authDispatch({
				type: authActions.ERROR,
				payload: null,
			});
	}, 3000);

	return (
		<div>
			<main className="signup__container">
				<div className="signup__div">
					<form
						className="form"
						onSubmit={(e) => loginHandler(e, email, password)}
					>
						<h2 className="form__name">Login</h2>
						<div className="input__box">
							<label htmlFor="Email">
								Email address
								<input
									required
									id="Email"
									className="input"
									onChange={(e) =>
										authDispatch({
											type: authActions.EMAIL,
											payload: e.target.value,
										})
									}
									placeholder="test@gmail.com"
								/>
							</label>
							<p className="input__message">Wrong Email</p>
						</div>
						<div className="input__box">
							<label htmlFor="Password">
								Password
								<input
									required
									id="Password"
									className="input"
									onChange={(e) =>
										authDispatch({
											type: authActions.PASSWORD,
											payload: e.target.value,
										})
									}
									placeholder="test@1234"
									type={`${isPasswordVisibile ? "text" : "password"}`}
									autoComplete="on"
								/>
								<span className="password__icon">
									<i
										className={`${
											isPasswordVisibile ? "fas fa-eye" : "fas fa-eye-slash"
										}`}
										onClick={() =>
											setIsPasswordVisibile(
												(isPasswordVisibile) => !isPasswordVisibile
											)
										}
									></i>
								</span>
							</label>
							<p className="input__message">Wrong Password</p>
						</div>

						<div className="input__box input__TandC">
							<div>
								<input type="checkbox" id="remberMe" />
								<label htmlFor="remberMe">Remember me</label>
							</div>
							<Link to="/"> Forgot Password </Link>
						</div>

						<button type="submit" className="btn btn-primary form-btn">
							Login
						</button>
						<button
							type="button"
							className="btn btn_login__guest "
							onClick={(e) => loginHandler(e, "test@gmail.com", "test@1234")}
						>
							Login As Guest
						</button>

						<Link to="/Signup" className="btn-secondary">
							New here 👉 Create New Account
						</Link>
					</form>
				</div>
				<h4 className="error__message">{error}</h4>
			</main>
		</div>
	);
}

export { Loginform };
