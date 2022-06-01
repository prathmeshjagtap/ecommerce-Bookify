import React, { useState, useEffect } from "react";
import { useAuthContext, useUserContext } from "../../../contexts";
import { getAddress, deleteAddress } from "../../../utils";
import { AddressModal } from "./AddressModal";
import "./address.css";

function Address() {
	const {
		authState: { token },
	} = useAuthContext();

	const {
		userState: { address },
		userDispatch,
	} = useUserContext();
	const [isModalOpen, setIsModalOpen] = useState(false);
	const [modalAddress, setModalAddress] = useState("");
	const [isEdit, setIsEdit] = useState(false);
	useEffect(() => {
		getAddress(token, userDispatch);
	}, [token]);
	return (
		<div>
			{address?.length > 0 ? (
				<div className="address__main__container">
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
							<div className="address__card" key={location?._id}>
								<p>{location?.name}</p>
								<p>{location?.area}</p>
								<p>{location?.locality}</p>
								<p>
									{location?.city} , {location?.pincode} , {location?.state}
								</p>
								<p>{location?.mobile}</p>
								<p>{location?.alternatePhoneNumber}</p>
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
										className="fas fa-trash"
										onClick={() =>
											deleteAddress(location._id, userDispatch, token)
										}
									></i>
								</div>
							</div>
						))}
					</div>
				</div>
			) : (
				<div className="empty__address__container">
					<h4>You do not have any addredd add addreress</h4>
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
