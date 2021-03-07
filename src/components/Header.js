import React, { useState, useEffect } from "react";
import MenuIcon from "@material-ui/icons/Menu";
import { Link } from "react-router-dom";
import logo from "../images/logo.png";
const Header = () => {
  const [show, handleShow] = useState(false);

  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (window.scrollY > 500) {
        handleShow(true);
      } else {
        handleShow(false);
      }
    });
    // return () => {
    //   window.addEventListener("scroll");
    // };
  }, []);
  return (
    <div className={`header ${show && "header__black"}`}>
      <div className="header__left">
        {/* <MenuIcon className="burgerIcon" /> */}
        <Link to="/">
          <img className="header__logo" src={logo} alt="Logo" />
        </Link>
      </div>

      <div className="header__right">
        <Link to="/record">
          <p className={`header__option ${show && "header__optionBorderBlack"}`}>基金會記事</p>
        </Link>
        {/* <VideoCallSharpIcon className="header__icon" />
        <AppsSharpIcon className="header__icon" />
        <NotificationsSharpIcon className="header__icon" />
        <Avatar /> */}
      </div>
    </div>
  );
};

export default Header;
