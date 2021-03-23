import React, { useRef, myRef } from "react";
import { Link } from "react-router-dom";
import { Audio } from "../component/Audio";

export const Navbar = () => {
	const titleRef = useRef();

	function handleBackClick() {
		titleRef.current.scrollIntoView({ behavior: "smooth" });
		// Scroll back to the title element...
	}
	// const myRef = useRef(null);

	// const executeScroll = () => myRef.current.scrollIntoView();
	// on about span.   onClick={executeScroll}
	return (
		<nav className="navbar  " style={{ height: 46 }}>
			<Link to="/profilepage">
				<span className="navbar-brand  ">fearLESS</span>
			</Link>
			<Audio />

			<div className="d-flex justify-content-end ">
				<Link to="/">
					<span className="navbar-brand  mr-5 ">HOME</span>
				</Link>
				<Link to="/about">
					<span className="navbar-brand  mr-5 ">ABOUT</span>
				</Link>

				<Link to="/searchbar">
					<span className="navbar-brand  mr-5 text-white">THERAPISTS</span>
				</Link>
				<div className="ml-auto">
					<Link to="/login">
						<span className="navbar-brand  mr-5">LOGIN</span>
					</Link>
					<Link to="/signup">
						<button className="btn btn-dark mr-2 btn-sm mb-1">SIGN UP</button>
					</Link>
				</div>
			</div>
		</nav>
	);
};
