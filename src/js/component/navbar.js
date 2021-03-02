import React from "react";
import { Link } from "react-router-dom";
import { Login } from "../views/Login";

export const Navbar = () => {
	return (
		<nav className="navbar mb-3 ">
			<Link to="/">
				<span className="navbar-brand text-white mb-0 h1">fearLESS</span>
			</Link>
			<div className="d-flex justify-content-end">
				<Link to="/">
					<span className="navbar-brand text-white mr-5 ">HOME</span>
				</Link>
				<Link to="">
					<span className="navbar-brand text-white mr-5">ABOUT</span>
				</Link>
				<Link to="">
					<span className="navbar-brand text-white mr-5">THERAPISTS</span>
				</Link>
				<div className="ml-auto">
					<Link to="/login">
						<span className="navbar-brand text-white mr-5">LOGIN</span>
					</Link>
					<Link to="/signup">
						<button className="btn btn-dark mr-2">SIGN UP</button>
					</Link>
				</div>
			</div>
		</nav>
	);
};
