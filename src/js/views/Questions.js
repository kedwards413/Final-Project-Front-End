import React, { useState, useEffect, useContext } from "react";
import { Link } from "react-router-dom";

export const Questions = () => {
	const [newAccount, setNewAccount] = useState({
		phobia: "",
		severity: "",
		help: "",
		goal: ""
	});

	return (
		<div className="container w-50 p-3">
			<div className="questions">
				<div>
					<h1 className="text-center mt-5">Patient Questionnaire</h1>
					<div>
						<div className="user-box">
							<label>Please select your phobia from the dropdown.</label>
							<select
								className="form-control"
								required
								placeholder="Enter email"
								onChange={event => setNewAccount({ ...newAccount, phobia: event.target.value })}>
								<option>Acrophobia - Fear of heights </option>
								<option>Arachnophobia - Fear of spiders</option>
								<option>Astraphobia - Fear of thunder and lightning</option>
								<option>Claustrophobia - Fear of enclosed spaces</option>
								<option>Cynophobia - Fear of dogs</option>
								<option>Social Phobia - Fear of social interaction</option>
							</select>
						</div>
						<div className="user-box">
							<label>How severe is your phobia? Please choose between 1-5</label>
							<select
								className="form-control"
								placeholder="Choose severity"
								required
								onChange={event => setNewAccount({ ...newAccount, severity: event.target.value })}>
								<option>1 - Mild </option>
								<option>2</option>
								<option>3</option>
								<option>4</option>
								<option>5 - Severe </option>
							</select>
						</div>
						<div className="user-box">
							<label>Have you ever sought help for your phobia? </label>
							<select
								className="form-control"
								required
								placeholder="Yes or no"
								onChange={event => setNewAccount({ ...newAccount, help: event.target.value })}>
								<option>Yes - with a therapist</option>
								<option>Yes - through another app</option>
								<option>No - I have never sought help</option>
							</select>
						</div>
						<div className="user-box">
							<label>What do you wish to accomplish while using fearLESS?</label>
							<input
								type="text"
								required
								className="form-control"
								placeholder="Type here"
								onChange={event => setNewAccount({ ...newAccount, goal: event.target.value })}
							/>
						</div>
						<button
							type="button"
							className="questionnaire-button form-control mt-5"
							onClick={() => {
								actions.addAccount(newAccount);
							}}>
							Save and create account
						</button>
					</div>
				</div>
			</div>
		</div>
	);
};
