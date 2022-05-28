import React from "react";
import { AiFillGithub, AiFillInstagram, AiFillMail } from "react-icons/ai";

function HeaderSocial() {
  return (
    <div className="header-social">
      <a href="https://github.com/llvovll89" target="_blank">
        <AiFillGithub />
      </a>
      <a href="https://www.instagram.com/ghgh9405/" target="_blank">
        <AiFillInstagram />
      </a>
      <a href="mailto:svvva5579@naver.com" target="_blank">
        <AiFillMail />
      </a>
    </div>
  );
}

export default HeaderSocial;
