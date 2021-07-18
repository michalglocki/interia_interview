import React from "react";
import "../styles/FirstTypeOfComponent.scss";

const FirstTypeOfComponent = ({
  title,
  img,
  service,
  link,
  index,
  configuration,
}) => {
  return (
    <a
      className={
        configuration[index] === 1
          ? "signleColumnComponent"
          : configuration[index] === 2
          ? "twoColumnComponent"
          : "threeColumnComponent"
      }
      href={link}
    >
      <div className="firstTypeOfComponentMain">
        <img className="pictureToDisplay" src={img} alt={title}></img>
        <div className="gradient"></div>
        <div className="componentContent">
          <div className="firstTypeOfCategory">
            {service.replace(".interia.pl", "")}
          </div>
          <div className="firstTypeOfTitle">{title.toUpperCase()}</div>
        </div>
      </div>
    </a>
  );
};

export default FirstTypeOfComponent;
