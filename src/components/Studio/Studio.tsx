import React from "react";
import "./Studio.scss";
import StudioInfo from "../Studioinfo";
import StudioWork from "../StudioWork";

interface StudioProps {
  studioRef: React.MutableRefObject<null | HTMLDivElement>;
}

const Studio = ({ studioRef }: StudioProps) => {
  return (
    <>
      <div className="studio">
        <StudioInfo />
        <StudioWork studioRef={studioRef} />
      </div>
    </>
  );
};

export default Studio;
