import React, { useRef, useEffect } from "react";
import { Scroll } from "../component/Scroll";

export const About = () => {
	return (
		<>
			<div className="about-background " id="content">
				<h1 className="aboutTitle"> Our Story </h1>
				<div className="fade_rule_about" />
				<p className="aboutText ">
					fearLESS was designed to help people overcome their phobia through exposure therapy. Users will
					complete a series of missions that increase in difficulty with each step. Users will also have the
					option to connect with a therapist online through the fearLESS platform to continue their progress
					and discuss next steps.
				</p>
			</div>
		</>
	);
};
