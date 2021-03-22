import React from "react";
import { Video } from "../component/Video";

const getState = ({ getStore, getActions, setStore }) => {
	return {
		store: {
			therapists: [
				{
					name: "George Mihov",
					specialty: "Agoraphobia, Social Phobia",
					email: "gmihov@gmail.com",
					phone_number: "954-438-4995",
					zip_code: "33306"
				},
				{
					name: "Paolo Lucano",
					specialty: "Arachnaphobia",
					email: "plucano@gmail.com",
					phone_number: "786-931-8944",
					zip_code: "33160"
				},
				{
					name: "Marcelo Rigliano",
					specialty: "Cynophobia, Astraphobia",
					email: "marcelorig@gmail.com",
					phone_number: "305-548-8234",
					zip_code: "33179"
				}
			],
			modalInfo: [],
			testimonials: [],

			demo: [
				{
					title: "FIRST",
					background: "white",
					initial: "white"
				},
				{
					title: "SECOND",
					background: "white",
					initial: "white"
				}
			],
			modalCards: [
				{
					title: "Arachnophobia",
					imageUrl:
						"https://images.unsplash.com/photo-1506747958701-808cb3805b0f?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1651&q=80",
					text:
						"You're about to begin your journey. There will be missions you need to complete in order to be able to proceed to the next one. The missions will increase in difficulty. If at any time you feel uncomfortable because of an image, you can click on the image and it will blackout. When you're ready, you can continue. Click the arrow on the bottom to begin your journey. ",
					button: ""
				},
				{
					title: "Arachnophobia",
					// imageUrl: "https://s.hdnux.com/photos/01/13/13/45/19708276/8/rawImage.jpg",
					text:
						" Spiders save us from the world’s deadliest animal. They mostly eat insects, which helps control their populations. Their webs are particularly adept at catching small flying insects such as mosquitos. Worldwide, mosquito-borne viruses kill more humans than any other animal. Caution: next mission will contain an image of spiders. Feel free to click on the image to black them out.  ",
					button: ""
				},

				{
					title: "Arachnophobia",
					imageUrl: "https://earthsky.org/upl/2015/10/peacock-spider-e1477522482238.jpg",
					text:
						"Each day, try to increase your time spent with the photograph. When you feel safe or comfortable enough, try touching the image. When you are ready, move on to the next mission.",

					button: ""
				},

				{
					title: "Arachnophobia",
					videoSrc: "https://www.youtube.com/embed/EcDVXeB_rY4",
					text:
						" A study has found that clips from “Spider-Man” were more effective at curing arachnophobia than footage of the real thing. It reduced participants’ fear-of-spiders by 20 percent.",
					button: ""
				},
				{
					title: "Arachnophobia",
					imageUrl:
						"https://media.pri.org/s3fs-public/styles/story_main/public/widow_hand_SeanMcCann-625x450.jpg?itok=MiEpSGq3",
					text:
						"You've reached your last mission! Visit a friend that might have a spider or go to a spider exhibit and watch someone else handle a spider. Try to get as close as you comfortable can and stay for a few long breathes.",
					button: ""
				},
				{
					title: "Arachnophobia",
					imageURL: "https://i.pinimg.com/564x/1b/4f/bf/1b4fbfcafd649d3414f1a456e3565087.jpg",
					text:
						"You're about to begin your journey. There will be missions you need to complete in order to be able to proceed to the next one. The missions will increase in difficulty. If at any time you feel uncomfortable because of an image, you can click on the image and it will turn black. When you're ready you can continue. Caution: next card contains an image ",
					button: ""
				},
				{
					title: "Arachnophobia",
					imageUrl: "https://s.hdnux.com/photos/01/13/13/45/19708276/8/rawImage.jpg",
					text:
						"The VAST majority of spiders are not harmful to humans. Instead their webs catch mosqitoes, which kill more humans than any other animal.  When you are ready, press 'next' and you will begin your first mission",
					button: ""
				},

				{
					title: "Arachnophobia",
					text:
						" Your first mission is to visit a spider exhibit at a zoo or go to a pet store and watch spiders in an enclosed space. They cannot touch you and will not hurt you. Stay calm and watch them for a bit. Bring a friend for emotional support. Remember to take deep breathes and close your eyes if you need to calm down.  Caution: next card contains an image",

					button: ""
				},

				{
					title: "Arachnophobia",
					imageUrl:
						" http://home.bt.com/images/how-can-i-make-my-home-less-attractive-to-spiders-136421898964210401-171008113636.jpg",
					text:
						" It's time to take it a step further. Go outside and view a spider in it's natural habitat. Don't forget to take deep breathes. watch the spider and count your breathes. Repeat this mission as long as you feel comfortable.",
					button: ""
				},
				{
					title: "Arachnophobia",
					imageUrl:
						"https://media.pri.org/s3fs-public/styles/story_main/public/widow_hand_SeanMcCann-625x450.jpg?itok=MiEpSGq3",
					text:
						"You've reached your last mission! Visit a friend that might have a spider or go to a spider exhibit and watch someone else handle a spider. Try to get as close as you comfortable can and stay for a few long breathes.",
					button: ""
				},
				{
					title: "Arachnophobia",
					text:
						"YOU DID IT! Congratulations! You've come closer than before to overcoming your fear. The more you expose yourself safely to your fears, the stronger you will feel knowing that fear cannot control you. Press the button and sign up for a free one-time session with a therapist! ",
					button: "see your progress"
				}
			]
		},

		actions: {
			addingModalInfo: info => {
				setStore({ modalInfo: [...getStore().modalInfo, info] });
			},

			addingTestimonials: testimony => {
				setStore({ testimonials: [...getStore().testimonials, testimony] });
			},

			// Use getActions to call a function within a fuction
			exampleFunction: () => {
				getActions().changeColor(0, "green");
			},
			loadSomeData: () => {
				/**
			account: []
		},
		actions: {
			getInitialData: () => {
				fetch("")
					.then(function(response) {
						if (!response.ok) {
							throw Error(response.statusText);
						}
						// Read the response as json.
						return response.json();
					})
					.then(function(responseAsJson) {
						//setStore({ characters: responseAsJson.results });
						setStore({ account: responseAsJson });
						console.log(responseAsJson);
					})
					.catch(function(error) {
						console.log("Looks like there was a problem: \n", error);
					});
			}
		},
		addAccount: accountToAdd => {
			const tempStore = getStore();
			console.log(accountToAdd);
			fetch("", {
				method: "POST",
				headers: {
					"Content-Type": "application/json"
				},
				body: JSON.stringify(accountToAdd)
			})
				.then(response => response.json())
				.then(() => {
					getActions().getInitialData();
				});
		},
		// Use getActions to call a function within a fuction
		exampleFunction: () => {
			getActions().changeColor(0, "green");
		},
		loadSomeData: () => {
			/**
					fetch().then().then(data => setStore({ "foo": data.bar }))
				*/
			},
			changeColor: (index, color) => {
				//get the store
				const store = getStore();

				//we have to loop the entire demo array to look for the respective index
				//and change its color
				const demo = store.demo.map((elm, i) => {
					if (i === index) elm.background = color;
					return elm;
				});

				//reset the global store
				setStore({ demo: demo });
			}
		}
	};
};

export default getState;
