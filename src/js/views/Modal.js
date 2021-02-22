import React, { useContext, useState } from "react";
import { Link } from "react-router-dom";
import { ModalQuestions } from "../views/ModalQuestions";
// import phobia from "../../img/phobia.png";

import { Context } from "../store/appContext";
export const Modal = () => {
	const { store, action } = useContext(Context);
	const [modalIndex, setModalIndex] = useState(0);
	const [showImage, setShowImageBlack] = useState(false);
	const [showText, setShowTextBlack] = useState(true);
	var lengthCards = store.modalCards.length - 1;

	return (
		<>
			{modalIndex < lengthCards ? (
				<div className="modalBackground ">
					<div className="modal  " style={{ width: 600, height: 600 }}>
						{store.modalCards[modalIndex].imageUrl == undefined ? null : showImage == false ? (
							<div className="modalImage">
								<img
									src={store.modalCards[modalIndex].imageUrl}
									style={{
										width: 800,
										height: 300
									}}
									onClick={() => {
										setShowImageBlack(!showImage);
										setShowTextBlack(!showText);
									}}
								/>
							</div>
						) : (
							<ModalQuestions />
						)}
						{showText && <p className="modalText pl-5 pr-5">{store.modalCards[modalIndex].text}</p>}
						<i
							className="arrowIcon fas fa-arrow-right
							startButton mb-3"
							style={{ color: "rgb(172, 170, 170)" }}
							onClick={() => {
								setModalIndex(modalIndex + 1);
							}}>
							{store.modalCards[modalIndex].button}
						</i>
					</div>
				</div>
			) : (
				<div className="modalBackground">
					<div className="modal " style={{ width: 600, height: 600 }}>
						<div className="modalText2 pl-5 pr-5">
							<p>{store.modalCards[modalIndex].text}</p>
						</div>
						<Link to="/profilepage">
							<button className="seeProgressButton mb-4"> {store.modalCards[modalIndex].button}</button>
						</Link>
					</div>
				</div>
			)}
		</>
	);
};
