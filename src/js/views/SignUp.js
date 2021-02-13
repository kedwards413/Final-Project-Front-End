import React from "react";
import { Link } from "react-router-dom";

export const SignUp = () => {
	return (
		<>
			<div className="tab-content">
				<div className="tab-pane fade show active" id="patients" role="tabpanel" aria-labelledby="patients-tab">
					<div className="login-box">
						<ul className="nav nav-pills mb-3 justify-content-center" id="pills-tab" role="tablist">
							<li className="nav-item">
								<a
									className="nav-item nav-link active"
									id="pills-patients-tab"
									data-toggle="tab"
									href="#pills-patients"
									role="tab"
									aria-controls="pills-patients"
									aria-selected="true">
									<p>I am a patient</p>
								</a>
							</li>
							<li className="nav-item">
								<a
									className="nav-link"
									id="pills-therapists-tab"
									data-toggle="tab"
									href="#pills-therapists"
									role="tab"
									aria-controls="pills-profile"
									aria-selected="false">
									<p>I am a therapist</p>
								</a>
							</li>
						</ul>
						<h2>Patient Sign Up</h2>
						<form>
							<div className="user-box">
								<input type="text" name="" required="" />
								<label>First Name</label>
							</div>
							<div className="user-box">
								<input type="password" name="" required="" />
								<label>Last Name</label>
							</div>
							<div className="user-box">
								<input type="password" name="" required="" />
								<label>Email</label>
							</div>
							<div className="user-box">
								<input type="password" name="" required="" />
								<label>Phone number</label>
							</div>
							<div className="user-box">
								<input type="password" name="" required="" />
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
				<div className="tab-pane fade" id="therapists" role="tabpanel" aria-labelledby="therapists-tab">
					<div className="login-box">
						<h2>Therapist Sign Up</h2>
						<form>
							<div className="user-box">
								<input type="text" name="" required="" />
								<label>First Name</label>
							</div>
							<div className="user-box">
								<input type="password" name="" required="" />
								<label>Last Name</label>
							</div>
							<div className="user-box">
								<input type="password" name="" required="" />
								<label>License number</label>
							</div>
							<div className="user-box">
								<input type="password" name="" required="" />
								<label>Phone Number</label>
							</div>
							<div className="user-box">
								<input type="password" name="" required="" />
								<label>Email</label>
							</div>
							<div className="user-box">
								<input type="password" name="" required="" />
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
			</div>
		</>
	);
};
