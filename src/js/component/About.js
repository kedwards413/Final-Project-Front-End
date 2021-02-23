import React, { useRef } from "react";

export const About = () => {
	//     const Field = ({ ... }: FieldProps) => {
	//   const fieldRef = React.useRef<HTMLInputElement>(null);
	//   return (
	//     <div className="field" ref={fieldRef}>
	//       ...
	//     </div>
	//   );
	// };
	const titleRef = useRef();
	return (
		<>
			{" "}
			<div>
				<h1 className="aboutTitle"> Our Story </h1>
				<p className="aboutText ">
					fearLESS was designed to help people overcome their phobia through exposure therapy. Users will
					complete a series of missions that increase in difficulty with each step. When the user has finished
					all the missions, they will have the option to connect with a therapist online through the fearLESS
					platform to continue their progress and discuss next steps.
				</p>
			</div>
		</>
	);
};
