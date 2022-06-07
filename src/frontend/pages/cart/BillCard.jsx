import React from "react";
import { useAuthContext, useCartContext, useUserContext } from "../../contexts";
import "./cart.css";
import { useNavigate, useLocation } from "react-router-dom";
import { toast } from "react-toastify";
import { toastStyle } from "../../components";
import { clearCart, loadScript } from "../../helpers";

function BillCard() {
	const { cart, setCart } = useCartContext();
	const { deliveryAddress } = useUserContext();
	const {
		authState: { token },
	} = useAuthContext();
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

	async function displayRazorpay(e) {
		e.preventDefault();
		const response = await loadScript(
			"https://checkout.razorpay.com/v1/checkout.js"
		);

		if (!response) {
			alert("Razorpay SDK failed to load. Are you online?");
			return;
		}

		const options = {
			key: process.env.REACT_APP_RAZORPAY_KEY_ID,
			currency: "INR",
			amount: totalAmount * 100,
			name: "Bookify",
			description: "Thank you for trusting us",
			image: "",

			handler: async (response) => {
				const { razorpay_payment_id } = await response;
				const orderData = {
					orderAmount: totalAmount,
					razorpayId: razorpay_payment_id,
				};
				await clearCart(setCart, token);
				toast.success("Order Placed, Continue Shopping", {
					position: "top-center",
					autoClose: 2000,
				});
				navigate("/products");
			},
			prefill: {
				contact: "9552632234",
				email: "prathmeshjagtap405@gmail.com",
			},
		};

		const paymentObject = new window.Razorpay(options);
		paymentObject.on("payment.failed", function (response) {
			toast.error("Payment Cancelled", toastStyle);
		});
		paymentObject.open();
	}

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
			{pathname === "/orderSummary" ? (
				<button className="btn btn-primary card__btn" onClick={displayRazorpay}>
					Buy
				</button>
			) : (
				<button
					className="btn btn-primary card__btn"
					onClick={() => navigate("/checkout")}
				>
					Place Order
				</button>
			)}
		</div>
	);
}

export default BillCard;
