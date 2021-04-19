import React from "react";
import "./EightAcademy.scss";
import people from "../../assets/images/main/people.png";
import logo from "../../assets/images/main/acalogo.svg";

interface EightAcademyProps {}

const EightAcademy = ({}: EightAcademyProps) => {
  return (
    <>
      <div className="eightacademy">
        <div className="eightacademy-area">
          <img src={people} alt="" />
        </div>
        <div className="eightacademy-text">
          <div className="eightacademy-text-logo">
            <img src={logo} alt="" />
          </div>
          <div className="eightacademy-text-info">
            네오아카데미는 에이트스튜디오가 설립한 2D 일러스트 레이션 전문
            교육기관 입니다.
            <br />
            네오아카데미에서는 그림의 기초와 취미 일러스트에서 부터 실무
            <br />
            포트폴리오까지 폭 넓은 일러스트 교육을 진행합니다.
          </div>
          <div className="eightacademy-text-btn">NEO ACDEMY</div>
        </div>
      </div>
    </>
  );
};

export default EightAcademy;
