import React from "react";
import "../styles/SecondTypeOfComponent.scss";

const SecondTypeOfComponent = ({
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
      <div className="secondTypeOfComponentMain">
        <div className="secondTypeContentContainer">
          <img className="pictureToDisplay" src={img} alt={title}></img>
          {configuration[index] !== 1 && <div className="gradient"></div>}
          <div className="componentContent">
            <div className="secondTypeOfCategory">
              {service.replace(".interia.pl", "")}
            </div>
            {configuration[index] !== 1 && (
              <div className="secondTypeOfTitleInner">
                {title.toUpperCase()}
              </div>
            )}
          </div>
        </div>
        {configuration[index] === 1 && (
          <div className="secondTypeOfTitleOuter">{title}</div>
        )}
      </div>
    </a>
  );
};

export default SecondTypeOfComponent;
