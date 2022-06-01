import React, { useState, useEffect } from "react";
import { useAuthContext, useUserContext } from "../../../contexts";
import { addAddress, editAddress, states } from "../../../utils";
import "./addressModal.css";

function AddressModal({ isEdit, address, modalOpen, closeModal }) {
	const {
		authState: { token },
	} = useAuthContext();

	const { userDispatch } = useUserContext();

	const initialState = {
		name: isEdit ? address?.name : "",
		mobile: isEdit ? address?.mobile : "",
		area: isEdit ? address?.area : "",
		locality: isEdit ? address?.locality : "",
		pincode: isEdit ? address?.pincode : "",
		city: isEdit ? address?.city : "",
		state: isEdit ? address?.state : "",
		alternatePhoneNumber: isEdit ? address?.alternatePhoneNumber : "",
	};

	const [addressInput, setAddressInput] = useState(initialState);
	const handleChange = (e) => {
		setAddressInput({
			...addressInput,
			[e.target.name]: e.target.value,
		});
	};

	useEffect(() => {
		if (isEdit) {
			setAddressInput(initialState);
		}
	}, [isEdit]);

	if (!modalOpen) return null;

	const submitHandler = () => {
		if (isEdit) {
			editAddress(address?._id, addressInput, userDispatch, token);
			setAddressInput("");
		} else {
			addAddress(addressInput, userDispatch, token);
			setAddressInput("");
		}
		closeModal();
	};
	return (
		<div className="address__modal__container">
			<form
				className="address__modal"
				onSubmit={(e) => {
					e.preventDefault();
					submitHandler();
				}}
			>
				<div className="address__modal__list">
					<label className="modal__label">
						Name:
						<input
							type="text"
							name="name"
							className="modal__input"
							value={addressInput?.name}
							onChange={handleChange}
							required
						/>
					</label>
					<label className="modal__label">
						Mobile:
						<input
							type="text"
							name="mobile"
							className="modal__input"
							minLength="10"
							maxLength="10"
							value={addressInput?.mobile}
							onChange={handleChange}
							required
						/>
					</label>
				</div>
				<div className="address__modal__list">
					<label className="modal__label">
						Address:
						<input
							type="text"
							name="area"
							className="modal__input"
							value={addressInput?.area}
							onChange={handleChange}
							required
						/>
					</label>
					<label className="modal__label">
						Locality:
						<input
							type="text"
							name="locality"
							placeholder="Enter Locality (Optional)"
							className="modal__input"
							value={addressInput?.locality}
							onChange={handleChange}
						/>
					</label>
				</div>
				<div className="address__modal__list">
					<label className="modal__label">
						Pincode:
						<input
							type="text"
							name="pincode"
							className="modal__input"
							minLength="6"
							maxLength="6"
							value={addressInput?.pincode}
							onChange={handleChange}
							required
						/>
					</label>
					<label className="modal__label">
						City:
						<input
							type="text"
							name="city"
							placeholder="Enter City Name"
							className="modal__input"
							value={addressInput?.city}
							onChange={handleChange}
							required
						/>
					</label>
				</div>
				<div className="address__modal__list">
					<label className="modal__label">
						Alternate Phone Number
						<input
							type="text"
							name="alternatePhoneNumber"
							className="modal__input"
							minLength="10"
							maxLength="10"
							placeholder="Optional"
							value={addressInput?.city}
							onChange={handleChange}
						/>
					</label>
					<label className="modal__label">
						Select State:
						<select
							className="modal__input"
							value={addressInput?.state}
							onChange={handleChange}
							required
							name="state"
						>
							<option disabled value="">
								Select
							</option>
							{states.map((state) => (
								<option key={state} value={state}>
									{state}
								</option>
							))}
						</select>
					</label>
				</div>
				<div className="address__modal__buttons">
					<button
						type="button"
						className="btn btn-outline-dark"
						onClick={closeModal}
					>
						Cancel
					</button>
					<button type="submit" className="btn btn-primary">
						{isEdit ? "Edit Address" : "Add Address"}
					</button>
				</div>
			</form>
		</div>
	);
}

export { AddressModal };
