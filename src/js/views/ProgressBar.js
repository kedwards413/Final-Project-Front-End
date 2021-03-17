import React, { useState, useContext } from "react";
import PropTypes, { string } from "prop-types";
import { Context } from "../store/appContext";

export const Progress = () => {
	// 	const { store, actions } = useContext(Context);
	// 	// console.log(store.modalInfo);
	// 	const [state, setState] = useState(0);
	// 	const isProgressing = store.modalInfo.map(item => item.checkboxes).includes("neutral");

	// 	// console.log(isProgressing);
	// 	return (
	// 		<>
	// 			<h2>{state == 99 ? `100% Complete!` : `${state}%`}</h2>
	// 			<ProgressBar width={state} />
	// 			<ProgressButton
	// 				progress={state}
	// 				makeProgress={() => {
	// 					let n = 0;
	// 					for (let i = 0; i < store.modalInfo.length; i++) {
	// 						if (store.modalInfo[i].checkboxes == "neutral") {
	// 							n++;
	// 						}
	// 					}

	// 					state < 99 ? setState(isProgressing ? 33 * n : 0) : setState(0);
	// 				}}
	// 			/>
	// 		</>
	// 	);
	// };

	// const ProgressBar = ({ width }) => (
	// 	<div className="outer" style={{ height: 50 }}>
	// 		<div
	// 			className="inner"
	// 			style={{
	// 				width: `${width}%`,
	// 				height: 50
	// 			}}
	// 		/>
	// 	</div>
	// );

	// const ProgressButton = ({ makeProgress, progress }) => (
	// 	<button className="progressButton " onClick={makeProgress}>
	// 		{progress == 99 ? " Yay! " : "Progress"}
	// 	</button>
	// );
	// (ProgressBar.propTypes = {
	// 	width: PropTypes.string
	// }),
	// 	(ProgressButton.propTypes = {
	// 		makeProgress: PropTypes.string,
	// 		progress: PropTypes.string
	// 	});

	// import React, { useState, useContext, useEffect } from "react";
	// import PropTypes, { string } from "prop-types";
	// import { Context } from "../store/appContext";
	// export const Progress = () => {
	const { store, actions } = useContext(Context);

	const [state, setState] = useState(0);
	var d = new Date();
	var month = d.getUTCMonth() + 1;
	var day = d.getUTCDate();
	var year = d.getUTCFullYear();
	var a = month + "/" + day + "/" + year;
	const progress = store.modalInfo.map(item => item.checkboxes).includes(`neutral - ${a}`);
	const handleProgress = () => {
		console.log(store.modalInfo);
		console.log("state:", state);
		setState(previous => (state < 99 && progress ? previous + 33 : 0));
	};

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
