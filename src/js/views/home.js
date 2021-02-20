import React, { useContext } from "react";
import { Context } from "../store/appContext";

import "../../styles/home.scss";
import { TitleCard } from "../component/TitleCard";
import { Testimonials } from "../component/Testimonials";
import { Audio } from "../component/Audio";
import { About } from "../component/About";

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
				<Audio />
			</div>

			<div className="first-subtitle">
				<p className="part-title ">face your fears </p>
			</div>
			<div className="secondsubtitle">
				<p className="part-title2  ">and be set free</p>
			</div>
			<div className="fade_rule mt-5 mb-5" />
			<About />
			<div className="fade_rule mt-5" />

			<div className="container-fluid d-flex align-content flex-wrap m-5">
				<TitleCard title="Arachnophobia" subtitle="FEAR OF SPIDERS" />
				<TitleCard title="Social Phobia" subtitle="FEAR OF SOCIAL INTERACTION" />
				<TitleCard title="Acrophobia" subtitle="FEAR OF HEIGHTS" />
				<TitleCard title="Cynophobia" subtitle="FEAR OF DOGS" />
				<TitleCard title="Claustrophobia" subtitle="FEAR OF ENCLOSED SPACES" />
				<TitleCard title=" Astraphobia" subtitle="FEAR OF THUNDER AND LIGHTNING" />
			</div>

			<div className="fade_rule mt-5" />
			<Testimonials />
		</>
	);
};
