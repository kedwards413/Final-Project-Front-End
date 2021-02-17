import React, { useState } from "react";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";

export const TitleCard = props => {
	const [modal, setModal] = useState(false);

	const manageModal = () => {
		setModal(!modal);
	};
	return (
		<>
			<Link to="/modal" onClick={() => manageModal()} style={{ textDecoration: "none" }}>
				<div className="card-subject ">
					<p className="card-title hover  mt-5">{props.title}</p>
				</div>
				<div className="card-subtitles ">
					<p className="card-subtitle mb-2  ">{props.subtitle}</p>
				</div>
			</Link>
		</>
	);
};
TitleCard.propTypes = {
	title: PropTypes.string,
	subtitle: PropTypes.string
};
