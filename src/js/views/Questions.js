import React, { useState, useEffect, useContext } from "react";
import { Link } from "react-router-dom";

export const Questions = () => {
	return (
		<div className="questions">
			<div className="container">
				<div>
					<h1 className="text-center mt-5">Patient Questionnaire</h1>
					<div>
						<div className="form-group">
							<label>Please select your phobia from the dropdown.</label>
							<select
								className="form-control"
								required
								placeholder="Enter email"
								onChange={event => setNewContact({ ...newContact, email: event.target.value })}>
								<option>Acrophobia - Fear of heights </option>
								<option>Arachnophobia - Fear of spiders</option>
								<option>Astraphobia - Fear of thunder and lightning</option>
								<option>Claustrophobia - Fear of enclosed spaces</option>

								<option>Cynophobia - Fear of dogs</option>
								<option>Social Phobia - Fear of social interaction</option>
							</select>
						</div>
						<div className="form-group">
							<label>How severe is your phobia? Please choose between 1-10.</label>
							<select
								className="form-control"
								placeholder="Choose severity"
								required
								onChange={event => setNewContact({ ...newContact, email: event.target.value })}>
								<option>1 - Mild </option>
								<option>2</option>
								<option>3</option>
								<option>4</option>
								<option>5</option>
								<option>6</option>
								<option>7</option>
								<option>8</option>
								<option>9</option>
								<option>10 - Severe </option>
							</select>
						</div>
						<div className="form-group">
							<label>Have you ever sought help for your phobia? </label>
							<select
								className="form-control"
								required
								placeholder="Yes or no"
								onChange={event => setNewContact({ ...newContact, email: event.target.value })}>
								<option>Yes - with a therapist</option>
								<option>Yes - through another app</option>
								<option>No - I have never sought help</option>
							</select>
						</div>
						<div className="form-group">
							<label>What do you wish to accomplish while using fearLESS?</label>
							<input
								type="text"
								required
								className="form-control"
								placeholder="Type here"
								onChange={event => setNewContact({ ...newContact, address: event.target.value })}
							/>
						</div>
						<button
							type="button"
							className="btn btn-primary form-control"
							onClick={() => {
								actions.addContact(newContact);
							}}>
							Save and create account
						</button>
					</div>
				</div>
			</div>
		</div>
	);
};
