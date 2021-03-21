import React, { useContext, useState } from "react";
import { Progress } from "../views/ProgressBar";
import { Context } from "../store/appContext";
// import { TestimonialImageUpload } from "../views/TestimonialImageUpload";
import { Link } from "react-router-dom";

export const ProfilePage = () => {
	const { store, actions } = useContext(Context);

	const [state, setState] = useState(null);
	const [data, setData] = useState({
		testimony: ""
	});
	const manageData = () => {
		actions.addingTestimonials(data);
		setData({ testimony: "" });
	};
	return (
		<>
			<div className="main mt-5" style={{ width: 400, height: 700 }}>
				<div className="avatar" style={{ width: 180, height: 210, borderRadius: 100 }}>
					<img id="output" style={{ width: 180, height: 210, borderRadius: 100 }} src={state} />
				</div>
				<div className="personId ">
					<h1 className="person-name d-flex justify-content-center mt-3 text-white">Monica Lopez</h1>
					<h2 className="phobiaName d-flex justify-content-center mt-4 text-white">Arachnaphobic</h2>

					<input
						className="profileButton d-flex justify-content-center mt-4 text-black  "
						type="file"
						id="input "
						accept="image/*"
						onChange={event => setState(URL.createObjectURL(event.target.files[0]))}
					/>

					<Progress />
				</div>
				<div className="outer-line">
					<div className="inner-line" />
				</div>
				{/* START QUESTIONS.js */}
				<div className="container-questions2 w-50 p-3 ">
					<div className="questions2 d-flex justify-content-end">
						<div>
							<h1 className="text-center mt-5 text-white">Patient Questionnaire</h1>
							<div>
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
							<div className="firstquestion-modal-answers text-white">
								{store.modalInfo.map((info, index) => {
									return <p key={index}>{info.checkboxes}</p>;
								})}
							</div>
						</div>

						<div className="modal-answer-p-page text-white">
							<div className="modal-question-p-page d-flex justify-content-center">
								<p className="secondquestion-modal text-white  mt-5">
									Tell us more about your experience
								</p>
								<div className="secondquestion-modal-answers">
									{store.modalInfo.map((info, index) => {
										return <p key={index}>{info.experience}</p>;
									})}
								</div>
							</div>
						</div>
					</div>
				</div>
				{/* END MODALQUESTIONS.JS */}
				{/* <div className="testimonial-input bg-white">
					<h1 className=" text-white testimonial-title2">Testimonial</h1>
					<input
						onChange={e => setData({ testimony: e.target.value })}
						value={data.testimony}
						className="testimonial-finalInput d-flex justify-content-center text-dark"
						style={{ width: 800, height: 200 }}
					/>{" "}
					<Link to="./testimonials" onClick={() => manageData()} className="uploadPhoto mt-3 text-white">
						Share with Us
					</Link>
				</div> */}
				<Link to="/testimonialinput">
					<button>hi</button>
				</Link>
			</div>
		</>
	);
};
