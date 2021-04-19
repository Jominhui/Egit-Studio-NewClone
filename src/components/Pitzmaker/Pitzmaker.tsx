import React from "react";
import "./Pitzmaker.scss";
import View from "../../assets/images/Game/Pitzmaker/review.svg";
import icon from "../../assets/images/Game/Pitzmaker/makericon.svg";

interface PitzmakerProps {}

const Pitzmaker = ({}: PitzmakerProps) => {
  return (
    <>
      <div className="pitzmaker up">
        <div className="pitzmaker-textcontent">
          <div className="pitzmaker-textcontent-area">
            <div className="pitzmaker-textcontent-area-title">피츠메이커</div>
            <div className="pitzmaker-textcontent-area-info">
              나만의 캐릭터를 만들고, 간직해보자! <br />
              프로 일러스트레이터의 작화로 만드는 내 캐릭터 <br />
              피츠메이커는 자작 캐릭터를 만드는 캐주얼 게임입니다. <br />
              다양한 스타일의 아이템을 이용해 각양각색의 캐릭터를 만들고
              <br />
              말풍선과 그래픽 배경으로 더욱 여러가지 연출이 가능합니다.
            </div>
            <div className="pitzmaker-textcontent-area-btn">Google Play</div>
          </div>
        </div>
        <div className="pitzmaker-viewcontent">
          <img src={View} alt="" className="pitzmaker-viewcontent-view" />
          <img src={icon} alt="" className="pitzmaker-viewcontent-icon" />
        </div>
      </div>
    </>
  );
};

export default Pitzmaker;
