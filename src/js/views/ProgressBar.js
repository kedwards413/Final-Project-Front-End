import React, { useState, useContext, useEffect } from "react";
import PropTypes, { string } from "prop-types";
import { Context } from "../store/appContext";

export const Progress = () => {
	const { store, actions } = useContext(Context);

	const [state, setState] = useState(0);
	var d = new Date();
	var month = d.getUTCMonth() + 1;
	var day = d.getUTCDate();
	var year = d.getUTCFullYear();
	var a = month + "/" + day + "/" + year;
	const progress = store.modalInfo.filter(item => item.checkboxes == "neutral");
	console.log(progress);
	const handleProgress = () => {
		console.log(store.modalInfo);
		console.log("state:", state);
		if (progress.length == 1) setState(33);
		if (progress.length == 2) setState(66);
		if (progress.length == 3) setState(99);
	};
	useEffect(() => {
		handleProgress();
	}, []);

	return (
		<>
			<h2>{state == 99 ? `100% Complete!` : `${state}%`}</h2>
			<ProgressBar width={state} />
			<ProgressButton progress={state} makeProgress={handleProgress} />
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
		{progress == 99 ? " Yay! " : "Progress"}
	</button>
);
(ProgressBar.propTypes = {
	width: PropTypes.string
}),
	(ProgressButton.propTypes = {
		makeProgress: PropTypes.string,
		progress: PropTypes.string
	});
