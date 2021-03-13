import React, { useState, useContext } from "react";
import "../../styles/home.scss";

import { Context } from "../store/appContext";
import { SearchResultCard } from "../component/SearchResultCard";

export const SearchBar = () => {
	const { store, actions } = useContext(Context);
	const [search, setSearch] = useState("");

	return (
		<div>
			<div className="float-left" style={{ width: "350px" }}>
				<form className="form-inline my-2 my-lg-0 m-4">
					<input
						onChange={e => setSearch(e.target.value)}
						type="text"
						className="form-control mr-sm-2"
						placeholder="Search Freelancers"
						aria-label="Search"
					/>
					{/* <button
						onClick={() => actions.login(jobs, freelancers, history)}
						className="btn btn-outline-primary my-2 my-sm-0"
						type="submit">
						Search
					</button> */}
				</form>
			</div>
			<div className="container">
				<div className="jumbotron jumbotron-fluid">
					<div className="container">
						<h1 className="display-5 m-3">Search results for Freelancers</h1>
						{store.therapists.map((item, index) => {
							if (
								search != "" &&
								(item.name.toLowerCase().includes(search.toLowerCase()) ||
									item.specialty.toLowerCase().includes(search.toLowerCase()) ||
									item.zip_code.toLowerCase().includes(search.toLowerCase()))
							) {
								return <SearchResultCard key={index} therapist={item} index={index} />;
							}
						})}
					</div>
				</div>
			</div>
		</div>
	);
};
