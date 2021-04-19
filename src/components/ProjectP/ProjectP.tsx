import React from "react";
import "./ProjectP.scss";

interface ProjectPProps {}

const ProjectP = ({}: ProjectPProps) => {
  return (
    <>
      <div className="projectp">
        <div className="projectp-textcontent">
          <div className="projectp-textcontent-area">
            <div className="projectp-textcontent-area-title">Project P</div>
            <div className="projectp-textcontent-area-info">
              신비롭고 거대한 화원.
              <br />
              아름답고 달콤한 꽃과 식물이 우거져 그저 신비로운
              <br />
              이곳이지만, 화원의 그늘에서는 눈이 충혈된 토끼와
              <br />
              기괴한 벌레들이 나타납니다.
              <br />
              사실은 하트 여왕에 의해 지배당하고, 저주로 인해 괴물로 변하는 세계
              <br />
              화원 속 주민들의 해방을 위해선 하트의
              <br />
              여왕을 왕좌에서 끌어내려야 합니다.
              <br />
              여왕으로부터 잃어버린 화원을 되찾을 수 있을까요?
            </div>
          </div>
        </div>
        <div className="projectp-viewcontent"></div>
      </div>
    </>
  );
};

export default ProjectP;
