import React from "react";
import "../styles/Header.css";
import menu from "../images/menu.png";
import foto from "../images/Dessa.jpg";

function Header() {
  return (
    <div className="header">
      <ul>
        <li>
          <a>Gmail</a>
        </li>
        <li>
          <a>Imagens</a>
        </li>
        <li>
          <img src={menu} alt="Menu" />
        </li>
        <li>
          <img src={foto} alt="Foto" className="foto" />
        </li>
      </ul>
    </div>
  );
}

export default Header;
