import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./forms.css";
import { useAuthContext } from "../../contexts";
import { authActions } from "../../reducer";
import axios from "axios";
import { useNavigate, useLocation } from "react-router-dom";
import { toast } from "react-toastify";
import { toastStyle } from "../../components";
import { useDebugValue } from "react/cjs/react.development";

function Loginform() {
	const { authState, authDispatch } = useAuthContext();
	const [isPasswordVisibile, setIsPasswordVisibile] = useState(false);
	let navigate = useNavigate();
	let location = useLocation();
	let from = location.state?.from?.pathname || "/";
	const { error } = authState;
	const [userDetail, setUserDetail] = useState({
		email: "",
		password: "",
	});
	const handleChange = (e) => {
		setUserDetail({
			...userDetail,
			[e.target.name]: e.target.value,
		});
	};

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
				payload: {
					token: response.data.encodedToken,
					user: response.data.foundUser,
				},
			});
			navigate(from, { replace: true });
			toast.success("Logged in Successfully ", toastStyle);
		} catch (error) {
			authDispatch({
				type: authActions.ERROR,
				payload: "Wrong Email or Password , SignUp if you dont have account",
			});
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
						onSubmit={(e) =>
							loginHandler(e, userDetail.email, userDetail.password)
						}
					>
						<h2 className="form__name">Login</h2>
						<div className="input__box">
							<label htmlFor="Email">
								Email address
								<input
									required
									id="Email"
									className="input"
									name="email"
									value={userDetail?.email}
									onChange={handleChange}
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
									name="password"
									value={userDetail?.password}
									onChange={handleChange}
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
							onClick={(e) =>
								loginHandler(e, "prathmesh@gmail.com", "test@1234")
							}
						>
							Login As Guest
						</button>

						<Link to="/Signup" className="btn-secondary">
							New here 👉 Create New Account
						</Link>
					</form>
				</div>
			</main>
			<h4 className="error__message">{error}</h4>
		</div>
	);
}

export { Loginform };
