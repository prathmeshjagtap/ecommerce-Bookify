import React, { useEffect, useState } from "react";
import { useUserContext } from "../../contexts";
import { useAuthContext } from "../../contexts/auth-context";
import { editUser, getUser } from "../../utils";

function User() {
	const { authState } = useAuthContext();
	const { token, user } = authState;
	const { userState, userDispatch } = useUserContext();
	const { currentuser } = userState;
	const [isediting, setIsediting] = useState(false);
	const [userData, setUserData] = useState(currentuser);

	let userId = user?._id;
	useEffect(() => {
		getUser(userId, userDispatch);
	}, [userId]);

	const handleChange = (e) => {
		setUserData({
			...userData,
			[e.target.name]: e.target.value,
		});
	};
	return (
		<div className="user_profile_container">
			<img
				className="avatar avatar-m"
				src="https://www.kindpng.com/picc/m/24-248729_stockvader-predicted-adig-user-profile-image-png-transparent.png"
				alt="avatar"
			/>
			<i
				className="fas fa-user-edit edit__user__icon"
				onClick={() => setIsediting((isediting) => !isediting)}
			></i>
			{isediting ? (
				<>
					<div className="user__input">
						<h4>First Name :</h4>
						<input
							value={userData?.firstName}
							onChange={handleChange}
							name="firstName"
						/>
					</div>
					<div className="user__input">
						<h4>Last Name :</h4>
						<input
							value={userData?.lastName}
							onChange={handleChange}
							name="lastName"
						/>
					</div>
					<div className="user__input">
						<h4>Email :</h4>
						<input
							value={userData?.email}
							onChange={handleChange}
							name="email"
						/>
					</div>
					<div>
						<button
							className="btn btn-warning"
							onClick={() => setIsediting((isediting) => !isediting)}
						>
							Cancel
						</button>
						<button
							className="btn btn-primary"
							onClick={() => {
								editUser(userData, userDispatch, token);
								setIsediting((isediting) => !isediting);
							}}
						>
							Save
						</button>
					</div>
				</>
			) : (
				<div>
					<h4>First Name : {currentuser?.firstName}</h4>
					<h4>Last Name : {currentuser?.lastName}</h4>
					<h4>Email : {currentuser?.email}</h4>
				</div>
			)}
		</div>
	);
}

export { User };
