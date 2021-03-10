import React, { useContext, useState } from "react";
import { Link } from "react-router-dom";
import { Context } from "../store/appContext";

export const SignUp = () => {
	const { store, actions } = useContext(Context);
	const [user, setUser] = useState("");

	const [therapist, setTherapist] = useState({
		firstName: "",
		lastName: "",
		email: "",
		phone: "",
		zipcode: "",
		userName: "",
		password: ""
	});

	const [newUser, setNewUser] = useState({
		firstName: "",
		lastName: "",
		email: "",
		phone: "",
		userName: "",
		password: ""
	});
	return (
		<>
			{user == "therapist" ? (
				<div className="tab-pane" id="therapists" role="tabpanel" aria-labelledby="therapists-tab">
					<div className="login-box">
						<button
							className="patient-button"
							onClick={() => {
								setUser("patient");
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
									value={therapist.firstName}
									onChange={event => setTherapist({ ...therapist, firstName: event.target.value })}
								/>

								<label>First Name</label>
							</div>
							<div className="user-box">
								<input
									type="text"
									name=""
									required=""
									value={therapist.lastName}
									onChange={event => setTherapist({ ...therapist, lastName: event.target.value })}
								/>
								<label>Last Name</label>
							</div>
							<div className="user-box">
								<input
									type="text"
									name=""
									required=""
									value={therapist.zipcode}
									onChange={event => setTherapist({ ...therapist, zipcode: event.target.value })}
								/>
								<label>Zipcode</label>
							</div>
							<div className="user-box">
								<input
									type="text"
									name=""
									required=""
									value={therapist.phone}
									onChange={event => setTherapist({ ...therapist, phone: event.target.value })}
								/>
								<label>Phone Number</label>
							</div>
							<div className="user-box">
								<input
									type="text"
									name=""
									required=""
									value={therapist.email}
									onChange={event => setTherapist({ ...therapist, email: event.target.value })}
								/>
								<label>Email</label>
							</div>
							<div className="user-box">
								<input
									type="text"
									name=""
									required=""
									value={therapist.username}
									onChange={event => setTherapist({ ...therapist, userName: event.target.value })}
								/>
								<label>Username</label>
							</div>
							<div className="user-box">
								<input
									type="password"
									name=""
									required=""
									value={therapist.password}
									onChange={event => setTherapist({ ...therapist, password: event.target.value })}
								/>
								<label>Password</label>
							</div>
							<a href="#">
								<span />
								<span />
								<span />
								<span />
								<Link to="/therapistprofile">Create account</Link>
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
									setUser("therapist");
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
									<label>Phone number</label>
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
												newUser.password
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
