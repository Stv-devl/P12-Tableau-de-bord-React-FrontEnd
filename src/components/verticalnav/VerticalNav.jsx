import React from "react";

const VerticaNav = () => {
  return (
    <nav className="sidebar">
      <div className="img-wrapper">
        <img src="../logo-yoga.png" alt="Logo yoga" className="nav-img " />
        <img src="../logo-swim.png" alt="Logo nage" className="nav-img " />
        <img src="../logo-bike.png" alt="Logo vélo" className="nav-img" />
        <img src="../logo-gym.png" alt="Logo gym" className="nav-img" />
      </div>
      <p className="copyright">Copyright, sportsee 2020</p>
    </nav>
  );
};

export default VerticaNav;
