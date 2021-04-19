import React from "react";
import "./Main.scss";
import EightMain from "../EightMain";
import EightInfo from "../EightInfo";
import EightAcademy from "../EightAcademy";
import EightAdd from "../EightAdd";

interface MainProps {}

const Main = ({}: MainProps) => {
  return (
    <>
      <div className="main">
        <EightMain />
        <EightInfo />
        <EightAcademy />
        <EightAdd />
      </div>
    </>
  );
};

export default Main;
