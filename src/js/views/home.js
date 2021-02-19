import React, { useContext } from "react";
import { Context } from "../store/appContext";

import "../../styles/home.scss";
import { TitleCard } from "../component/TitleCard";
import { Testimonials } from "../component/Testimonials";
import { Audio } from "../component/Audio";

export const Home = () => {
	const { store, actions } = useContext(Context);

	return (
		<>
			<div className="phobia-name">
				<span id="L">P</span>
				<span id="T">H</span>
				<span id="G">O</span>
				<span id="H">B</span>
				<span id="T">I</span>
				<span id="L">A</span>
				<span id="T">S</span>
				<span id="I">.</span>
			</div>

			<div className="first-subtitle">
				<p className="part-title ">face your fears </p>
			</div>
			<div className="secondsubtitle">
				<p className="part-title2  ">and be set free</p>
			</div>
			<div className="fade_rule mt-5" />

			<div className="first-card d-flex justify-content-start">
				<TitleCard title="Arachnophobia" subtitle="FEAR OF SPIDERS" />
			</div>

			<div className="second-card d-flex justify-content-start">
				<TitleCard title="Social Phobia" subtitle="FEAR OF SOCIAL INTERACTION" />
			</div>

			<div className="third-card d-flex justify-content-center">
				<TitleCard title="Acrophobia" subtitle="FEAR OF HEIGHTS" />
			</div>

			<div className="fourth-card d-flex justify-content-center ">
				<TitleCard title="Cynophobia" subtitle="FEAR OF DOGS" />
			</div>

			<div className="fifth-card d-flex justify-content-end">
				<TitleCard title="Claustrophobia" subtitle="FEAR OF ENCLOSED SPACES" />
			</div>

			<div className="sixth-card d-flex justify-content-end">
				<TitleCard title=" Astraphobia" subtitle="FEAR OF THUNDER AND LIGHTNING" />
			</div>

			<div className="fade_rule mt-5" />
			<Testimonials />
			<Audio />
		</>
	);
};
