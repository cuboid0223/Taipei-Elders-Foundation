import React from "react";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
const Banner = () => {
  return (
    <div
      className="banner"
      style={{
        height: "100vh",
        // width: "100%",
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundImage: `url(${"https://images.pexels.com/photos/45842/clasped-hands-comfort-hands-people-45842.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500"})`,
      }}
    >
      <h1 className="banner__title">
        <span>
          <i>台北市</i>
        </span>
        <span>
          <i>老人</i>
        </span>
        <span>
          <i>基金會</i>
        </span>
        <br />
        <span>
          <i>Elders </i>
        </span>
        <span>
          <i> Foundation</i>
        </span>
      </h1>
      <ExpandMoreIcon className="ExpandMoreIcon" />
    </div>
  );
};

export default Banner;
