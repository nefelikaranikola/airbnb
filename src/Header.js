import React from "react";
import "./Header.css";

function Header() {
  return (
    <div className="header">
      <img
        className="header_logo"
        src="https://upload.wikimedia.org/wikipedia/commons/thumb/6/69/Airbnb_Logo_B%C3%A9lo.svg/2560px-Airbnb_Logo_B%C3%A9lo.svg.png"
        alt=""
      />
      <div className="header_search">
        <input type="text" />
        <i class="fas fa-search"></i>
      </div>

      <div className="header_info">
        <p>Become a host</p>
        <i class="fas fa-globe"></i>
        <i class="fas fa-chevron-down"></i>
        <i class="fas fa-user-circle"></i>
      </div>
    </div>
  );
}

export default Header;
