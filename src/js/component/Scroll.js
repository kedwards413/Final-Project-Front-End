// import React from "react";
// import { About } from "../component/About";

// export function Scroll() {
// 	const about = React.useRef(null);
// 	const scrollToBottom = () => {
// 		about.current.scrollIntoView({
// 			behavior: "smooth",
// 			block: "nearest",
// 			inline: "start"
// 		});
// 	};

// 	React.useEffect(
// 		() => {
// 			if (about.current) {
// 				scrollToBottom();
// 			}
// 		},
// 		[about]
// 	);

// 	return (
// 		// Page is overflowing, set height to mimic a full page
// 		<div className="App" style={{ marginTop: 70, height: 800 }}>
// 			{/* now set this div to overflow scroll with a small height */}
// 			<div style={{ overflowY: "scroll", border: "solid" }}>
// 				<div ref={about} />
// 			</div>

// 			{/* Set last element within this div to be the ref to scroll to */}
// 			<About />
// 		</div>
// 	);
// }
