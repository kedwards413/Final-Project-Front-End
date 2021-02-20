import useSound from "use-sound";
import React, { useState } from "react";
//include images into your bundle
import boopSfx from "../../img/sound.mp3";

export const Audio = () => {
	// const [click, setClick] = useState(true);

	const [play] = useSound(boopSfx, { volume: 0.5 });

	return <i className="far fa-play-circle audioButton" onClick={play} />;

	// onClick={() => (click ? { play } : setClick(!click))} />;
};
