import React from "react";

import "./styles.css";

import icon from "../../assets/icons/icon.png";

const Nav = () => (
  <nav>
    <div className="wrapper">
      <div className="left">
        <div className="logo">
          <img src={icon} />
          Watching Tracker
        </div>
      </div>
      <div className="right">
        <div className="link-item active">Início</div>
        <div className="link-item">Filmes</div>
        <div className="link-item">Séries</div>
        <div className="link-item">Meu Perfil</div>
      </div>
    </div>
  </nav>
);

export default Nav;
