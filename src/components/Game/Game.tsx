import React from "react";
import "./Game.scss";
import Pitzmaker from "../Pitzmaker";
import Sorcerytale from "../Sorcerytale";
import ProjectP from "../ProjectP";
import ProjectS from "../ProjectS";

interface GameProps {
  gameRef: React.MutableRefObject<null | HTMLDivElement>;
}

const Game = ({ gameRef }: GameProps) => {
  return (
    <>
      <div className="game" ref={gameRef}>
        <Pitzmaker />
        <Sorcerytale />
        <ProjectP />
        <ProjectS />
      </div>
    </>
  );
};

export default Game;
