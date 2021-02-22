import React, { useState } from "react";

// import phobia from "../../img/phobia.png";

export const ModalQuestions = () => {
	const [showImage, setShowImageBlack] = useState(false);
	const [showText, setShowTextBlack] = useState(true);

	return (
		<div
			className="blackout-modal pl-5 pr-5"
			style={{
				width: 800,
				height: 300
			}}>
			{" "}
			<div className="modal-question-answer1">
				<div className="modalbox-section2 d-flex justify-content-center">
					<p className="firstquestion-modal text-white pt-5">How are you feeling right now?</p>
				</div>
				<div className="modal-checkbox d-flex justify-content-center">
					<div className="form-check form-check-inline">
						<input className="form-check-input" type="checkbox" id="inlineCheckbox1" value="option1" />
						<label className="form-check-label text-white" htmlFor="inlineCheckbox1 ">
							Uncomfortable
						</label>
					</div>
					<div className="form-check form-check-inline">
						<input className="form-check-input" type="checkbox" id="inlineCheckbox1" value="option1" />
						<label className="form-check-label text-white" htmlFor="inlineCheckbox1 ">
							Scared
						</label>
					</div>
					<div className="form-check form-check-inline">
						<input className="form-check-input" type="checkbox" id="inlineCheckbox1" value="option1" />
						<label className="form-check-label text-white" htmlFor="inlineCheckbox1 ">
							Terrified
						</label>
					</div>
				</div>
				<div className="modal-answer2">
					<div className="modal-question3 d-flex justify-content-center">
						<p className="secondquestion-modal text-white pt-5">Tell us more about your experience</p>
					</div>
					<div className="modal-secondinput d-flex justify-content-center">
						<input type="text" className="form-control" style={{ width: 300, height: 50 }} />
					</div>
				</div>
			</div>
			<div className="d-flex justify-content-center">
				<p className="last-modalbox-advice text-white ml-3 mr-3 pt-5 text-center">
					Close your eyes and focus on your breathe. Think positive {"\n"}
					thought while breathing deeply. When you feel calm and ready go ahead and click on the button. The
					image will reappear and you can continue with overcoming your fear.
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
	);
};
