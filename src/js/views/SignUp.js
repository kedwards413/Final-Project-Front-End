import React from "react";
import { Link } from "react-router-dom";

export const SignUp = () => {
	return (
		<>
        <ul className="nav nav-tabs" id="myTab" role="tablist">
  <li className="nav-item" role="presentation">
    <a className="nav-link active" id="home-tab" data-toggle="tab" href="#home" role="tab" aria-controls="home" aria-selected="true">Therapist</a>
  </li>
  <li className="nav-item" role="presentation">
    <a className="nav-link" id="profile-tab" data-toggle="tab" href="#profile" role="tab" aria-controls="profile" aria-selected="false">Patient</a>
  </li>
</ul>
<div className="tab-content" id="myTabContent">
  <div className="tab-pane fade show active" id="therapist" role="tabpanel" aria-labelledby="therapist-tab">
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
						<label>Phone number</label>
					</div>
                    <div className="user-box">
						<input type="password" name="" required="" />
						<label>Email Address</label>
					</div>
                    <div className="user-box">
						<input type="password" name="" required="" />
						<label>Name of practice</label>
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
						Create account
					</a>
				</form>
			</div></div>
  <div className="tab-pane fade" id="patient" role="tabpanel" aria-labelledby="patient-tab"><div className="login-box">
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
						<label>Email Address</label>
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
						Submit
					</a>
				</form>
			</div></div>
  
</div>
			
		</>
	);
};
