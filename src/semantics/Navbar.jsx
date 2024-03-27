import React from "react";
import logo from "../assets/logo.png";

function Navbar() {
  return (
    <nav>
      <div className="logo">
        <img src={logo} alt="" />
      </div>
      <ul>
        <li><a href="#">Home</a></li>
        <li><a href="#">about</a></li>
        <li><a href="#">services</a></li>
        <li><a href="#">contact</a></li>
      </ul>
    </nav>
  );
}

export default Navbar;
