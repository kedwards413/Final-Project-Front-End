import React, { useState } from "react";

export function App() {
	const [state, setState] = useState(null);

	return (
		<div>
			<input
				type="file"
				className="custom-file-input "
				id="input "
				accept="image/*"
				onChange={event => setState(URL.createObjectURL(event.target.files[0]))}
				value=""
			/>

			{state && (
				<button className="button-image " onClick={event => setState(null)}>
					Remove Image
				</button>
			)}
			<img id="output" style={{ width: "100%" }} src={state} />
		</div>
	);
}
