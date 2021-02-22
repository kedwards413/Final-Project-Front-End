import React, { useState } from "react";
import { Link } from "react-router-dom";

export const SignUp = () => {
	const [user, setUser] = useState("");
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
								<input type="text" name="" required="" />
								<label>First Name</label>
							</div>
							<div className="user-box">
								<input type="text" name="" required="" />
								<label>Last Name</label>
							</div>
							<div className="user-box">
								<input type="text" name="" required="" />
								<label>License number</label>
							</div>
							<div className="user-box">
								<input type="text" name="" required="" />
								<label>Phone Number</label>
							</div>
							<div className="user-box">
								<input type="text" name="" required="" />
								<label>Email</label>
							</div>
							<div className="user-box">
								<input type="text" name="" required="" />
								<label>Username</label>
							</div>
							<div className="user-box">
								<input type="password" name="" required="" />
								<label>Password</label>
							</div>
							<div className="user-box">
								<input type="password" name="" required="" />
								<label>Re-enter password</label>
							</div>
							<a href="#">
								<span />
								<span />
								<span />
								<span />
								Create Account
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
									<input type="text" name="" required="" />
									<label>First Name</label>
								</div>
								<div className="user-box">
									<input type="text" name="" required="" />
									<label>Last Name</label>
								</div>
								<div className="user-box">
									<input type="text" name="" required="" />
									<label>Email</label>
								</div>
								<div className="user-box">
									<input type="text" name="" required="" />
									<label>Phone number</label>
								</div>
								<div className="user-box">
									<input type="text" name="" required="" />
									<label>Username</label>
								</div>
								<div className="user-box">
									<input type="password" name="" required="" />
									<label>Password</label>
								</div>
								<div className="user-box">
									<input type="password" name="" required="" />
									<label>Re-enter password</label>
								</div>
								<a href="#">
									<span />
									<span />
									<Link to="/patientquestionnaire">Save and proceed to patient questionnaire</Link>
								</a>
							</form>
						</div>
					</div>
				</div>
			)}
		</>
	);
};
