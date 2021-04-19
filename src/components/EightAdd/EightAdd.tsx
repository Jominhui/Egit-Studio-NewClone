import React from "react";
import "./EightAdd.scss";

interface EightAddProps {}

const EightAdd = ({}: EightAddProps) => {
  return (
    <>
      <div className="eightAdd">
        <div className="eightAdd-area">
          <div className="eightAdd-area">
            <div className="eightAdd-area-name">에이트스튜디오</div>
            <hr />
            <div className="eightAdd-area-info">
              는 열정을 최우선으로 생각하며, 더 많은 도전에 가치를 두고
              있습니다.
              <br />
              함께 더 큰 컴퍼니로 성장해 나갈 여러분들을 기다리고 있습니다
            </div>
            <div className="eightacademy-text-btn">Download</div>
          </div>
        </div>
      </div>
    </>
  );
};

export default EightAdd;
