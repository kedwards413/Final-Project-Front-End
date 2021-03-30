import React, { useContext, useState } from "react";
import { TestimonialImageUpload } from "../views/TestimonialImageUpload";
import { Context } from "../store/appContext";
// import { Link } from "react-router-dom";
// import { Questions } from "../views/Questions";
// import { ModalQuestions } from "../views/ModalQuestions";
// import { ModalQuestionsProfilePage } from "../views/ModalQuestionsProfilePage";
import { Link } from "react-router-dom";
// import { TestimonialImageUpload } from "../views/TestimonialImageUpload";

export const TestimonialInput = () => {
	const [data, setData] = useState({
		testimony: ""
	});
	const { store, actions } = useContext(Context);
	const manageData = () => {
		actions.addingTestimonials(data);
		setData({ testimony: "" });
	};
	return (
		<>
			<video
				className="background-video-testimonial"
				src="https://v.ftcdn.net/04/16/79/96/700_F_416799623_wcATRIo0GBrACCOqJdFzEPxiB7tZfs2R_ST.mp4"
				loop
				autoPlay
			/>
			<div className="testimonial-input bg-white">
				<h1 className=" text-white testimonial-title2">Testimonial</h1>
				<input
					onChange={e => setData({ testimony: e.target.value })}
					value={data.testimony}
					className="testimonial-finalInput d-flex justify-content-center text-dark"
					style={{ width: 800, height: 300 }}
				/>{" "}
				<Link to="./testimonials" onClick={() => manageData()} className="uploadPhoto text-white ">
					Share with Us
				</Link>
				{/* <div className="profileTestimonialImage ">
					<TestimonialImageUpload />
				</div> */}
			</div>
		</>
	);
};
