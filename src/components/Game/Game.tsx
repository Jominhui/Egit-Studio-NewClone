import React from "react";
import "./Game.scss";
import Pitzmaker from "../Pitzmaker";
import Sorcerytale from "../Sorcerytale";
import ProjectP from "../ProjectP";
import ProjectS from "../ProjectS";

interface GameProps {}

const Game = ({}: GameProps) => {
  return (
    <>
      <div>
        <Pitzmaker />
        <Sorcerytale />
        <ProjectP />
        <ProjectS />
      </div>
    </>
  );
};

export default Game;
