import React from "react";
import { Link } from "react-router-dom";

export const Navbar = () => {
	return (
		<nav className="navbar  " style={{ height: 46 }}>
			<Link to="/">
				<span className="navbar-brand text-white  ">fearLESS</span>
			</Link>
			<div className="d-flex justify-content-end ">
				<Link to="about">
					<span className="navbar-brand  mr-5 text-white">ABOUT</span>
				</Link>
				<Link to="/profilepage">
					<span className="navbar-brand  mr-5 text-white">PROFILE</span>
				</Link>

				<div className="ml-auto">
					<Link to="/login">
						<span className="navbar-brand text-white mr-5">LOGIN</span>
					</Link>
					<Link to="">
						<button className="btn btn-dark mr-2 btn-sm mb-1">SIGN UP</button>
					</Link>
				</div>
			</div>
		</nav>
	);
};
