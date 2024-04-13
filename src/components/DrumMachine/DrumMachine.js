"use client";
import React from "react";
import useSound from "use-sound";

import styles from "./DrumMachine.module.css";

const SOUND_SRC = "/909-drums.mp3";
import { VolumeContext } from "../Wrapper";
import { useContext } from "react";
function DrumMachine() {
  const [play] = useSound(SOUND_SRC, {
    sprite: {
      kick: [0, 350],
      hihat: [374, 160],
      snare: [666, 290],
      cowbell: [968, 200],
    },
    soundEnabled: true,
  });
  const { soundEnabled } = useContext(VolumeContext);
  return (
    <div className={styles.wrapper}>
      <button onClick={() => soundEnabled && play({ id: "kick" })}>Kick</button>
      <button onClick={() => soundEnabled && play({ id: "hihat" })}>Hat</button>
      <button onClick={() => soundEnabled && play({ id: "snare" })}>
        Snare
      </button>
      <button onClick={() => soundEnabled && play({ id: "cowbell" })}>
        Cowbell
      </button>
    </div>
  );
}

export default DrumMachine;
