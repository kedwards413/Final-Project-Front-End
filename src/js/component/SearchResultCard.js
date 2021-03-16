import React from "react";
import "../../styles/home.scss";
import PropTypes from "prop-types";

export const SearchResultCard = props => {
	return (
		<div className="therapist-card float-center " style={{ width: 750 }}>
			<div className="card-body ">
				<div className="card-header text-white ">
					<h5>{props.therapist.name}</h5>
				</div>
				<p className="card-title text-white ml-1">{props.therapist.specialty}</p>

				<p className="card-text text-white ml-1">{props.therapist.email}</p>
				<p className="card-text text-white ml-1">{props.therapist.phone_number}</p>
				<p className="card-text text-white ml-1">{props.therapist.zip_code}</p>
				<button className="btn btn-outline-light ml-1 my-2 my-sm-0" type="submit">
					See Profile
				</button>
			</div>
		</div>
	);
};

SearchResultCard.propTypes = {
	therapist: PropTypes.object
};
