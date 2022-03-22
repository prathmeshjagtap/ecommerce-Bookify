import React from "react";
import { useCartContext } from "../../contexts";
import "./cart.css";

function BillCard() {
	const { cart } = useCartContext();
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
		<div>
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
				<button className="btn btn-primary card__btn">Place Order</button>
			</div>
		</div>
	);
}

export default BillCard;
