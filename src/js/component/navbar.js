import React, { useState, useContext, useRef, myRef } from "react";
import { Link } from "react-router-dom";
import { Audio } from "../component/Audio";
import { Context } from "../store/appContext";

export const Navbar = () => {
	const { store, actions } = useContext(Context);
	const titleRef = useRef();

	function handleBackClick() {
		titleRef.current.scrollIntoView({ behavior: "smooth" });
		// Scroll back to the title element...
    }
    const [log, setLog] = useState(false);
	useEffect(
		() => {
			if (store.token !== null) {
				setLog(true);
			} else if (store.token == null) {
				setLog(false);
			}
		},
		[store.token]
	);
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
					<span className="navbar-brand  mr-5 ">THERAPISTS</span>
				</Link>
				<Link to="/articles">
					<span className="navbar-brand  mr-5 ">ARTICLES</span>
				</Link>
				<div className="ml-auto">
					{!log ? (
						<Link to="/login">
							<span className="navbar-brand  mr-5">LOGIN</span>
						</Link>
					) : (
						<button className="btn btn-dark mr-2 btn-sm mb-1" onClick={() => actions.logout()}>
							LOGOUT
						</button>
					)}
					<Link to="/signup">
						<button className="btn btn-dark mr-2 btn-sm mb-1">SIGN UP</button>
					</Link>
				</div>
			</div>
		</nav>
	);
};
