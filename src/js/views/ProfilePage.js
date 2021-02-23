import React, { useContext } from "react";
// import { Link } from "react-router-dom";
// import { Questions } from "../views/Questions";
// import { ModalQuestions } from "../views/ModalQuestions";
// import { ModalQuestionsProfilePage } from "../views/ModalQuestionsProfilePage";
import { Progress } from "../views/ProgressBar";
import { Context } from "../store/appContext";
import { ImageUpload } from "../views/ImageUpload";

export const ProfilePage = () => {
	const { store, actions } = useContext(Context);
	return (
		<>
			<div className="main mt-5 " style={{ width: 600, height: 700 }}>
				<div className="avatar" />
				<div className="personId ">
					<h1 className="person-name d-flex justify-content-center mt-3 text-white">Monica Lopez</h1>
					<h2 className="phobiaName d-flex justify-content-center mt-4 text-white">Arachnaphobic</h2>
					<button className="profileButton d-flex justify-content-center mt-4 text-black">
						Edit Profile
					</button>
					<Progress />
				</div>
				<div className="outer-line">
					<div className="inner-line" />
				</div>
				{/* START QUESTIONS.js */}
				<div className="container-questions2 w-50 p-3">
					<div className="questions2 d-flex justify-content-end">
						<div>
							<h1 className="text-center mt-5 text-white">Patient Questionnaire</h1>
							<div>
								<div className="user-box text-white">
									<label>Please select your phobia from the dropdown.</label>
									<select
										className="form-control"
										required
										placeholder="Enter email"
										onChange={event =>
											setNewAccount({ ...newAccount, phobia: event.target.value })
										}>
										<option>Acrophobia - Fear of heights </option>
										<option>Arachnophobia - Fear of spiders</option>
										<option>Astraphobia - Fear of thunder and lightning</option>
										<option>Claustrophobia - Fear of enclosed spaces</option>
										<option>Cynophobia - Fear of dogs</option>
										<option>Social Phobia - Fear of social interaction</option>
									</select>
								</div>
								<div className="user-box text-white">
									<label>How severe is your phobia? Please choose between 1-5</label>
									<select
										className="form-control"
										placeholder="Choose severity"
										required
										onChange={event =>
											setNewAccount({ ...newAccount, severity: event.target.value })
										}>
										<option>1 - Mild </option>
										<option>2</option>
										<option>3</option>
										<option>4</option>
										<option>5 - Severe </option>
									</select>
								</div>
								<div className="user-box text-white">
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
								<div className="user-box text-white">
									<label>What do you wish to accomplish while using fearLESS?</label>
									<input
										type="text"
										required
										className="form-control"
										placeholder="Type here"
										onChange={event => setNewAccount({ ...newAccount, goal: event.target.value })}
									/>
								</div>
							</div>
						</div>
					</div>
				</div>
				{/* END QUESTIONS.js */}
				{/* START MODALQUESTIONS.JS */}
				{/* <ModalQuestionsProfilePage /> */}{" "}
				<div
					className="blackout-modal2  d-flex justify-content-end pl-5 pr-5"
					style={{
						width: 800,
						height: 300
					}}>
					{" "}
					<div className="modal-question-answer2 ">
						<div className="modalbox-section2  ">
							<p className="firstquestion-modal2 text-center text-white pt-5">
								How are you feeling right now?
							</p>

							{store.modalInfo.map((info, index) => {
								return <p key={index}>{info.checkboxes}</p>;
							})}
						</div>

						<div className="modal-answer-p-page text-white">
							<div className="modal-question-p-page d-flex justify-content-center">
								<p className="secondquestion-modal text-white  mt-3">
									Tell us more about your experience
								</p>
								{store.modalInfo.map((info, index) => {
									return <p key={index}>{info.experience}</p>;
								})}
							</div>
						</div>
					</div>
				</div>
				{/* END MODALQUESTIONS.JS */}
				<div className="testimonial-input ">
					<h1 className=" text-white testimonial-title2">Testimonial</h1>
					<input
						className="testimonial-finalInput d-flex justify-content-center"
						style={{ width: 800, height: 200 }}
					/>
					<button className="uploadPhoto mt-3"> Share with Us</button>
					<ImageUpload />
				</div>
			</div>
		</>
	);
};
