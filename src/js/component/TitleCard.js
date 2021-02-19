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
				<div className="card text-center  mr-4  ml-4" style={{ width: 400, height: 200 }}>
					<div className="card-body ">
						<h5 className="card-title  mt-5">{props.title}</h5>
						<h6 className="card-subtitle mb-2  ">{props.subtitle}</h6>
					</div>
				</div>
			</Link>
		</>
	);
};
TitleCard.propTypes = {
	title: PropTypes.string,
	subtitle: PropTypes.string
};
