import React from "react";
import { Link } from "react-router-dom";

export const TherapistSubscribe = () => {
	return (
		<>
			<div className="therapistsubscribe">
				<h3 className="subscribed"> You have successfully subscribed to the fearLESS referral system. </h3>
				<p className="subscribed2 ">Your information has been saved to our registered therapists page.</p>
				<div className="container">
					<div className="center-button">
						<button className="homebutton">
							<Link to="/">Home</Link>
						</button>
					</div>
				</div>
			</div>
		</>
	);
};
