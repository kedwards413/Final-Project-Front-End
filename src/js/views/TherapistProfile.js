import React, { useContext, useState } from "react";
import { Link } from "react-router-dom";
import { Questions } from "../views/Questions";
import { ModalQuestions } from "../views/ModalQuestions";
import { ModalQuestionsProfilePage } from "../views/ModalQuestionsProfilePage";
import { Context } from "../store/appContext";
import { TestimonialImageUpload } from "../views/TestimonialImageUpload";

export const TherapistProfile = () => {
	const { store, actions } = useContext(Context);

	const [state, setState] = useState(null);
	return (
		<>
			<div className="main mt-5" style={{ width: 400, height: 700 }}>
				<div className="avatar">
					<img id="output" style={{ width: "100%" }} src={state} />
				</div>
				<div className="personId ">
					<h1 className="person-name d-flex justify-content-center mt-3 text-white">Therapist Profile</h1>
					<h2 className="phobiaName d-flex justify-content-center mt-4 text-white" />

					<input
						className="profileButton d-flex justify-content-center mt-4 text-black  "
						type="file"
						id="input "
					/>
				</div>
			</div>
			{/* END MODALQUESTIONS.JS */}
		</>
	);
};
