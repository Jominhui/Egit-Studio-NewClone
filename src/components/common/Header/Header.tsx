import React from "react";
import "./Header.scss";
import Logo from "../../../assets/images/logo.svg";
import { Link } from "react-router-dom";

interface HeaderProps {}

const Header = ({}: HeaderProps) => {
  return (
    <>
      <div className="header">
        <div className="header-area">
          <Link to="/">
            <img src={Logo} />
          </Link>
          <div className="header-area-menu">
            <Link to="/" className="header-area-menu-content">
              회사소개
            </Link>
            <Link to="/game" className="header-area-menu-content">
              게임
            </Link>
            <Link to="/artist" className="header-area-menu-content">
              아티스트
            </Link>
            <Link to="/studio" className="header-area-menu-content">
              스튜디오
            </Link>
            <Link to="/store" className="header-area-menu-content">
              스토어
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default Header;
