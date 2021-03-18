import React, { useContext, useState } from "react";
import { Link } from "react-router-dom";
import { Context } from "../store/appContext";

export const SignUp = () => {
	const { store, actions } = useContext(Context);
	const [accountType, setAccountType] = useState("patient");
	console.log("default", accountType);

	const [newUser, setNewUser] = useState({
		firstName: "",
		lastName: "",
		phone: "",
		email: "",
		userName: "",
		password: ""
	});
	return (
		<>
			{accountType == "therapist" ? (
				<div className="tab-pane" id="therapists" role="tabpanel" aria-labelledby="therapists-tab">
					<div className="login-box">
						<button
							className="patient-button"
							onClick={() => {
								setAccountType("patient");
							}}>
							Click for patient sign up
						</button>
						<h2>Therapist Sign Up</h2>
						<form>
							<div className="user-box">
								<input
									type="text"
									name=""
									required=""
									value={newUser.firstName}
									onChange={event => setNewUser({ ...newUser, firstName: event.target.value })}
								/>

								<label>First Name</label>
							</div>
							<div className="user-box">
								<input
									type="text"
									name=""
									required=""
									value={newUser.lastName}
									onChange={event => setNewUser({ ...newUser, lastName: event.target.value })}
								/>
								<label>Last Name</label>
							</div>

							<div className="user-box">
								<input
									type="text"
									name=""
									required=""
									value={newUser.email}
									onChange={event => setNewUser({ ...newUser, email: event.target.value })}
								/>
								<label>Email</label>
							</div>
							<div className="user-box">
								<input
									type="text"
									name=""
									required=""
									value={newUser.phone}
									onChange={event => setNewUser({ ...newUser, phone: event.target.value })}
								/>
								<label>Phone Number</label>
							</div>
							<div className="user-box">
								<input
									type="text"
									name=""
									required=""
									value={newUser.userName}
									onChange={event => setNewUser({ ...newUser, userName: event.target.value })}
								/>
								<label>Username</label>
							</div>
							<div className="user-box">
								<input
									type="password"
									name=""
									required=""
									value={newUser.password}
									onChange={event => setNewUser({ ...newUser, password: event.target.value })}
								/>
								<label>Password</label>
							</div>
							<a href="#">
								<span />
								<span />
								<span />
								<span />
								<Link
									to="/therapistprofile"
									onClick={() => {
										actions.addUser(
											newUser.firstName,
											newUser.lastName,
											newUser.phone,
											newUser.email,
											newUser.userName,
											newUser.password,
											accountType
										);
									}}>
									Save and proceed to therapist questionnaire
								</Link>
							</a>
						</form>
					</div>
				</div>
			) : (
				<div className="tab-content">
					<div className="tab-pane show active" id="patients" role="tabpanel" aria-labelledby="patients-tab">
						<div className="login-box">
							<button
								className="therapist-button"
								onClick={() => {
									setAccountType("therapist");
								}}>
								Click for therapist sign up
							</button>

							<h2>Patient Sign Up</h2>
							<form>
								<div className="user-box">
									<input
										value={newUser.firstName}
										type="text"
										name=""
										required=""
										onChange={event => setNewUser({ ...newUser, firstName: event.target.value })}
									/>
									<label>First Name</label>
								</div>
								<div className="user-box">
									<input
										value={newUser.lastName}
										type="text"
										name=""
										required=""
										onChange={event => setNewUser({ ...newUser, lastName: event.target.value })}
									/>
									<label>Last Name</label>
								</div>
								<div className="user-box">
									<input
										value={newUser.email}
										type="text"
										name=""
										required=""
										onChange={event => setNewUser({ ...newUser, email: event.target.value })}
									/>
									<label>Email</label>
								</div>
								<div className="user-box">
									<input
										value={newUser.phone}
										type="text"
										name=""
										required=""
										onChange={event => setNewUser({ ...newUser, phone: event.target.value })}
									/>
									<label>Phone Number</label>
								</div>
								<div className="user-box">
									<input
										value={newUser.userName}
										type="text"
										name=""
										required=""
										onChange={event => setNewUser({ ...newUser, userName: event.target.value })}
									/>
									<label>Username</label>
								</div>
								<div className="user-box">
									<input
										value={newUser.password}
										type="password"
										name=""
										required=""
										onChange={event => setNewUser({ ...newUser, password: event.target.value })}
									/>
									<label>Password</label>
								</div>
								<a href="#">
									<span />
									<span />
									<Link
										to="/patientquestionnaire"
										onClick={() => {
											actions.addUser(
												newUser.firstName,
												newUser.lastName,
												newUser.phone,
												newUser.email,
												newUser.userName,
												newUser.password,
												accountType
											);
										}}>
										Save and proceed to patient questionnaire
									</Link>
								</a>
							</form>
						</div>
					</div>
				</div>
			)}
		</>
	);
};
