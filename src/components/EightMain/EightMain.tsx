import React from "react";
import "./EightMain.scss";
import EightLogo from "../../assets/images/main/eightLogo.svg";

interface EightMainProps {}

const EightMain = ({}: EightMainProps) => {
  return (
    <>
      <div className="eightmain">
        <div className="eightmain-area">
          <img src={EightLogo} className="eightmain-area-logo" />
        </div>
      </div>
    </>
  );
};

export default EightMain;
