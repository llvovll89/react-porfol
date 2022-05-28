import "./Nav.css";
import { AiFillHome, AiFillProject, AiFillContacts } from "react-icons/ai";
import { FaUserTie } from "react-icons/fa";
import { useState } from "react";

import React from "react";

function Nav() {
  const [active, setActive] = useState('#')
  return (
    <nav>
      <a href="#" onClick={() => setActive('#')} className={active === '#' ? 'active' : ''}>
        <AiFillHome />
      </a>
      <a href="#about" onClick={() => setActive('#about')} className={active === '#about' ? 'active' : ''}>
        <FaUserTie />
      </a>
      <a href="#project" onClick={() => setActive('#project')} className={active === '#project' ? 'active' : ''}>
        <AiFillProject />
      </a>
      <a href="#contact" onClick={() => setActive('#contact')} className={active === '#contact' ? 'active' : ''}>
        <AiFillContacts />
      </a>
      {/* <a href=""></a>
  <a href=""></a> */}
    </nav>
  );
}

export default Nav;
