import React from "react";
import "./ProjectS.scss";

interface ProjectSProps {}

const ProjectS = ({}: ProjectSProps) => {
  return (
    <>
      <div className="projects">
        <div className="projects-textcontent">
          <div className="projects-textcontent-area">
            <div className="projects-textcontent-area-title">Project S</div>
            <div className="projects-textcontent-area-info">
              돌연 유리조각처럼 산산히 부서져 버린 하늘.
              <br />
              무너진 하늘은 파편이 되어 지상을 향해 쏟아져 내리고,
              <br />
              사람들은 이를 재앙이라 부르며 지옥같은 하루하루를 보내기
              시작합니다.
              <br />
              어두운 재앙이 쏟아지는 세계에서 자아를 잃어버리는 사람들.
              <br />그 속에서 운명을 이끌 한 마법사의 여정이 지금 시작됩니다.
            </div>
          </div>
        </div>
        <div className="projects-viewcontent"></div>
      </div>
    </>
  );
};

export default ProjectS;
