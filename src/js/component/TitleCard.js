import React from "react";
import { Link } from "react-router-dom";
import { Testimonials } from "./Testimonials";

export const TitleCard = () => {
	return (
		<>
			<div className="phobias-title d-flex justify-content-center ml-5 mt-3 ">
				<p className="part-title mt-4">face your </p>
				<span className="phobia-name ml-3 mr-3"> PHOBIAS</span>
				<p className="part-title mt-4">and be set free</p>
			</div>
			<div className="first-row  d-flex space-between">
				<div className="card d-flex flex-md-row mb-5 text-center" style={{ width: 400, height: 200 }}>
					<div className="card-body ">
						<Link to="/demo">
							<h5 className="card-title text-dark mt-5">Arachnophobia</h5>
							<h6 className="card-subtitle mb-2 text-muted ">FEAR OF HEIGHTS</h6>
						</Link>
					</div>
				</div>
				<div className="card d-flex flex-md-row text-center" style={{ width: 400, height: 200 }}>
					<div className="card-body">
						<Link to="/demo">
							<h5 className="card-title  text-dark mt-5">Acrophobia</h5>
							<h6 className="card-subtitle mb-2 text-muted">FEAR OF HEIGHTS</h6>
						</Link>
					</div>
				</div>
				<div className="card d-flex flex-md-row text-center" style={{ width: 400, height: 200 }}>
					<div className="card-body">
						<Link to="/demo">
							<h5 className="card-title  mt-5 text-dark">Claustrophobia</h5>
							<h6 className="card-subtitle mb-2 text-muted">FEAR OF ENCLOSED SPACES</h6>
						</Link>
					</div>
				</div>
			</div>

			<div className="second-row  d-flex space-between">
				<div className="card d-flex flex-md-row text-center" style={{ width: 400, height: 200 }}>
					<div className="card-body">
						<Link to="/demo">
							<h5 className="card-title  mt-5 text-dark">Social phobia</h5>
							<h6 className="card-subtitle mb-2 text-muted">FEAR OF SOCIAL INTERACTION</h6>
						</Link>
					</div>
				</div>
				<div className="card d-flex flex-md-row text-center" style={{ width: 400, height: 200 }}>
					<div className="card-body">
						<Link to="/demo">
							<h5 className="card-title mt-5 text-dark"> Cynophobia</h5>
							<h6 className="card-subtitle mb-2 text-muted">FEAR OF DOGS</h6>
						</Link>
					</div>
				</div>
				<div className="card d-flex flex-md-row text-center" style={{ width: 400, height: 200 }}>
					<div className="card-body">
						<Link>
							<h5 className="card-title mt-5 text-dark">Astraphobia</h5>
							<h6 className="card-subtitle mb-2 text-muted">FEAR OF THUNDER AND LIGHTENING</h6>
						</Link>
					</div>
				</div>
			</div>
			<Testimonials />
		</>
	);
};