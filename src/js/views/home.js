import React, { useContext } from "react";
import { Context } from "../store/appContext";

import "../../styles/home.scss";
import { TitleCard } from "../component/TitleCard";
import { Testimonials } from "../component/Testimonials";

import { About } from "../component/About";

export const Home = () => {
	const { store, actions } = useContext(Context);

	return (
		<>
			<div className="header">
				<div className="phobia-name position-fixed ">
					<span id="L">P</span>
					<span id="T">H</span>
					<span id="G">O</span>
					<span id="H">B</span>
					<span id="T">I</span>
					<span id="L">A</span>
					<span id="T">S</span>
					<span id="I">.</span>
				</div>

				<div className="first-subtitle position-fixed ">
					<p className="part-title ">face your fears </p>
				</div>
				<div className="secondsubtitle position-fixed ">
					<p className="part-title2  ">and be set free</p>
				</div>
			</div>
			{/* <div className="fade_rule1 mt-5 mb-5" /> */}
			<div className="secondDiv-image">
				<img className="divGif" src="https://thumbs.gfycat.com/GiganticSlushyLemming.webp" />{" "}
			</div>
			<About />

			{/* <div className="fade_rule mt-5" /> */}

			<div className="titleCard-background  container-fluid d-flex align-content flex-wrap mt-5 pt-5">
				<TitleCard title="Mysophobia" subtitle="FEAR OF GERMS" />
				<TitleCard title="Phasmophobia" subtitle="FEAR OF GHOSTS" />
				<TitleCard title="Trypophobia" subtitle="FEAR OF HOLES" />
				<TitleCard title="Autophobia" subtitle="FEAR OF BEING ALONE" />
				<TitleCard title="Hydrophobia" subtitle="FEAR OF WATER" />
				<TitleCard title="Nephophobia" subtitle="FEAR OF CLOUDS" />
				<TitleCard title="Arachnophobia" subtitle="FEAR OF SPIDERS" />
				<TitleCard title="Social Phobia" subtitle="FEAR OF SOCIAL INTERACTION" />
				<TitleCard title="Acrophobia" subtitle="FEAR OF HEIGHTS" />
			</div>

			{/* <div className="fade_rule mt-3 mb-4" /> */}

			<Testimonials />
		</>
	);
};
