import React, { useState, useContext } from "react";
import "../../styles/home.scss";
import PropTypes from "prop-types";
import { Context } from "../store/appContext";

export const SearchResultCard = props => {
	const [showNumber, setShowNumber] = useState(false);
	// const [showEmail, setShowEmail] = useState(false);
	const [showWarning, setShowWarning] = useState(false);
	const { store, actions } = useContext(Context);

	let show = () => {
		if (store.token) setShowNumber(true);
		else setShowWarning(true);
	};

	// let email = () => {
	// 	if (store.token) setShowEmail(true);
	// 	else setShowWarning(true);
	// };
	return (
		<div className="therapist-card float-center " style={{ width: 750 }}>
			<div className="card-body ">
				<div className="card-header text-white ">
					<h5>{props.therapist.name}</h5>
				</div>
				<p className="card-title text-white ml-1">{props.therapist.specialty}</p>
				<p className="card-text text-white ml-1">{props.therapist.zip_code}</p>
				<p className="card-text text-white ml-1">{props.therapist.email}</p>
				{/* <p className={showEmail ? "card-text text-white ml-1" : "d-none"}>{props.therapist.email}</p> */}
				<p className={showNumber ? "card-text text-white ml-1" : "d-none"}>{props.therapist.phone_number}</p>

				<button className="btn btn-lg ml-1 my-2 my-sm-0 therapist-number" type="submit" onClick={show}>
					Free Consultation
				</button>
				<p className={showWarning ? "card-text text-white ml-1" : "d-none"}>
					Please login to see therapist number
				</p>
			</div>
		</div>
	);
};

SearchResultCard.propTypes = {
	therapist: PropTypes.object
};
