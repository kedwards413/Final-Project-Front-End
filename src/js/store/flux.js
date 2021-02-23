import React from "react";

const getState = ({ getStore, getActions, setStore }) => {
	return {
		store: {
			modalInfo: [],

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
					imageURL: "https://i.pinimg.com/564x/1b/4f/bf/1b4fbfcafd649d3414f1a456e3565087.jpg",
					text:
						"You're about to begin your journey. There will be missions you need to complete in order to be able to proceed to the next one. The missions will increase in difficulty. If at any time you feel uncomfortable because of an image, you can click on the image and it will turn black. When you're ready you can continue. Caution: next card contains an image ",
					button: ""
				},
				{
					imageUrl: "https://s.hdnux.com/photos/01/13/13/45/19708276/8/rawImage.jpg",
					text:
						"The VAST majority of spiders are not harmful to humans. Instead their webs catch mosqitoes. Mosquitoes kill more humans than any other animal. When you are ready, press 'next' and you will begin your first mission",
					button: ""
				},

				{
					text:
						" Your first mission is to visit a spider exhibit at a zoo or go to a pet store and watch spiders in an enclosed space. They cannot touch you and will not hurt you. Stay calm and watch them for a bit. Bring a friend for emotional support. Remember to take deep breathes and close your eyes if you need to calm down.  Caution: next card contains an image",

					button: ""
				},

				{
					imageUrl:
						" http://home.bt.com/images/how-can-i-make-my-home-less-attractive-to-spiders-136421898964210401-171008113636.jpg",
					text:
						" It's time to take it a step further. Go outside and view a spider in it's natural habitat. Don't forget to take deep breathes. watch the spider and count your breathes. Repeat this mission as long as you feel comfortable.",
					button: ""
				},
				{
					imageUrl:
						"https://media.pri.org/s3fs-public/styles/story_main/public/widow_hand_SeanMcCann-625x450.jpg?itok=MiEpSGq3",
					text:
						"You've reached your last mission! Visit a friend that might have a spider or go to a spider exhibit and watch someone else handle a spider. Try to get as close as you comfortable can and stay for a few long breathes.",
					button: ""
				},
				{
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
