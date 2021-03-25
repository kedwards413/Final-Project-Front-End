import React, { useState, useEffect, useContext } from "react";
import { Link } from "react-router-dom";
import { Context } from "../store/appContext";

export const TherapistQuestions = () => {
	const { store, actions } = useContext(Context);
	const [therapist, setTherapist] = useState({
		zipcode: "",
		phobia: ""
	});

	return (
		<div className="container w-50 p-3">
			<div className="questions">
				<div>
					<h1 className="text-center mt-5 text-white">Therapist Questionnaire</h1>
					<div>
						<div className="user-box text-white">
							<label>Which phobia do you specialize in treating?</label>
							<select
								className="form-control"
								required
								placeholder="Enter email"
								onChange={event => setTherapist({ ...therapist, phobia: event.target.value })}>
								<option>Make a selection </option>
								<option>Acrophobia - Fear of heights </option>
								<option>Arachnophobia - Fear of spiders</option>
								<option>Astraphobia - Fear of thunder and lightning</option>
								<option>Claustrophobia - Fear of enclosed spaces</option>
								<option>Cynophobia - Fear of dogs</option>
								<option>Trypophobia - Fear of holes</option>
								<option>Mysophobia – Fear of germs</option>
								<option>Phasmophobia - Fear of ghosts</option>
							</select>
						</div>
						<div className="user-box text-white">
							<label>What is your office zipcode?</label>
							<input
								type="text"
								required
								className="form-control"
								placeholder="Type your response here"
								onChange={event => setTherapist({ ...therapist, zipcode: event.target.value })}
							/>
						</div>
						<button
							type="button"
							className="questionnaire-button form-control mt-5"
							onClick={() => {
								actions.addTherapist(therapist.phobia, therapist.zipcode);
								// actions.hardcodedTherapistsExtraInfo(
								// 	therapist.zipcode,
								// 	store.currentUser[0].id,
								// 	therapist.phobia
								//);
							}}>
							<Link to="/therapistsubscribe">Save and subscribe</Link>
						</button>
					</div>
				</div>
			</div>
		</div>
	);
};
