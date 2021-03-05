import React, { useState, useContext } from "react";
import PropTypes, { string } from "prop-types";
import { Context } from "../store/appContext";

export const Progress = () => {
	const { store, actions } = useContext(Context);
	console.log(store.modalInfo);
	const [state, setState] = useState(10);
	const isProgressing = store.modalInfo.map(item => item.checkboxes).includes("uncomfortable");

	return (
		<>
			<h2>{state == 100 ? `100% Complete!` : `${state}%`}</h2>
			<ProgressBar width={state} />
			<ProgressButton
				progress={state}
				makeProgress={() => {
					state < 100 ? setState(isProgressing && state + 40) : setState(0);
				}}
			/>
		</>
	);
};

const ProgressBar = ({ width }) => (
	<div className="outer" style={{ height: 50 }}>
		<div
			className="inner"
			style={{
				width: `${width}%`,
				height: 50
			}}
		/>
	</div>
);

const ProgressButton = ({ makeProgress, progress }) => (
	<button className="progressButton " onClick={makeProgress}>
		{progress == 100 ? " Yay! " : "Progress"}
	</button>
);
(ProgressBar.propTypes = {
	width: PropTypes.string
}),
	(ProgressButton.propTypes = {
		makeProgress: PropTypes.string,
		progress: PropTypes.string
	});
