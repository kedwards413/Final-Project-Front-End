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
				<span className="navbar-brand text-white  ">fearLESS</span>
			</Link>
			<Audio />

			<div className="d-flex justify-content-end ">
				<Link to="/">
					<span className="navbar-brand  mr-5 text-white">HOME</span>
				</Link>
				<Link to="/about" ref={myRef}>
					<span className="navbar-brand  mr-5 text-white" ref={titleRef} onClick={handleBackClick}>
						ABOUT
					</span>
				</Link>

				<div className="ml-auto">
					<Link to="/login">
						<span className="navbar-brand text-white mr-5">LOGIN</span>
					</Link>
					<Link to="/signup">
						<button className="btn btn-dark mr-2 btn-sm mb-1">SIGN UP</button>
					</Link>
				</div>
			</div>
		</nav>
	);
};
