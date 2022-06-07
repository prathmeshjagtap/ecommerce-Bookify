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
		</div>
	);
}

export { Checkout };
