import useSound from "use-sound";
import React, { useState } from "react";
//include images into your bundle
import boopSfx from "../../img/sound.mp3";

export const Audio = () => {
	// const [click, setClick] = useState(true);

	const [play] = useSound(boopSfx, { volume: 0.1 });

	return <i className="fas fa-volume-down audioButton" onClick={play} />;

	// onClick={() => (click ? { play } : setClick(!click))} />;
};
