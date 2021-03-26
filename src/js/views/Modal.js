import React, { useContext, useState } from "react";
import { Link } from "react-router-dom";
import { Video } from "../component/Video";
// import { ModalQuestions } from "../views/ModalQuestions";
// import phobia from "../../img/phobia.png";

import { Context } from "../store/appContext";

export const Modal = () => {
	const { store, actions } = useContext(Context);
	const [modalIndex, setModalIndex] = useState(0);
	const [showImage, setShowImageBlack] = useState(false);

	const [showText, setShowTextBlack] = useState(true);
	var lengthCards = store.modalCards.length - 1;
	const [info, setInfo] = useState({
		title: "",
		experience: "",
		checkboxes: [],
		date: ""
	});
	const [story, setStory] = useState([]);

	var d = new Date();
	var month = d.getUTCMonth() + 1;
	var day = d.getUTCDate();
	var year = d.getUTCFullYear();
	var a = month + "/" + day + "/" + year;

	return (
		<>
			{store.userLogin ? (
				modalIndex < lengthCards ? (
					<div className="modalBackground ">
						<div className="modal  " style={{ width: 600, height: 600 }}>
							<p>{store.modalCards[modalIndex].quest}</p>
							{store.modalCards[modalIndex].videoSrc !== undefined ? (
								<Video />
							) : showImage == false ? (
								<div className="modalImage">
									<img
										src={store.modalCards[modalIndex].imageUrl}
										style={{
											width: 800,
											height: 300
										}}
										onClick={() => {
											setShowImageBlack(!showImage);
											setShowTextBlack(!showText);
										}}
									/>
								</div>
							) : (
								<div
									className="blackout-modal pl-5 pr-5"
									style={{
										width: 800,
										height: 300
									}}>
									{" "}
									<div className="modal-question-answer1">
										<div className="modalbox-section2 d-flex justify-content-center">
											<p className="firstquestion-modal text-white pt-5">
												How are you feeling right now?
											</p>
										</div>
										<div className="modal-checkbox d-flex justify-content-center text-white">
											<div className="form-check form-check-inline ">
												<input
													className="form-check-input text-white"
													type="checkbox"
													id="inlineCheckbox1"
													value="uncomfortable"
													onChange={e => {
														setInfo({
															...info,
															checkboxes: e.target.value,
															date: a
														});
													}}
												/>
												<label className="form-check-label " htmlFor="inlineCheckbox1 ">
													Uncomfortable
												</label>
											</div>
											<div className="form-check form-check-inline">
												<input
													className="form-check-input"
													type="checkbox"
													id="inlineCheckbox1"
													value="scared"
													onChange={e => {
														setInfo({
															...info,
															checkboxes: e.target.value,
															date: a
														});
													}}
												/>
												<label className="form-check-label " htmlFor="inlineCheckbox1 ">
													Scared
												</label>
											</div>
											<div className="form-check form-check-inline ">
												<input
													className="form-check-input "
													type="checkbox"
													id="inlineCheckbox1"
													value="terrified"
													onChange={e => {
														setInfo({
															...info,
															checkboxes: e.target.value,
															date: a
														});
													}}
												/>{" "}
												<label
													className="form-check-label text-white"
													htmlFor="inlineCheckbox1 ">
													Terrified
												</label>
											</div>
											<div className="form-check form-check-inline">
												<input
													className="form-check-input"
													type="checkbox"
													id="inlineCheckbox1"
													value="neutral"
													onChange={e => {
														setInfo({
															...info,
															checkboxes: e.target.value,
															date: a
														});
													}}
												/>{" "}
												<label className="form-check-label " htmlFor="inlineCheckbox1 ">
													Neutral
												</label>
											</div>
										</div>

										<div className="modal-answer2 text-center">
											<div className="modal-question3 d-flex justify-content-center ">
												<p className="secondquestion-modal text-white pt-5 mr-3 ">
													Tell us more about your experience
												</p>
											</div>
											<div className="modal-secondinput d-flex justify-content-center">
												<input
													type="text"
													className="form-control "
													style={{ width: 300, height: 50 }}
													value={info.experience}
													onChange={e => {
														setInfo({
															...info,
															experience: e.target.value
														});
													}}
												/>
											</div>
										</div>
									</div>
									<div className="d-flex justify-content-center">
										<p className="last-modalbox-advice text-white ml-3 mr-3 pt-5 text-center">
											Close your eyes and focus on your breath. Think positive {"\n"}
											thought while breathing deeply. When you feel calm and ready go ahead and
											click on the button. The image will reappear and you can continue with
											overcoming your fear.
										</p>
									</div>
									<div className="d-flex justify-content-center">
										<button
											onClick={() => {
												setShowImageBlack(!showImage);
												setShowTextBlack(!showText);
												// actions.addingModalInfo(info);
												setStory({ ...story, info });
												setInfo({
													...info,
													experience: "",
													title: store.modalCards[modalIndex].title
												});
											}}>
											Continue
										</button>
									</div>
								</div>
							)}
							{showText && <p className="modalText pl-5 pr-5">{store.modalCards[modalIndex].text}</p>}
							<i
								className="arrowIcon fas fa-arrow-right
							startButton mb-3"
								style={{ color: "rgb(172, 170, 170)" }}
								onClick={() => {
									setModalIndex(modalIndex + 1);
								}}>
								{store.modalCards[modalIndex].button}
							</i>
						</div>
					</div>
				) : (
					<div className="modalBackground">
						<div className="modal " style={{ width: 600, height: 600 }}>
							<div className="modalText2 pl-5 pr-5">
								<p>{store.modalCards[modalIndex].text}</p>
							</div>
							<Link to="/profilepage">
								<button className="seeProgressButton mb-4">
									{" "}
									{store.modalCards[modalIndex].button}
								</button>
							</Link>
						</div>
					</div>
				)
			) : (
				<div className="warning">
					<p className="login-warning">
						Please <Link to="/signup">sign up</Link> or <Link to="/login">login</Link> to start a mission
					</p>
					<div />
				</div>
			)}
		</>
	);
};
