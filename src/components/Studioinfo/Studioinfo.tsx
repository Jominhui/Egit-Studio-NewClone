import React from "react";
import "./Studioinfo.scss";

interface StudioinfoProps {}

const Studioinfo = ({}: StudioinfoProps) => {
  return (
    <>
      <div className="studioinfo">
        <div className="studioinfo-area">
          <div className="studioinfo-area-name">ILLUSTRAION STUDIO</div>
          <div className="studioinfo-area-title">
            일러스트 스튜디오에서는 컨셉 게임 캐릭터
            <br />
            제작, 기획의 시각화를 진행합니다.
          </div>
          <hr />
          <div className="studioinfo-area-info">
            다수의 게임사들과 파트너쉽을 통해 최상의 그래픽 서비스를 제공하고
            있습니다.
          </div>
          <div className="studioinfo-area-btn">REQUEST</div>
        </div>
        <div className="studioinfo-list">
          <div className="studioinfo-list-content">
            <div className="studioinfo-list-content-title">ART DIRECTING</div>
            <div className="studioinfo-list-content-info">
              아웃소싱 계약, 작가 관리, 매니징 및<br />
              아트디렉션을 진행합니다.
            </div>
          </div>

          <div className="studioinfo-list-content">
            <div className="studioinfo-list-content-title">
              ILLUSTRAION RESOURCE
            </div>
            <div className="studioinfo-list-content-info">
              컨셉 게임 캐릭터의 원화, 일러스트,
              <br />
              리소스 등 기획의 시각화를 진행합니다.
            </div>
          </div>

          <div className="studioinfo-list-content">
            <div className="studioinfo-list-content-title">GRAPHIC PROCESS</div>
            <div className="studioinfo-list-content-info">
              체계적인 프로세스를 통해 <br />
              최상의 그래픽 서비스를 제공합니다.
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Studioinfo;
