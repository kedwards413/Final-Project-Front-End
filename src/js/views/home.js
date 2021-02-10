import React, { useContext } from "react";
import { Context } from "../store/appContext";
import rigoImageUrl from "../../img/rigo-baby.jpg";
import "../../styles/home.scss";
import { TitleCard } from "../component/TitleCard";

export const Home = () => {
	const { store, actions } = useContext(Context);

	return (
		<>
			<TitleCard />
		</>
	);
};