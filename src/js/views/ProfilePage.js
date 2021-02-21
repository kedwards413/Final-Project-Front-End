import React from "react";
import { Link } from "react-router-dom";

export const ProfilePage = () => {
	return (
		<>
			<div className="main">
				<div className="avatar" />
				<div className="personId">
					<h1 className="name">Monica Lopez</h1>
					<h2 className="phobiaName">Arachnaphobic</h2>
				</div>
			</div>
		</>
	);
};
