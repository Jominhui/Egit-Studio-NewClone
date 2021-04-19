import React from "react";
import "./StoreNeo.scss";
import StoreView from "../../assets/images/store/storeview.svg";

interface StoreNeoProps {}

const StoreNeo = ({}: StoreNeoProps) => {
  return (
    <>
      <div className="StoreNeo">
        <div className="StoreNeo-area">
          <div className="StoreNeo-area-name">네오스토어</div>
          <hr />
          <div className="StoreNeo-area-info">
            에이트 스튜디오는 현재 일러스트레이션 콘텐츠를 토대로 게임과
            <br />
            서비스의 자체 개발, 서적 출판 등으로 사업 영역을 확장해 더 넓은
            <br />
            세상과 소통하고 더욱더 가치 있는 시각적 즐거움을 공유해나갑니다
            <br />
          </div>
          <div className="StoreNeo-area-btn">NEO STORE</div>
        </div>
        <img src={StoreView} className="StoreNeo-img" />
      </div>
    </>
  );
};

export default StoreNeo;
