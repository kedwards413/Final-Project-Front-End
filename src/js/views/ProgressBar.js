import React, { useState } from "react";
import PropTypes, { string } from "prop-types";

export const Progress = () => {
	const [state, setState] = useState(10);
	return (
		<>
			<h2>{state == 100 ? `100% Complete!` : `${state}%`}</h2>
			<ProgressBar width={state} />
			<ProgressButton
				progress={state}
				makeProgress={() => {
					state < 100 ? setState(state + 10) : setState(0);
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
