import React, { useContext, useState } from "react";
import { Link } from "react-router-dom";
// import phobia from "../../img/phobia.png";
import { ProfilePage } from "./ProfilePage.js";
import { Context } from "../store/appContext";
export const Modal = () => {
	const { store, action } = useContext(Context);
	const [modalIndex, setModalIndex] = useState(0);
	const [showImage, setShowImageBlack] = useState(false);
	const [showText, setShowTextBlack] = useState(true);
	var lengthCards = store.modalCards.length - 1;
	//array of cards. map through, return one card componenet, have position absolute.
	return (
		<>
			{modalIndex < lengthCards ? (
				<div className="modalBackground rounded">
					<div className="modal d-flex justify-content-center rounded" style={{ width: 600, height: 600 }}>
						{store.modalCards[modalIndex].imageUrl == undefined ? null : showImage == false ? (
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
								className="blackout-modal"
								style={{
									width: 800,
									height: 300
								}}>
								{" "}
								<div className="modal-question-answer1 ">
									<div className="modalbox-section1 text-white d-flex justify-content-center ">
										<p className="firstquestion-modal mt-1">Are you ok?</p>
									</div>
									<div className="modal-firstinput d-flex justify-content-center ">
										<input
											type="text"
											className="form-control  "
											style={{ width: 220, height: 50 }}
										/>
									</div>
								</div>
								<div className="modal-question-answer2">
									<div className="modalbox-section2 d-flex justify-content-center">
										<p className="secondquestion-modal text-white">
											How are you feeling right now?
										</p>
									</div>
									<div className="modal-checkbox d-flex justify-content-center">
										<div className="form-check form-check-inline">
											<input
												className="form-check-input"
												type="checkbox"
												id="inlineCheckbox1"
												value="option1"
											/>
											<label className="form-check-label text-white" htmlFor="inlineCheckbox1 ">
												Uncomfortable
											</label>
										</div>
										<div className="form-check form-check-inline">
											<input
												className="form-check-input"
												type="checkbox"
												id="inlineCheckbox1"
												value="option1"
											/>
											<label className="form-check-label text-white" htmlFor="inlineCheckbox1 ">
												Scared
											</label>
										</div>
										<div className="form-check form-check-inline">
											<input
												className="form-check-input"
												type="checkbox"
												id="inlineCheckbox1"
												value="option1"
											/>
											<label className="form-check-label text-white" htmlFor="inlineCheckbox1 ">
												Terrified
											</label>
										</div>
									</div>
									<div className="modal-answer3">
										<div className="modal-question3 d-flex justify-content-center">
											<p className="modalbox-question3 text-white">
												Tell me more about your experience
											</p>
										</div>
										<div className="modal-secondinput d-flex justify-content-center">
											<input
												type="text"
												className="form-control"
												style={{ width: 220, height: 50 }}
											/>
										</div>
									</div>
								</div>
								<div className="d-flex justify-content-center">
									<p className="last-modalbox-advice text-white ml-3 mr-3">
										Close your eyes and focus on your breathe. Think positive thought while
										breathing deeply. When you feel calm and ready go ahead and click on the button.
										The image will reappear and you can continue with overcoming your fear.
									</p>
								</div>
								<div className="d-flex justify-content-center">
									<button
										onClick={() => {
											setShowImageBlack(!showImage);
											setShowTextBlack(!showText);
										}}>
										Continue
									</button>
								</div>
							</div>
						)}
						{showText && <p className="modalText">{store.modalCards[modalIndex].text}</p>}
						<button
							className="startButton"
							onClick={() => {
								setModalIndex(modalIndex + 1);
							}}>
							{store.modalCards[modalIndex].button}
						</button>
					</div>
				</div>
			) : (
				<div className="modalBackground">
					<div className="modal d-flex justify-content-center rounded" style={{ width: 600, height: 600 }}>
						<div className="modalText2 pl-5 pr-5">
							<p>{store.modalCards[modalIndex].text}</p>
						</div>
						<Link to="/profilepage">
							<button className="startButtonLast "> {store.modalCards[modalIndex].button}</button>
						</Link>
					</div>
				</div>
			)}
		</>
	);
};
