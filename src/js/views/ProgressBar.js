// import React, { useState } from "react";
// import PropTypes, { string } from "prop-types";

// export const Progress = () => {
// 	const [state, setState] = useState(10);
// 	return (
// 		<>
// 			<h2>{state == 100 ? `100% Complete!` : `${state}%`}</h2>
// 			<ProgressBar width={state} />
// 			<ProgressButton
// 				progress={state}
// 				makeProgress={() => {
// 					state < 100 ? setState(state + 10) : setState(0);
// 				}}
// 			/>
// 		</>
// 	);
// };

// const ProgressBar = ({ width }) => (
// 	<div className="outer">
// 		<div
// 			className="inner"
// 			style={{
// 				width: `${width}%`
// 			}}
// 		/>
// 	</div>
// );

// const ProgressButton = ({ makeProgress, progress }) => (
// 	<button onClick={makeProgress}>{progress == 100 ? " Yay! " : "Progress"}</button>
// );
// Progress.propTypes = {
// 	width: PropTypes.number,
// 	makeProgress: string,
// 	progress: string
// };
