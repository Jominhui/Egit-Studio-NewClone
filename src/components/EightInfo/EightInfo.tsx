import React from "react";
import "./EightInfo.scss";

interface EightInfoProps {}

const EightInfo = ({}: EightInfoProps) => {
  return (
    <>
      <div className="EightInfo">
        <div className="EightInfo-area">
          <div className="EightInfo-area-name">에이트스튜디오</div>
          <div className="EightInfo-area-title">
            는 체계적으로 프로세스를 <br />
            갖춘 전문 그래픽 기업입니다.
          </div>
          <hr />
          <div className="EightInfo-area-info">
            에이트 스튜디오는 현재 일러스트레이션 콘텐츠를 토대로 게임과
            <br />
            서비스의 자체 개발, 서적 출판 등으로 사업 영역을 확장해 더 넓은
            <br />
            세상과 소통하고 더욱더 가치 있는 시각적 즐거움을 공유해나갑니다
          </div>
        </div>
        <div className="EightInfo-list">
          <div className="EightInfo-list-content">
            <div className="EightInfo-list-content-title">CREATIVE DISIGN</div>
            <div className="EightInfo-list-content-info">
              PC, 모바일 게임의 일러스트와 <br />
              원화, 그래픽 리소스를 제작합니다
            </div>
          </div>

          <div className="EightInfo-list-content">
            <div className="EightInfo-list-content-title">ART AGENT</div>
            <div className="EightInfo-list-content-info">
              PC, 모바일 게임의 대규모 작가 메니지먼트 및 계약 대행 <br />
              관리 에이전트 전체업무를 대행합니다.
            </div>
          </div>

          <div className="EightInfo-list-content">
            <div className="EightInfo-list-content-title">GRAPHIC PROCESS</div>
            <div className="EightInfo-list-content-info">
              체계적인 프로세스를 통해 <br />
              최상의 그래픽 서비스를 제공합니다.
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default EightInfo;
