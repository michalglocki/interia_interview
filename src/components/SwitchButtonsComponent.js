import React from "react";
import "../styles/SwitchButtonsComponent.scss";
import { Link } from "react-router-dom";

const SwitchButtonsComponent = ({
  data,
  configuration,
  setComponentsConfigurationState,
}) => {
  function changeDisplaySettings(value, index, configuration) {
    let currentConfiguration = Array.from(configuration);

    for (let i = 0; i < configuration.length; i++) {
      if (i === index) {
        currentConfiguration[i] = parseInt(value, 10);
      }
    }
    setComponentsConfigurationState(currentConfiguration);
  }
  return (
    <>
      <div className="buttonsContainer">
        <Link to="/">
          <button className="button">Wersja 1</button>
        </Link>
        <Link to="/second">
          <button className="button">Wersja 2</button>
        </Link>
      </div>
      <div className="selectContainer">
        {data.map((message, index) => (
          <select
            onChange={(event) =>
              changeDisplaySettings(event.target.value, index, configuration)
            }
            className="selectField"
            key={"select" + message.objectId}
            defaultValue={configuration[index]}
          >
            <option value="1">1</option>
            <option value="2">2</option>
            <option value="3">3</option>
          </select>
        ))}
      </div>
    </>
  );
};

export default SwitchButtonsComponent;
