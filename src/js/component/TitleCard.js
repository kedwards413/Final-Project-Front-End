import React from "react";
import { Link } from "react-router-dom";

import PropTypes from "prop-types";

export const TitleCard = props => {
	return (
		<>
			<div className="card text-center " style={{ width: 400, height: 200 }}>
				<div className="card-body  ">
					<Link to="/demo">
						<h5 className="card-title text-dark mt-5">{props.title}</h5>
						<h6 className="card-subtitle mb-2 text-muted ">{props.subtitle}</h6>
					</Link>
				</div>
			</div>
		</>
	);
};
TitleCard.propTypes = {
	title: PropTypes.string,
	subtitle: PropTypes.string
};
