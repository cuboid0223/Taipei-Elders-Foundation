import React from "react";
import { GoogleMap, LoadScript, Marker } from "@react-google-maps/api";
import { Link } from "react-router-dom";
const Map = () => {
  const containerStyle = {
    width: "100%",
    // height: "450px",
    height: "450px",
  };

  const center = {
    lat: 25.078366846348164,
    lng: 121.55887157033636,
  };
  //   const DocsApiKeyInput = require("./DocsApiKeyInput").default;

  return (
    <div className='map'>
      <LoadScript googleMapsApiKey="AIzaSyArE0PHhushxIrXUCfZDIXO4aZCub65mEo">
        <GoogleMap mapContainerStyle={containerStyle} center={center} zoom={15}>
          {/* Child components, such as markers, info windows, etc. */}
          <Marker
            position={center}
            onClick={() =>
              window.open(
                "https://www.google.com.tw/maps/place/10491%E5%8F%B0%E5%8C%97%E5%B8%82%E4%B8%AD%E5%B1%B1%E5%8D%80%E6%95%AC%E6%A5%AD%E4%B8%89%E8%B7%AF162%E5%B7%B780%E8%99%9F/@25.0780024,121.5566185,17z/data=!3m1!4b1!4m5!3m4!1s0x3442ac0cd8a7a09d:0x6a4a4c0192a7f3d!8m2!3d25.0779976!4d121.5588072"
              )
            }
          />
        </GoogleMap>
      </LoadScript>
      {/* <DocsApiKeyInput />; */}
    </div>
  );
};

export default Map;
