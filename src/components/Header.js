import React from "react";
import MenuIcon from "@material-ui/icons/Menu";
import { Link } from "react-router-dom";
const Header = () => {
  return (
    <div className="header">
      <div className="header__left">
        <MenuIcon className="burgerIcon" />
        <Link to="/">
          <img
            className="header__logo"
            src="https://www.logo.wine/a/logo/YouTube/YouTube-Almost-Black-Logo.wine.svg"
            alt="youtubeLogo"
          />
        </Link>
      </div>

      <div className="header__right">
        {/* <VideoCallSharpIcon className="header__icon" />
        <AppsSharpIcon className="header__icon" />
        <NotificationsSharpIcon className="header__icon" />
        <Avatar /> */}
      </div>
    </div>
  );
};

export default Header;
