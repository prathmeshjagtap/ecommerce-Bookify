import React, { useState } from "react";
import { Link } from "react-router-dom";
import "../login/LoginForm";
import { useAuthContext } from "../../contexts";
import { authActions } from "../../reducer";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { toastStyle } from "../../components";

function SignupForm() {
	const [isPasswordVisibile, setIsPasswordVisibile] = useState(false);
	const { authDispatch } = useAuthContext();
	let navigate = useNavigate();

	const [userDetail, setUserDetail] = useState({
		firstName: "",
		lastName: "",
		email: "",
		password: "",
	});
	const handleChange = (e) => {
		setUserDetail({
			...userDetail,
			[e.target.name]: e.target.value,
		});
	};
	const signupHandler = async (e) => {
		e.preventDefault();

		try {
			const response = await axios.post(`/api/auth/signup`, {
				firstName: userDetail.firstName,
				lastName: userDetail.lastName,
				email: userDetail.email,
				password: userDetail.password,
			});
			localStorage.setItem("token", response.data.encodedToken);
			authDispatch({
				type: authActions.TOKEN,
				payload: {
					token: response.data.encodedToken,
					user: response.data.createdUser,
				},
			});
			navigate("/");
			toast.success("Singup  Successfull ", toastStyle);
		} catch (error) {
			if (error.response.status === 422) {
				toast.error("Email Already Exists", {
					position: "top-center",
					autoClose: 2000,
				});
			} else {
				toast.error("Server Error", {
					position: "top-center",
					autoClose: 2000,
				});
			}
		}
	};

	return (
		<div>
			<main className="signup__container">
				<div className="signup__div">
					<form className="form" onSubmit={signupHandler}>
						<h2 className="form__name">Signup</h2>
						<div className="input__box">
							<label htmlFor="Email">
								Email address
								<input
									id="Email"
									className="input"
									type="email"
									name="email"
									value={userDetail?.email}
									onChange={handleChange}
									required
								/>
							</label>
							<p className="input__message">Wrong Email</p>
						</div>
						<div className="input__box">
							<label htmlFor="firstName">
								First Name
								<input
									id="firstName"
									name="firstName"
									className="input"
									value={userDetail?.firstName}
									onChange={handleChange}
									required
								/>
							</label>
						</div>
						<div className="input__box">
							<label htmlFor="lastName">
								Last Name
								<input
									id="lastName"
									name="lastName"
									className="input"
									value={userDetail?.lastName}
									onChange={handleChange}
									required
								/>
							</label>
						</div>
						<div className="input__box">
							<label htmlFor="Password">
								Password
								<input
									id="Password"
									name="password"
									className="input"
									value={userDetail?.password}
									onChange={handleChange}
									type={`${isPasswordVisibile ? "text" : "password"}`}
									autoComplete="on"
									required
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
								<input type="checkbox" id="TandC" />
								<label htmlFor="TandC">I accept all Terms and Conditions</label>
							</div>
						</div>
						<button type="submit" className="btn btn-primary form-btn">
							Create New Account
						</button>
						<Link to="/Login" className="btn-secondary">
							Already have an Account 👉
						</Link>
					</form>
				</div>
			</main>
		</div>
	);
}

export { SignupForm };
