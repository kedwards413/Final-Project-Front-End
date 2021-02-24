import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Modal } from "../views/Modal";

import PropTypes from "prop-types";

export const TitleCard = props => {
	const [modal, setModal] = useState(false);

	const manageModal = () => {
		setModal(!modal);
	};
	return (
		<>
			<Link to="/modal" onClick={() => manageModal()} style={{ textDecoration: "none" }}>
				<div className="card text-center  ml-5" style={{ width: 400 }}>
					<h5 className="card-title ">{props.title}</h5>
					<h6 className="card-subtitle  ">{props.subtitle}</h6>
				</div>
			</Link>
		</>
	);
};
TitleCard.propTypes = {
	title: PropTypes.string,
	subtitle: PropTypes.string
};
