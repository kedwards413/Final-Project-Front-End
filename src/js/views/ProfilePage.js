import React from "react";
import { Link } from "react-router-dom";
import { Questions } from "../views/Questions";
import { ModalQuestions } from "../views/ModalQuestions";

export const ProfilePage = () => {
	return (
		<>
			<div className="main mt-5 " style={{ width: 600, height: 700 }}>
				<div className="avatar" />
				<div className="personId ">
					<h1 className="person-name d-flex justify-content-center mt-3 text-white">Monica Lopez</h1>
					<h2 className="phobiaName d-flex justify-content-center mt-4 text-white">Arachnaphobic</h2>
				</div>
				<div className="outer-line">
					<div className="inner-line" />
				</div>
				<Questions />
				<ModalQuestions />
				<div className="modal-answers">
					<input className="modal-answers2" />
					<input className="modal-answers3" />
				</div>
				<div className="testimonial-input">
					<input className="testimonial-finalInput" />
					<button className="uploadPhoto" />
				</div>
			</div>
		</>
	);
};
