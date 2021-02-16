import React, { useContext } from "react";
import { Context } from "../store/appContext";
import rigoImageUrl from "../../img/rigo-baby.jpg";
import "../../styles/home.scss";
import { TitleCard } from "../component/TitleCard";

export const Home = () => {
	const { store, actions } = useContext(Context);

	return (
		<>
			<div className="phobias-title ">
				<p className="part-title ">face your fears </p>
				<span className="phobia-name  "> PHOBIAS</span>
				<p className="part-title2  ">and be set free</p>
			</div>
			<div className="container-fluid d-flex align-content ">
				<div className="first-card hover">
					<TitleCard title="Arachnophobia" subtitle="FEAR OF SPIDERS" />
				</div>
				<div className="second-card hover">
					<TitleCard title="Social Phobia" subtitle="FEAR OF SOCIAL INTERACTION" />
				</div>
				<div className="third-card hover">
					<TitleCard title="Acrophobia" subtitle="FEAR OF HEIGHTS" />
				</div>
				<div className="fourth-card hover">
					<TitleCard title="Cynophobia" subtitle="FEAR OF DOGS" />
				</div>
				<div className="fifth-card hover">
					<TitleCard title="Claustrophobia" subtitle="FEAR OF ENCLOSED SPACES" />
				</div>
				<div className="sixth-card hover">
					<TitleCard title=" Astraphobia" subtitle="FEAR OF THUNDER AND LIGHTNING" />
				</div>
			</div>
			<div className="fade_rule" />
		</>
	);
};
