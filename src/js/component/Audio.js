import useSound from "use-sound";
import React from "react";
//include images into your bundle
import boopSfx from "../../img/sound.mp3";

export const Audio = () => {
	const [play] = useSound(boopSfx, { volume: 0.01 });

	return <button onClick={play}>Boop!</button>;
};
