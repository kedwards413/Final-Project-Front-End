import React, { useContext, useState } from "react";
import { Link } from "react-router-dom";
// import phobia from "../../img/phobia.png";
import { ProfilePage } from "./ProfilePage.js";
import { Context } from "../store/appContext";

export const Modal = () => {
	const { store, action } = useContext(Context);

	const [modalIndex, setModalIndex] = useState(0);

	const [showBlack, setShowBlack] = useState(false);

	var lengthCards = store.modalCards.length;

	//array of cards. map through, return one card componenet, have position absolute.
	return (
		<>
			{modalIndex < lengthCards ? (
				<div className="modalBackground">
					<div className="modal d-flex justify-content-center" style={{ width: 600, height: 600 }}>
						{showBlack == false ? (
							<div className="modalImage">
								<img
									src={store.modalCards[modalIndex].imageUrl}
									style={{
										width: 800,
										height: 300
									}}
									onClick={() => {
										setShowBlack(!showBlack);
									}}
								/>
							</div>
						) : (
							<div
								className="blackout-modal"
								onClick={() => {
									setShowBlack(showBlack);
								}}>
								{" "}
							</div>
						)}
						<div className="modalText pl-5 pr-5">
							<p>{store.modalCards[modalIndex].text}</p>
						</div>

						<button
							className="startButton"
							onClick={() => {
								setModalIndex(modalIndex + 1);
							}}>
							{store.modalCards[modalIndex].button}
						</button>
					</div>
				</div>
			) : (
				<div className="modalBackground">
					<div className="modal d-flex justify-content-center" style={{ width: 600, height: 400 }}>
						<div className="modalText pl-5 pr-5">
							<p>{store.modalCards[modalIndex].text}</p>
						</div>
						<Link to="/profilepage">
							<button className="startButtonLast "> {store.modalCards[modalIndex].button}</button>
						</Link>
					</div>
				</div>
			)}
		</>
	);
};
