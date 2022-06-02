import React, { useState, useEffect } from "react";
import { Navbar } from "../../components";
import { useAuthContext, useUserContext } from "../../contexts";
import { getAddress } from "../../utils";
import { Address } from "../profile/address/Address";
import { AddressModal } from "../profile/address/AddressModal";

function Checkout() {
	const {
		userState: { address },
		userDispatch,
	} = useUserContext();
	const {
		authState: { token },
	} = useAuthContext();
	const [isModalOpen, setIsModalOpen] = useState(false);
	const [modalAddress, setModalAddress] = useState("");
	const [isEdit, setIsEdit] = useState(false);
	useEffect(() => {
		getAddress(token, userDispatch);
	}, [token]);
	return (
		<div>
			<Navbar />
			<Address />
			{/* <div>
				{address?.length > 0 ? (
					<>
						<button
							className="btn btn-primary btn_add_address"
							onClick={() => {
								setIsModalOpen((isModalOpen) => !isModalOpen);
							}}
						>
							Add New Address
						</button>
						<div className="address__container">
							{address.map((location) => (
								<div className="">
									<input type="radio" />
									<div className="address__card" key={location?._id}>
										<p>{location?.name}</p>
										<span>{location?.area}</span>
										<span>{location?.locality}</span>
										<p>
											{location?.city} , {location?.pincode} , {location?.state}
										</p>
										<p>{location?.mobile}</p>
										<p>{location?.alternatePhoneNumber}</p>
										<div className="address__icons">
											<button
												className="btn btn-primary"
												onClick={() => {
													setIsEdit(true);
													setModalAddress(location);
													setIsModalOpen((isModalOpen) => !isModalOpen);
												}}
											>
												Edit Address
											</button>
										</div>
									</div>
								</>
							))}
						</div>
					</>
				) : (
					<div className="empty__address__container">
						<h4>You do not have any Address, Add Address</h4>
						<button
							className="btn btn-primary btn_add_address"
							onClick={() => {
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
			</div> */}
		</div>
	);
}

export { Checkout };
