import React, { useContext } from "react";
import { Context } from "../store/appContext";
import rigoImageUrl from "../../img/rigo-baby.jpg";
import "../../styles/home.scss";
import { TitleCard } from "../component/TitleCard";
import { Testimonials } from "../component/Testimonials";

export const Home = () => {
	const { store, actions } = useContext(Context);

	return (
		<>
			<img
				className="background-image"
				src="https://images.unsplash.com/photo-1474540412665-1cdae210ae6b?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1662&q=80"
			/>
			<div className="phobias-title d-flex justify-content-center ml-5  ">
				<p className="part-title">face your </p>
				<span className="phobia-name ml-3 mr-3"> PHOBIAS</span>
				<p className="part-title ">and be set free</p>
			</div>
			<div className="container-fluid d-flex align-content flex-wrap m-5">
				<TitleCard title="Arachnophobia" subtitle="FEAR OF SPIDERS" />
				<TitleCard title="Social Phobia" subtitle="FEAR OF SOCIAL INTERACTION" />
				<TitleCard title="Acrophobia" subtitle="FEAR OF HEIGHTS" />
				<TitleCard title="Cynophobia" subtitle="FEAR OF DOGS" />
				<TitleCard title="Claustrophobia" subtitle="FEAR OF ENCLOSED SPACES" />
				<TitleCard title=" Astraphobia" subtitle="FEAR OF THUNDER AND LIGHTNING" />
			</div>
			<div className="fade_rule" />
			<Testimonials />
		</>
	);
};
