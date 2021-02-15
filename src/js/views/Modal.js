import React from "react";
import { Link } from "react-router-dom";
// import phobia from "../../img/phobia.png";

export const Modal = () => {
	//array of cards. map through, return one card componenet, have position absolute.
	return (
		<>
			{/* <div className="back">
				<img src={phobia} />
			</div> */}
			<div className="modalBackground">
				<div className="modal d-flex justify-content-center" style={{ width: 600, height: 400 }}>
					<div className="modalText pl-5 pr-5">
						<p>
							Congratulations on taking your first step to conquering your fear. There will be a series of
							missions increasing in difficulty that will help you overcome your phobia. Visuals may
							accompany some of the following steps, so if at anytime it gets to intense for you, click on
							the button stop and the screen will black out. When youre ready, you can proceed.{" "}
						</p>
					</div>
					<form action="">
						<button className="startButton ">Start</button>
					</form>
				</div>
				<div className="modalImage">
					<img src="https://images.unsplash.com/photo-1474540412665-1cdae210ae6b?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1662&q=80" />
				</div>
			</div>
		</>
	);
};
