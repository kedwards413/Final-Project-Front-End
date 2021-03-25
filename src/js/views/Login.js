import React, { useContext, useState } from "react";
import { Link } from "react-router-dom";
import { Context } from "../store/appContext";

export const Login = () => {
	const [login, setLogin] = useState({
		userName: "",
		password: ""
	});
	const { store, actions } = useContext(Context);
	return (
		<>
			<div className="login-box">
				<h2>Login</h2>
				<form>
					<div className="user-box">
						<input type="text" name="" required="" />
						<label>Username</label>
					</div>
					<div className="user-box">
						<input type="password" name="" required="" />
						<label>Password</label>
					</div>
					<a href="#">
						<span />
						<span />
						<span />
						<span />
						Submit
					</a>
				</form>
			</div>
		</>
	);
};
