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
			<div className="container-fluid d-flex align-content flex-wrap ">
				<div className="first-card">
					<TitleCard title="Arachnophobia" subtitle="FEAR OF SPIDERS" />
				</div>
				<div className="second-card">
					<TitleCard title="Social Phobia" subtitle="FEAR OF SOCIAL INTERACTION" />
				</div>
				<div className="third-card">
					<TitleCard title="Acrophobia" subtitle="FEAR OF HEIGHTS" />
				</div>
				<div className="fourth-card">
					<TitleCard title="Cynophobia" subtitle="FEAR OF DOGS" />
				</div>
				<div className="fifth-card">
					<TitleCard title="Claustrophobia" subtitle="FEAR OF ENCLOSED SPACES" />
				</div>
				<div className="sixth-card">
					<TitleCard title=" Astraphobia" subtitle="FEAR OF THUNDER AND LIGHTNING" />
				</div>
			</div>
			<div className="fade_rule" />
		</>
	);
};
