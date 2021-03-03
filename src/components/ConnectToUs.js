import React from "react";
import Map from "../components/Map";
import ConnectForm from "../components/ConnectForm";
const ConnectToUs = () => {
  return (
    <div className="connectToUs">
      <div className="leftBox">
        <h1 data-aos="zoom-in-up">我們在哪？</h1>
        <Map />
      </div>
      <div className="rightBox">
        <h1 data-aos="zoom-in-down">隨時聯絡！</h1>
        <ConnectForm />
      </div>
    </div>
  );
};

export default ConnectToUs;
