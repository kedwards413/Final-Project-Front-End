import useSound from "use-sound";
import React, { useState, useEffect } from "react";
//include images into your bundle
import boopSfx from "../../img/sound.mp3";

export const Audio = () => {
	const [click, setClick] = useState(false);

	const [play, { stop }] = useSound(boopSfx, { volume: 0.5 });

	useEffect(
		() => {
			click ? play() : stop();
		},
		[click]
	);

	return <i className="fas fa-volume-down audioButton" loop onClick={() => setClick(!click)} />;
};

// New METHOD
// import React from "react";
// import { AudioPlayerProvider } from "react-use-audio-player";
// import { useAudioPlayer } from "react-use-audio-player";

// const App = () => {
// 	return (
// 		<AudioPlayerProvider>
// 			<AudioPlayer file="../../img/sound.mp3" />
// 		</AudioPlayerProvider>
// 	);
// };
// const AudioPlayer = ({ file }) => {
// 	const { togglePlayPause, ready, loading, playing } = useAudioPlayer({
// 		src: "../../img/sound.mp3",
// 		format: "mp3",
// 		autoplay: false
// 	});

// 	if (!ready && !loading) return <div>No audio to play</div>;
// 	if (loading) return <div>Loading audio</div>;

// 	return (
// 		<div>
// 			<button onClick={togglePlayPause}>{playing ? "Pause" : "Play"}</button>
// 		</div>
// 	);
// };
