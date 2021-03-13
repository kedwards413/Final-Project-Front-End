import React from "react";
import "../../styles/home.scss";
import PropTypes from "prop-types";

export const SearchResultCard = props => {
	return (
		<div className="therapist-card float-center" style={{ width: 750 }}>
			<div className="card-header">
				<h5>{props.therapist.name}</h5>
			</div>
			<div className="card-body">
				<p className="card-title">{props.therapist.specialty}</p>
				<p className="card-text">{props.therapist.email}</p>
				<p className="card-text">{props.therapist.phone_number}</p>
				<p className="card-text">{props.therapist.zip_code}</p>
				<button className="btn btn-outline-primary my-2 my-sm-0" type="submit">
					See Profile
				</button>
			</div>
		</div>
	);
};

SearchResultCard.propTypes = {
	therapist: PropTypes.object
};
