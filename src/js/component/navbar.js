import React, { useState, useContext, useRef, myRef, useEffect } from "react";
import { Link, useLocation, useHistory } from "react-router-dom";
import { Audio } from "../component/Audio";
import { Context } from "../store/appContext";

export const Navbar = () => {
	const { store, actions } = useContext(Context);
	const titleRef = useRef();

	function handleBackClick() {
		titleRef.current.scrollIntoView({ behavior: "smooth" });
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
	let location = useLocation().pathname;
	let history = useHistory();
	const goToView = () => {
		const elmnt = document.getElementById("content");
		if (location == "/") {
			elmnt.scrollIntoView({ behavior: "smooth" });
		} else {
			history.push("/");
			if (location == "/") elmnt.scrollIntoView({ behavior: "smooth" });
		}
	};
	return (
		<nav className="navbar  " style={{ height: 46 }}>
			<Link to="/profilepage">
				<span className="navbar-brand  ">fearLESS</span>
			</Link>
			<Audio />

			<div className="d-flex justify-content-end ">
				<Link to="/" onClick={() => scrollTo(0, 0)}>
					<span className="navbar-brand  mr-5 ">HOME</span>
				</Link>
				<Link onClick={() => goToView()}>
					<span className="navbar-brand  mr-5 ">ABOUT</span>
				</Link>

				<Link to="/searchbar" onClick={() => scrollTo(0, 0)}>
					<span className="navbar-brand  mr-5 ">THERAPISTS</span>
				</Link>
				<Link to="/articles" onClick={() => scrollTo(0, 0)}>
					<span className="navbar-brand  mr-5 ">ARTICLES</span>
				</Link>
				<div className="ml-auto">
					{!log ? (
						<Link to="/login" onClick={() => scrollTo(0, 0)}>
							<span className="navbar-brand  mr-5">LOGIN</span>
						</Link>
					) : (
						<Link to="/" onClick={() => scrollTo(0, 0)}>
							<button className="btn btn-dark mr-2 btn-sm mb-1" onClick={() => actions.logout()}>
								LOGOUT
							</button>
						</Link>
					)}
					<Link to="/signup" onClick={() => scrollTo(0, 0)}>
						<button className="btn btn-dark mr-2 btn-sm mb-1">SIGN UP</button>
					</Link>
				</div>
			</div>
		</nav>
	);
};
