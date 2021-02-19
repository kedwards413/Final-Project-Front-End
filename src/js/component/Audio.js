import useSound from "use-sound";
import React, { useState } from "react";
//include images into your bundle
import boopSfx from "../../img/sound.mp3";

export const Audio = () => {
	// const [click, setClick] = useState(true);

	const [play] = useSound(boopSfx, { volume: 0.5 });

	return <button style={{ width: 100 }} onClick={play} />;

	// onClick={() => (click ? { play } : setClick(!click))} />;
};
