import React, { useState } from "react";

export const TestimonialImageUpload = () => {
	const [state, setState] = useState(null);

	return (
		<div>
			<button>
				<input
					type="file"
					className="custom-file-input text-black bg-light  d-flex justify-content-center"
					id="input"
					accept="image/*"
					onChange={event => setState(URL.createObjectURL(event.target.files[0]))}
					value=""
				/>{" "}
				Upload Image
			</button>

			{state && <button onClick={event => setState(null)}>Remove Image</button>}
			<img id="output" style={{ width: "50%" }} src={state} />
		</div>
	);
};
// export function ImageUpload() {
// 	const [state, setState] = useState(null);

// 	return (
// 		<div>
// 			<button>
// 				<input
// 					type="file"
// 					className="custom-file-input text-black bg-light  d-flex justify-content-center"
// 					style={{ width: 10, height: 8 }}
// 					id="input "
// 					accept="image/*"
// 					onChange={event => setState(URL.createObjectURL(event.target.files[0]))}
// 					value=""
// 				/>{" "}
// 				Upload Image
// 			</button>

// 			{state && (
// 				<button className="button-image " onClick={event => setState(null)}>
// 					Remove Image
// 				</button>
// 			)}
// 			<img id="output" style={{ width: "100%" }} src={state} />
// 		</div>
// 	);
// }
