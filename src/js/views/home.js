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
			<div className="phobias-title d-flex justify-content-center ml-5 mt-3 ">
				<p className="part-title mt-4">face your </p>
				<span className="phobia-name ml-3 mr-3"> PHOBIAS</span>
				<p className="part-title mt-4">and be set free</p>
			</div>
			<div className="container-fluid d-flex align-content flex-wrap m-5">
				<TitleCard title="Arachnophobia" subtitle="FEAR OF SPIDERS" />
				<TitleCard title="Social Phobia" subtitle="FEAR OF SOCIAL INTERACTION" />
				<TitleCard title="Acrophobia" subtitle="FEAR OF HEIGHTS" />
				<TitleCard title="Cynophobia" subtitle="FEAR OF DOGS" />
				<TitleCard title="Claustrophobia" subtitle="FEAR OF ENCLOSED SPACES" />
				<TitleCard title=" Astraphobia" subtitle="FEAR OF THUNDER AND LIGHTNING" />
			</div>
			<Testimonials />
		</>
	);
};
