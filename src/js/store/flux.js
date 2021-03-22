import React from "react";

const getState = ({ getStore, getActions, setStore }) => {
	return {
		store: {
			modalInfo: [],

			account: [],
			userLogin: false,
			currentUser: [{}],
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


			// Use getActions to call a function within a fuction

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
					.then(response => setStore({ currentUser: response }))
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
					.then(response => console.log("Success:", JSON.stringify(response)))
					.catch(error => console.error("Error:", error));
            },
            userLogin: (userName, password) => {
				fetch("https://3000-pink-toad-rnysz19w.ws-us03.gitpod.io/" + "user", {
					method: "POST",
					body: JSON.stringify({
						
						user_name: userName,
						password: password
						
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
					.then(response => setStore({ currentUser: response }))
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
					.then(response => setStore({ currentUser: response }))
					.catch(error => console.error("Error:", error));


				//reset the global store
			
			}
		}
	};
};

export default getState;
