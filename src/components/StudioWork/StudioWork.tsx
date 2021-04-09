import React from "react";
import "./StudioWork.scss";
import Studio from "../../models/Studio";

interface StudioWorkProps {
  studioRef: React.MutableRefObject<null | HTMLDivElement>;
}

const StudioWork = ({ studioRef }: StudioWorkProps) => {
  return (
    <>
      <div className="studioWork">
        <div className="studioWork-title">Art Wroks</div>
        <div className="studioWork-list" ref={studioRef}>
          {Studio.map((res, idx) => (
            <div
              key={idx}
              className="studioWork-list-content"
              style={
                res.position === "left"
                  ? { justifyContent: "flex-start" }
                  : { justifyContent: "flex-end" }
              }
            >
              <img src={res.studio} />
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default StudioWork;
