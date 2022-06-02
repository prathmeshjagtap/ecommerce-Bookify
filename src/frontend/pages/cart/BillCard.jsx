import React from "react";
import { useCartContext, useUserContext } from "../../contexts";
import "./cart.css";
import { useNavigate, useLocation } from "react-router-dom";

function BillCard() {
	const { cart } = useCartContext();
	const { deliveryAddress } = useUserContext();
	const navigate = useNavigate();
	const { pathname } = useLocation();
	const deliveryCharges = 199;
	const totalPreviousPrice = cart.reduce(
		(acc, current) => acc + Number(current.previousPrice) * Number(current.qty),
		0
	);
	const totalPrice = cart.reduce(
		(acc, current) => acc + Number(current.price) * Number(current.qty),
		0
	);
	const totaldiscount = totalPreviousPrice - totalPrice;
	const totalAmount = totalPrice + deliveryCharges;

	return (
		<div className="cart__bill">
			<h2>Price Details</h2>
			<ul className="price__details">
				<li>
					<p>Price({cart.length} items)</p>
					<p>
						<i className="fas fa-rupee-sign fa-1x"></i>
						{totalPreviousPrice}
					</p>
				</li>
				<li>
					<p>Discount</p>
					<p>
						-<i className="fas fa-rupee-sign fa-1x"></i>
						{totaldiscount}
					</p>
				</li>
				<li>
					<p>Delivery Charges</p>
					<p>
						<i className="fas fa-rupee-sign fa-1x"></i>
						{deliveryCharges}
					</p>
				</li>
				<li>
					<p>Total Amount</p>
					<p>
						<i className="fas fa-rupee-sign fa-1x"></i>
						{totalAmount}
					</p>
				</li>
			</ul>
			<p className="bill__save">
				You will save <i className="fas fa-rupee-sign fa-1x"></i>
				{totaldiscount} on this order
			</p>
			{pathname === "/orderSummary" && (
				<div>
					<h2>Address Details</h2>
					<div className="address__details">
						<p>{deliveryAddress?.name}</p>
						<p>{deliveryAddress?.area}</p>
						<p>{deliveryAddress?.locality}</p>
						<p>
							{deliveryAddress?.city} , {deliveryAddress?.pincode} ,
							{deliveryAddress?.state}
						</p>
						<p>{deliveryAddress?.mobile}</p>
						<p>{deliveryAddress?.alternatePhoneNumber}</p>
					</div>
				</div>
			)}
			<button
				className="btn btn-primary card__btn"
				onClick={() => navigate("/checkout")}
			>
				Place Order
			</button>
		</div>
	);
}

export default BillCard;
