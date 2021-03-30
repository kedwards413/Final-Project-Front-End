// import React, { useState } from "react";

// export const TestimonialImageUpload = () => {
// 	const [state, setState] = useState(null);

// 	return (
// 		<>
// 			<button style={{ marginLeft: 800, height: 40, width: 120 }}>
// 				<input
// 					type="file"
// 					className="custom-file-input text-black bg-light  d-flex justify-content-center"
// 					id="input"
// 					accept="image/*"
// 					onChange={event => setState(URL.createObjectURL(event.target.files[0]))}
// 					value=""
// 				/>{" "}
// 				Upload Image
// 			</button>

// 			{state && <button onClick={event => setState(null)}>Remove Image</button>}
// 			<img id="output" style={{ width: "50%" }} src={state} />
// 		</>
// 	);
// };
