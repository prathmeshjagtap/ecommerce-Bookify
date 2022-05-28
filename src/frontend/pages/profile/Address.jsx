import React, { useState, useEffect } from "react";
import { useAuthContext, useUserContext } from "../../contexts";
import { getAddress, deleteAddress } from "../../utils";
import { AddressModal } from "./AddressModal";

function Address() {
	const {
		authState: { token },
	} = useAuthContext();

	const {
		userState: { address },
		userDispatch,
	} = useUserContext();
	// const [isediting, setIsediting] = useState(false);
	useEffect(() => {
		getAddress(token, userDispatch);
	}, [token]);

	console.log(address);
	return (
		<div>
			{address?.length > 0 ? (
				<div>
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
								<i className="fas fa-edit"></i>
								<i
									className="fas fa-trash"
									onClick={() =>
										deleteAddress(location._id, userDispatch, token)
									}
								></i>
							</div>
						</div>
					))}
					<button className="btn btn-primary">Add New Address</button>
				</div>
			) : (
				<div>You do not have any addredd add addreress</div>
			)}
		</div>
	);
}

export { Address };
