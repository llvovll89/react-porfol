import "./Header.css";
import React from "react";
import ContactBtn from "./ContactBtn";
import Info from '../../assets/img/main1.gif'
import HeaderSocial from "./HeaderSocial";

function Header() {
  return (
    <header>
      <div className="container header-container">
        <h5>안녕하세요!</h5>
        <h1>저는 김건호입니다.</h1>
        <h5 className="text-light">신입 FrontEnd - Developer</h5>
        <ContactBtn />
        <HeaderSocial />

        <div className="info">
          <img src={Info} alt="Geon ho Kim" />
        </div>

        <a href="#contact" className="scroll-down">Scroll Down</a>
      </div>
    </header>
  );
}

export default Header;
