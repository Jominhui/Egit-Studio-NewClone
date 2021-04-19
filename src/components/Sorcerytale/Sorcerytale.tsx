import React from "react";
import "./Sorcerytale.scss";
import logo from "../../assets/images/Game/Sorcery/sorcerylogo.svg";
import View from "../../assets/images/Game/Sorcery/review.svg";
import people from "../../assets/images/Game/Sorcery/people.svg";

interface SorcerytaleProps {}

const Sorcerytale = ({}: SorcerytaleProps) => {
  return (
    <>
      <div className="sorcery">
        <div className="sorcery-textcontent up-fadein">
          <div className="sorcery-textcontent-area">
            <img src={logo} className="sorcery-textcontent-area-title" />
            <div className="sorcery-textcontent-area-info">
              12년 전, 무너져 내린 하늘
              <br />
              무너진 하늘은 파편이 되어 조각조각 흩어져내리고,
              <br />
              그로 인해 티테아 대륙의 운명은 크게 바뀌었습니다.
              <br />
              무너진 세계의 운명을 바꿀 수 있는 자들은 오진 마법사 뿐.
              <br />
              티테아에서 모험을 떠나는 마법사들의 이야기를 직접 들어보세요
            </div>
          </div>
        </div>
        <div className="sorcery-viewcontent">
          <img src={View} alt="" className="sorcery-viewcontent-view" />
          <img src={people} alt="" className="sorcery-viewcontent-icon" />
        </div>
      </div>
    </>
  );
};

export default Sorcerytale;
