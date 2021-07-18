import React from "react";
import "../styles/AdvertisementComponent.scss";
import horizontal from "../img/673151060803742547.jpg";
import vertical from "../img/gr-rfedtretgreL.jpg";

const AdvertisementComponent = (horizontalVersion) => {
  return (
    <div className="advertisement">
      <img
        src={horizontalVersion.horizontalVersion ? horizontal : vertical}
        alt="reklama"
      ></img>
    </div>
  );
};

export default AdvertisementComponent;
