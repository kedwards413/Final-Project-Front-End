import React, { useState } from "react";
import { Link } from "react-router-dom";

export const Testimonials = () => {
	const [x, setX] = useState(0);
	let testimonialArr = [
		//components from profile uploading testimonial? not hard coded
		<img
			key={1}
			style={{ height: 200 }}
			src="https://images.unsplash.com/photo-1507525428034-b723cf961d3e?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=1000&q=80"
		/>,

		<img
			key={2}
			style={{ height: 200 }}
			src="https://images.unsplash.com/photo-1490730141103-6cac27aaab94?ixid=MXwxMjA3fDB8MHxzZWFyY2h8MXx8ZnJlZXxlbnwwfHwwfA%3D%3D&ixlib=rb-1.2.1&w=1000&q=80"
		/>,
		<img
			key={3}
			style={{ height: 200 }}
			src="https://i2.wp.com/digital-photography-school.com/wp-content/uploads/2019/05/joseph-barrientos-49318-unsplash-e1558728034701.jpg?resize=1500%2C1000&ssl=1"
		/>,
		<img
			key={4}
			style={{ height: 200 }}
			src="https://images.unsplash.com/photo-1498550744921-75f79806b8a7?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=80"
		/>
	];

	const goLeft = () => {
		x === 0 ? setX(-100 * testimonialArr.length - 1) : setX(x + 100);
	};
	const goRight = () => {
		x === -100 * testimonialArr.length - 1 ? setX(0) : setX(x - 100);
	};
	return (
		<>
			<div className="test-bg">
				<div className="testimonial-title  d-flex justify-content-center  ">Testimonials</div>
				<div className="testimonial-title-background">
					<div className="testimonials ">
						{testimonialArr.map((item, i) => {
							return (
								<div key={i} className="arr " style={{ transform: `translateX(${x}%)` }}>
									{item}

									<p className=" testimonial-text pt-3 pl-3 pb-4 pr-2">
										EXAMPLE QUOTES WOULD NOT HARD CODED HOW DO WE IMPORT IMAGE AND QUOTE FROM
										SUBMITTING TESTIMONIAL. FOR IMAGES WE NEED TO HAVE A PREDETERMINED SIZE FOR
										IMAGE. AND WORD LIMIT. COOL
									</p>
								</div>
							);
						})}

						<button className="leftButton" onClick={goLeft}>
							<i className="fas fa-chevron-left" />
						</button>
						<button className="rightButton" onClick={goRight}>
							<i className="fas fa-chevron-right" />
						</button>
					</div>
				</div>
			</div>
		</>
	);
};
