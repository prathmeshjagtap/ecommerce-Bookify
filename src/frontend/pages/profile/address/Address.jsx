import React, { useState, useEffect } from "react";
import { useAuthContext, useUserContext } from "../../../contexts";
import { getAddress, deleteAddress } from "../../../utils";
import { AddressModal } from "./AddressModal";
import "./address.css";
import { useNavigate, useLocation } from "react-router";

function Address() {
	const {
		authState: { token },
	} = useAuthContext();
	const { pathname } = useLocation();
	const navigate = useNavigate();
	const {
		userState: { address },
		userDispatch,
		deliveryAddress,
		setDeliveryAddress,
	} = useUserContext();
	const [isModalOpen, setIsModalOpen] = useState(false);
	const [modalAddress, setModalAddress] = useState("");
	const [isEdit, setIsEdit] = useState(false);

	useEffect(() => {
		getAddress(token, userDispatch);
		setDeliveryAddress("");
	}, [token]);
	return (
		<div>
			{address?.length > 0 ? (
				<div className="address__main__container">
					{pathname === "/checkout" && (
						<h2 className="select__address">Select Delivery Address</h2>
					)}
					<button
						className="btn btn-primary btn_add_address"
						onClick={() => {
							setIsEdit(false);
							setIsModalOpen((isModalOpen) => !isModalOpen);
						}}
					>
						Add New Address
					</button>
					<div className="address__container">
						{address.map((location) => (
							<>
								{pathname === "/checkout" && (
									<input
										key={location?._id}
										type="radio"
										name="order-address"
										checked={location._id === deliveryAddress?._id}
										onChange={() => {
											setDeliveryAddress(location);
											navigate("/orderSummary");
										}}
									/>
								)}
								<div className="address__card" key={location?._id}>
									<p>{location?.name}</p>
									<span>{location?.area}</span>
									<span>{location?.locality}</span>
									<p>
										{location?.city} , {location?.pincode} , {location?.state}
									</p>
									<p>{location?.mobile}</p>
									<p>{location?.alternatePhoneNumber}</p>

									{pathname === "/checkout" ? (
										<button
											className="btn btn-primary address__icons"
											onClick={() => {
												setIsEdit(true);
												setModalAddress(location);
												setIsModalOpen((isModalOpen) => !isModalOpen);
											}}
										>
											Edit Address
										</button>
									) : (
										<div className="address__icons">
											<i
												className="fas fa-edit"
												onClick={() => {
													setIsEdit(true);
													setModalAddress(location);
													setIsModalOpen((isModalOpen) => !isModalOpen);
												}}
											></i>
											<i
												className="fas fa-trash delete__icon"
												onClick={() =>
													deleteAddress(location._id, userDispatch, token)
												}
											></i>
										</div>
									)}
								</div>
							</>
						))}
					</div>
				</div>
			) : (
				<div className="empty__address__container">
					{pathname === "/checkout" && (
						<h2 className="select__address">Select Delivery Address</h2>
					)}
					<h4>You do not have any Address, Add Address</h4>
					<button
						className="btn btn-primary btn_add_address"
						onClick={() => {
							setIsEdit(false);
							setIsModalOpen((isModalOpen) => !isModalOpen);
						}}
					>
						Add New Address
					</button>
				</div>
			)}

			<AddressModal
				isEdit={isEdit}
				address={modalAddress}
				modalOpen={isModalOpen}
				closeModal={() => setIsModalOpen(false)}
			/>
		</div>
	);
}

export { Address };
