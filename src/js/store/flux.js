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
					zip_code: "Fort Lauderdale, FL 33306",
					id: 0
				},
				{
					name: "Paolo Lucano",
					specialty: "Arachnaphobia",
					email: "plucano@gmail.com",
					phone_number: "786-931-8944",
					zip_code: "Aventura, FL 33160",
					id: 1
				},
				{
					name: "Marcelo Rigliano",
					specialty: "Cynophobia, Astraphobia",
					email: "marcelorig@gmail.com",
					phone_number: "305-548-8234",
					zip_code: "North Miami Beach, FL 33179",
					id: 2
				}
			],

			defaultProfileImg:
				"https://res.cloudinary.com/djqzyoj1p/image/upload/v1617208882/6525a08f1df98a2e3a545fe2ace4be47_hpwjnv.jpg",
			modalInfo: [],
			userTestimonials: [],
			account: [],
			// userLogin: true,
			currentPatient: {},
			currentTherapist: {},
			currentUser: [{}],
			token: "1234",
			profileImg: "",

			modalCards: [
				{
					title: "Arachnophobia",

					imageUrl:
						"https://images-fibreglast-com.s3.amazonaws.com/pio-resized/750/Single%20Stage%20Black%20Paint-5.jpg",
					text:
						"You're about to begin your journey. There will be missions you need to complete in order to be able to proceed to the next one. The missions will increase in difficulty. If at any time you feel uncomfortable because of an image, you can click on the image and it will blackout. When you're ready, you can continue. Click the arrow on the bottom right to begin your journey. ",
					button: ""
				},

				{
					title: "Arachnophobia",

					videoSrc: "https://www.youtube.com/embed/EcDVXeB_rY4",
					text:
						" A study has found that clips from “Spider-Man” were more effective at curing arachnophobia than footage of the real thing. It reduced participants’ fear-of-spiders by 20 percent. Caution: next missions will contain images of a spiders.",
					button: ""
				},

				{
					title: "Arachnophobia",

					imageUrl: "https://earthsky.org/upl/2015/10/peacock-spider-e1477522482238.jpg",
					text:
						"Each day, try to increase your time spent with this photograph. When you feel safe or comfortable enough, try touching the image. When you are ready, move on to the next mission.",

					button: ""
				},

				{
					title: "Arachnophobia",

					imageUrl: "https://i.etsystatic.com/12485742/r/il/a05d96/1930792067/il_1588xN.1930792067_e5li.jpg",
					text:
						"Once you have gotten used to looking at spider pictures, try upping the discomfort factor by holding a toy spider. You will probably feel discomfort, but as long as you don't feel completely overwhelmed, you should keep going",
					button: ""
				},
				{
					title: "Arachnophobia",

					imageUrl: "https://i.ytimg.com/vi/VxPW-QdEFlI/maxresdefault.jpg",
					text:
						"Visit a spider exhibit at the zoo or simply go to a pet store. Bring a friend if you need to. Observe the spider. Remember there's glass between the two of you and you're safe. ",
					button: ""
				},
				{
					title: "Arachnophobia",
					imageUrl:
						"https://www.treehugger.com/thmb/tWAdOxwdOwbAQ8Wy-smYRLz5T9A=/768x0/filters:no_upscale():max_bytes(150000):strip_icc()/__opt__aboutcom__coeus__resources__content_migration__mnn__images__2017__09__spiderweb-7ab384d6884b47fd97eaf5794652fd26.jpg",
					text:
						"Go outside and observe spiders. Stand at a comfortable distance. When you feel comfortable, take a step toward the spider. Repeat however many times you feel comfortable. "
				},
				{
					title: "Arachnophobia",

					imageUrl:
						"https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/common-house-spider-on-the-floor-in-a-home-royalty-free-image-1568322713.jpg?crop=1.00xw:0.752xh;0,0.173xh&resize=980:*",
					text:
						"When there is a spider around, don't automatically smash it, run away, or scream to someone else to kill it. Stand far away from it and keep looking at it until you feel less scared. ",
					button: ""
				},

				{
					title: "Arachnophobia",

					imageUrl:
						"https://www.treehugger.com/thmb/rF1w5nI5oe3RVhnOmO4YHwUF5rI=/5184x2606/filters:no_upscale():max_bytes(150000):strip_icc()/__opt__aboutcom__coeus__resources__content_migration__mnn__images__2015__10__spider-glass-03592d0b160c49f0a285c5f8d04ec137.jpg ",
					text:
						"If there is a spider in your house, attempt to catch it with a glass cup, then look at it. Look at the spider and stay there until you feel more comfortable and safe.",
					button: ""
				},
				{
					title: "Arachnophobia",

					imageUrl: "https://www.giantspiders.com/s/cc_images/teaserbox_2206604.jpg?t=1486460453",
					text:
						"If you have a friend with a pet spider, ask to view the spider with the top of the enclosure removed (provided this is safe, of course). Watch your friend feed and handle the spider.",
					button: ""
				},
				{
					title: "Arachnophobia",

					imageUrl:
						"http://schoolofbugs.com/wp-content/uploads/2019/10/person-holding-black-and-brown-tarantula-3672148-1024x576.jpg",
					text:
						"Increase your interaction with spiders. Touch a safe spider if you are feeling very confident. You could try to touch a non-aggressive spider, or you could go to a pet shop and request to hold one.",
					button: ""
				},
				{
					title: "Arachnophobia",
					text:
						"YOU DID IT! Congratulations! You've come closer than before to overcoming your fear. The more you expose yourself safely to your fears, the stronger you will feel knowing that fear cannot control you.",
					button: "Leave A Testimonial"
				}
			]
		},

		actions: {
			logout: () => {
				setStore({ token: null });
			},

			getModalCardsInfo: () => {
				fetch("", {
					method: "GET",
					headers: {
						"Content-Type": "application/json"
					}
				})
					.then(response => {
						if (!response.ok) {
							throw Error(response.statusText);
						}
						return response.json();
					})
					.then(response => setStore({ modalCards: response }))
					.catch(error => console.error("Error:", error));
			},
			// hardcodedId: id => {
			// 	setStore({ currentUser: [{ id: id }] });
			// },
			// hardcodedAddTherapist: therapist => {
			// 	setStore({ therapists: [...getStore().therapists, therapist] });
			// },
			// hardcodedTherapistsExtraInfo: (zipcode, id, phobia) => {
			// 	let filterTherapist = getStore().therapists.filter(therapist => {
			// 		return therapist.id !== id;
			// 	});
			// 	let singularTherapist = getStore().therapists.filter(therapist => {
			// 		return therapist.id == id;
			// 	});
			// 	singularTherapist[0].zip_code = zipcode;
			// 	singularTherapist[0].specialty = phobia;
			// 	setStore({ therapists: [filterTherapist, singularTherapist[0]] });
			// },
			// getInitialData: () => {
			// 	fetch("")
			// 		.then(function(response) {
			// 			if (!response.ok) {
			// 				throw Error(response.statusText);
			// 			}
			// 			// Read the response as json.
			// 			return response.json();
			// 		})
			// 		.then(function(responseAsJson) {
			// 			//setStore({ characters: responseAsJson.results });
			// 			setStore({ account: responseAsJson });
			// 			console.log(responseAsJson);
			// 		})
			// 		.catch(function(error) {
			// 			console.log("Looks like there was a problem: \n", error);
			// 		});
			// },
			addingModalInfo: info => {
				setStore({ modalInfo: [...getStore().modalInfo, info] });
			},
			addingTestimonials: testimony => {
				setStore({ testimonials: [...getStore().testimonials, testimony] });
			},

			// Use getActions to call a function within a fuction
			/**
					fetch().then().then(data => setStore({ "foo": data.bar }))
                */
			addTherapist: (phobia, zipcode) => {
				fetch("https://3000-pink-toad-rnysz19w.ws-us03.gitpod.io/" + "therapist", {
					method: "POST",
					body: JSON.stringify({
						user_id: getStore().currentUser.id,
						phobia: phobia,
						zipcode: zipcode
					}),

					headers: {
						"Content-Type": "application/json"
					}
				})
					.then(response => {
						if (!response.ok) {
							throw Error(response.statusText);
						}
						return response.json();
					})
					.then(response => setStore({ currenTherapist: response }))
					.catch(error => console.error("Error:", error));
			},

			addPatient: (phobia, severity, help, goal) => {
				fetch("https://3000-pink-toad-rnysz19w.ws-us03.gitpod.io/" + "patient", {
					method: "POST",
					body: JSON.stringify({
						user_id: getStore().currentUser.id,
						phobia: phobia,
						wishfearless: goal,
						previous_help: help,
						severity: severity
					}),
					headers: {
						"Content-Type": "application/json"
					}
				})
					.then(response => {
						if (!response.ok) {
							throw Error(response.statusText);
						}
						return response.json();
					})
					.then(response => {
						console.log(response);
						setStore({ currentPatient: response[0] });
					})
					//.then(response => console.log("Success:", JSON.stringify(response)))
					.catch(error => console.error("Error:", error));
			},
			userLogin: (userName, password) => {
				const store = getStore();
				const actions = getActions();
				fetch("https://3000-pink-toad-rnysz19w.ws-us03.gitpod.io/" + "login", {
					method: "POST",
					body: JSON.stringify({
						user_name: userName,
						password: password
					}), // data can be `string` or {object}!

					headers: {
						"Content-Type": "application/json"
					}
				})
					.then(response => response.json())
					.then(data => {
						console.log(data.currentUser);
						if (typeof data.access_token === "undefined") {
							console.log(data);
							return;
						} else {
							setStore({ token: data.access_token });
							setStore({ currentUser: data.currentUser });

							//actions.getImage();
							getActions().getInfoUserType(data.currentUser.id, data.currentUser.account_type);
						}
						console.log(store.currentUser);
						return response.json();
						//return data.json();
					})
					.catch(e => console.log(e));
			},

			getInfoUserType: (id, account_type) => {
				fetch(`https://3000-pink-toad-rnysz19w.ws-us03.gitpod.io/${account_type}/${id}`, {
					method: "GET",
					headers: {
						"Content-Type": "application/json"
					}
				})
					.then(response => {
						if (!response.ok) {
							throw Error(response.statusText);
						}
						return response.json();
					})
					.then(response => {
						console.log(response);
						if (account_type === "patient") setStore({ currentPatient: response[0] });
						else if (account_type === "therapist") setStore({ currentTherapist: response[0] });
					})
					//.then(response => console.log("Success:", JSON.stringify(response)))
					.catch(error => console.error("Error:", error));
			},
			addUser: (firstName, lastName, phone, email, userName, password, accountType) => {
				fetch("https://3000-pink-toad-rnysz19w.ws-us03.gitpod.io/" + "user", {
					method: "POST",
					body: JSON.stringify({
						first_name: firstName,
						last_name: lastName,
						phone_number: phone,
						email: email,
						user_name: userName,
						password: password,
						account_type: accountType
					}), // data can be `string` or {object}!

					headers: {
						"Content-Type": "application/json"
					}
				})
					.then(response => {
						if (!response.ok) {
							throw Error(response.statusText);
						}
						return response.json();
					})
					.then(response => {
						console.log(response);
						setStore({ currentUser: response });
					})
					.catch(error => console.error("Error:", error));

				//reset the global store
			},

			addTestimonial: data => {
				console.log("Data: ", data);
				fetch("https://3000-pink-toad-rnysz19w.ws-us03.gitpod.io/" + "user/" + getStore().currentUser.id, {
					method: "PUT",
					body: JSON.stringify({
						testimonial_desciption: data.testimony
					}),

					headers: {
						"Content-Type": "application/json"
					}
				})
					.then(response => {
						if (!response.ok) {
							throw Error(response.statusText);
						}
						return response.json();
					})
					.catch(error => console.error("Error:", error));
				return data.testimony;
			},

			getImage: () => {
				// we are about to send this to the backend.
				const store = getStore();
				fetch("https://3000-pink-toad-rnysz19w.ws-us03.gitpod.io/user/" + store.currentUser.id)
					.then(resp => resp.json())
					.then(data => setStore({ profileImg: data[0].profile_picture }))
					.catch(error => console.error("ERRORRRRRR!!!", error));
			},

			getTestimonials: () => {
				fetch("https://3000-pink-toad-rnysz19w.ws-us03.gitpod.io/user/testimonial")
					.then(resp => resp.json())
					.then(data => setStore({ userTestimonials: data }))
					.catch(error => console.error("ERRORRRRRR!!!", error));
			}
		}
	};
};

export default getState;
