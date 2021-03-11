import React, { useContext, useState } from "react";
import { Link } from "react-router-dom";
import { Questions } from "./Questions";
import { ModalQuestions } from "./ModalQuestions";
import { ModalQuestionsProfilePage } from "./ModalQuestionsProfilePage";
import { Context } from "../store/appContext";
import { TestimonialImageUpload } from "./TestimonialImageUpload";

export const Therapists = () => {
	const { store, actions } = useContext(Context);
	const [state, setState] = useState({
		//initialize state here
	});

	return (
		<div>
			<nav className="AlphabetNav">
				<a href="#A">A</a>
				<a href="#B">B</a>
				<a href="#C">C</a>
				<a href="#D">D</a>
				<a href="#E">E</a>
				<a href="#F">F</a>
			</nav>
			<div className="contactList">
				<section className="contact">
					<img
						className="contact-avatar"
						src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/t-80/newgirl-01.svg"
					/>
					<h5 className="contact-name">Amanda Smith</h5>
				</section>
				<section className="contact">
					<img
						className="contact-avatar"
						src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/t-80/newboy-02.svg"
					/>
					<h5 className="contact-name">Brian Smith</h5>
				</section>
				<section className="contact">
					<img
						className="contact-avatar"
						src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/t-80/newgirl-01.svg"
					/>
					<h5 className="contact-name">Crystal Smith</h5>
				</section>
				<section className="contact">
					<img
						className="contact-avatar"
						src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/t-80/newboy-02.svg"
					/>
					<h5 className="contact-name">Doug Smith</h5>
				</section>
				<section className="contact">
					<img
						className="contact-avatar"
						src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/t-80/newgirl-01.svg"
					/>
					<h5 className="contact-name">Erin Smith</h5>
				</section>
				<section className="contact">
					<img
						className="contact-avatar"
						src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/t-80/newboy-02.svg"
					/>
					<h5 className="contact-name">Frank Smith</h5>
				</section>
				<section className="contact">
					<img
						className="contact-avatar"
						src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/t-80/newgirl-01.svg"
					/>
					<h5 className="contact-name">Glinda Smith</h5>
				</section>
				<section className="contact">
					<img
						className="contact-avatar"
						src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/t-80/newboy-02.svg"
					/>
					<h5 className="contact-name">Hank Smith</h5>
				</section>
				<section className="contact">
					<img
						className="contact-avatar"
						src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/t-80/newgirl-01.svg"
					/>
					<h5 className="contact-name">Izzy Smith</h5>
				</section>
				<section className="contact">
					<img
						className="contact-avatar"
						src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/t-80/newboy-02.svg"
					/>
					<h5 className="contact-name">Joe Smith</h5>
				</section>
			</div>
		</div>
	);
};
