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
						<input
							type="text"
							name=""
							required=""
							onChange={event => setLogin({ ...login, userName: event.target.value })}
						/>
						<label>Username</label>
					</div>
					<div className="user-box">
						<input
							type="password"
							name=""
							required=""
							onChange={event => setLogin({ ...login, password: event.target.value })}
						/>
						<label>Password</label>
					</div>
					<a href="#">
						<span />
						<span />
						<span />
						<span />
						<Link to="/profilepage" onClick={() => actions.userLogin(login.userName, login.password)}>
							Submit
						</Link>
					</a>
				</form>
			</div>
		</>
	);
};
