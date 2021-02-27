const getState = ({ getStore, getActions, setStore }) => {
	return {
		store: {
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



export default getState;
