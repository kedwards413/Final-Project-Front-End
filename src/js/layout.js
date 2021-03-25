import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import ScrollToTop from "./component/scrollToTop";

import { Home } from "./views/home";
import { Demo } from "./views/demo";
import { Single } from "./views/single";
import injectContext from "./store/appContext";

import { Modal } from "./views/Modal";
import { ProfilePage } from "./views/ProfilePage";
import { Questions } from "./views/Questions";
import { TherapistQuestions } from "./views/TherapistQuestions";
import { TherapistSubscribe } from "./views/TherapistSubscribe";
// import { ModalQuestions } from "./views/ModalQuestions";
// import { ModalQuestionsProfilePage } from "./views/ModalQuestionsProfilePage";

import { Navbar } from "./component/navbar";
import { Footer } from "./component/footer";
import { About } from "./component/About";
import { SignUp } from "./views/SignUp";
import { Login } from "./views/Login";
import { Testimonials } from "./component/Testimonials";
import { SearchBar } from "./component/SearchBar";
import { TestimonialInput } from "./views/TestimonialInput";
import { Profile } from "./views/Profile";
import { Articles } from "./views/Articles";

//create your first component
const Layout = () => {
	//the basename is used when your project is published in a subdirectory and not in the root of the domain
	// you can set the basename on the .env file located at the root of this project, E.g: BASENAME=/react-hello-webapp/
	const basename = process.env.BASENAME || "";

	return (
		<div className="d-flex flex-column">
			<BrowserRouter basename={basename}>
				<ScrollToTop>
					<Navbar />
					<Switch>
						{/* <Route exact path="/audio">
							<Component />
						</Route> */}
						<Route exact path="/">
							<Home />
						</Route>
						<Route exact path="/about">
							<About />
						</Route>
						<Route exact path="/demo">
							<Demo />
						</Route>
						<Route exact path="/searchbar">
							<SearchBar />
						</Route>
						<Route exact path="/login">
							<Login />
						</Route>
						<Route exact path="/articles">
							<Articles />
						</Route>
						<Route exact path="/searchbar">
							<SearchBar />
						</Route>
						<Route exact path="/testimonialinput">
							<TestimonialInput />
						</Route>
						<Route exact path="/patientquestionnaire">
							<Questions />
						</Route>
						<Route exact path="/testimonials">
							<Testimonials />
						</Route>
						<Route exact path="/therapistquestionnaire">
							<TherapistQuestions />
						</Route>
						<Route exact path="/therapistsubscribe">
							<TherapistSubscribe />
						</Route>
						<Route exact path="/modal">
							<Modal />
						</Route>

						{/* <Route exact path="/modalquestions">
							<ModalQuestions />
						</Route> */}
						<Route exact path="/profilepage">
							<ProfilePage />
							{/* <Modal
								text="
                            Congratulations on taking your first step to conquering your fear. There will be a series of
                            missions increasing in difficulty that will help you overcome your phobia. Visuals may
                            accompany some of the following steps, so if at anytime it gets to intense for you, click on
                            the button stop and the screen will black out. When youre ready, you can proceed."
								button="Start"
							/> */}
						</Route>

						<Route exact path="/signup">
							<SignUp />
						</Route>

						<Route exact path="/single/:theid">
							<Single />
						</Route>
						<Route>
							<h1>Not found!</h1>
						</Route>
					</Switch>
					<Footer />
				</ScrollToTop>
			</BrowserRouter>
		</div>
	);
};

export default injectContext(Layout);
