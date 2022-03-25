import React from "react";
import Logo from "../../assets/Logo.svg";
import "./footer.css";
import { Link } from "react-router-dom";

function Footer() {
	return (
		<footer className="footer">
			<div className="footer__left">
				<Link to="/" className="footer__logo">
					<img alt="website logo" src={Logo} />
				</Link>
				<div>
					<div className="footer__heading">
						Made with 💙 by Prathmesh Jagtap
					</div>
					<div className="footer__icons">
						<a href="https://www.instagram.com/prathmesh_jagtap_/">
							<i className="fab fa-instagram"></i>
						</a>
						<a href="https://www.linkedin.com/in/prathmeshjagtap/">
							<i className="fab fa-linkedin "></i>
						</a>

						<a href="https://twitter.com/prathmesh_20">
							<i className="fab fa-twitter-square"></i>
						</a>
						<a href="https://github.com/prathmeshjagtap/ecommerce-Bookify">
							<i className="fab fa-github-square"></i>
						</a>
					</div>
				</div>
			</div>
			<div className="footer_section">
				<h6 className="footer__heading">Sitemap</h6>
				<ul className="footer__links">
					<li>
						<Link className="footer__link" to="/">
							Home
						</Link>
					</li>

					<li>
						<Link className="footer__link" to="/products">
							Products
						</Link>
					</li>
					<li>
						<Link className="footer__link" to="/wishlist">
							Wishlist
						</Link>
					</li>
					<li>
						<Link className="footer__link" to="/cart">
							Cart
						</Link>
					</li>
				</ul>
			</div>
			<div className="footer_section">
				<h6 className="footer__heading">Informative</h6>
				<ul className="footer__links">
					<li>
						<Link className="footer__link" to="/">
							FAQ
						</Link>
					</li>
					<li>
						<Link className="footer__link" to="/">
							Privacy Policy
						</Link>
					</li>
				</ul>
			</div>
		</footer>
	);
}

export { Footer };
