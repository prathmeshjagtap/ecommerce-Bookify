import React from "react";

function AddressModal({ address }) {
	return (
		<form>
			<label>
				Name:
				<input type="text" name="name" />
			</label>
			<input type="submit" value="Submit" />
		</form>
	);
}

export { AddressModal };
